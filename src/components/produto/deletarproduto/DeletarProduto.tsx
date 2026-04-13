import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { CheckIcon} from "@phosphor-icons/react";



function DeletarProduto() {

    //Objeto responsavel por redirecionar o usuario para uma outra rota
    const navigate= useNavigate();

    //Estado para controlar o Loader(animação de carregamento)
    const [isLoading, setIsLoading]= useState<boolean>(false);

    //Estado que irá receber os dados do postagem que será persistido no backend
    const [produto, setProduto]= useState<Produto>({} as Produto);

    //Acessar o parametro id da rota de edição do postagem
    const {id} = useParams<{id: string}>();

    //Função para buscar uma postagem pelo id no backend
    async function buscarProdutoPorId() {
        try{
            setIsLoading(true);

            await buscar(`/produtos/${id}`, setProduto)

        }catch(error:any){
           
            ToastAlerta("Erro ao procurar o produto!", "erro")
            
        } finally{
            setIsLoading(false)
        }
    }


    // Cria um useEffect para monitorar o id (rota)
    useEffect( () => {
        if(id !== undefined){
            buscarProdutoPorId();
        }
    }, [id])

    //Function de retornar

    function retornar(){
        navigate('/produtos')
    }

    async function deletarProduto(){
        setIsLoading(true);

        try{
            await deletar(`/produtos/${id}`);

            ToastAlerta("Produto deletado com sucesso!", "sucesso")

        } catch(error: any){
            ToastAlerta("Produto não foi deletado!", "erro")
        }

        setIsLoading(false);
        retornar();
    }

    
  return (
    <div className="container w-1/3 mx-auto">
        <h1 className="text-4xl text-center my-4"> Deletar Produto</h1>
        <p className="text-center font-semibold mb-4">
            Você tem certeza de que deseja apagar o Produto a seguir?
        </p>
        <div className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-indigo-100 tracking-widest">
            <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-xl tracking-wide">
                Produto
            </header>
            <p className="p-8 text-3xl bg-slate-200 h-full"> {produto.nome} </p>
            <div className="flex">
                <button className="text-slate-100 bg-red-400 hover-bg-red-600 w-full py-2"
                onClick={retornar}>
                 
               <span className="px-2">
                 Não</span>
                </button>

                <button className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
                
                onClick={deletarProduto}>
                    <CheckIcon size={20} />
                    {
                            isLoading ?
                                <ClipLoader 
                                    color="#ffffff"
                                    size={24}
                                />
                            :
                            
                            <span className="px-2">Sim</span>                        
                        }
                        
                </button>
            </div>
        </div>
    </div>
  )
}

export default DeletarProduto
