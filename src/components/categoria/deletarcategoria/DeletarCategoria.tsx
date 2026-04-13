import { useEffect, useState } from "react";
import { buscar, deletar } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function DeletarCategoria() {


   //Objeto responsavel por redirecionar o usuario para uma outra rota
      const navigate = useNavigate();
  
      //Estado para controlar o Loader (animação de carregamento)
      const [isLoading, setIsLoading]= useState<boolean>(false);
  
      //Estado que irá receber os dados da categoria que será persistido no backend
      const [categoria, setCategoria]= useState<Categoria>({} as Categoria);
  
      //Acessar o parametro id da rota de ediçao da Categoria
      const {id} = useParams<{ id: string}>();
  
  async function buscarCategoriaPorId() {
          try{
              setIsLoading(true);
  
              await buscar(`/categorias/${id}`, setCategoria);
          } catch(error: any){
              if(error.toString().includes('401')){
                  
                  ToastAlerta("Categoria não foi encontrada!", "erro")
              }
          } finally{
              setIsLoading(false);
          }
          
      }
      
       // Cria um useEffect para monitorar o id (rota)
      useEffect( () => {
          if(id !== undefined){
              buscarCategoriaPorId();
          }
      }, [id])
      
        //Function de retornar

    function retornar(){
        navigate('/categorias')
    }

    async function deletarCategoria(){
        setIsLoading(true);

        try{
            await deletar(`/categorias/${id}`);

            ToastAlerta("Categoria deletada com sucesso!", "sucesso")
        } catch(error: any){
            
          ToastAlerta("Categoria não foi deletada!", "erro")
        }

        setIsLoading(false);
        retornar();
    }


  return(
    
    <div className="container w-1/3 mx-auto">
        <h1 className="text-4xl text-center my-4"> Deletar Categoria</h1>
        <p className="text-center font-semibold mb-4">
            Você tem certeza de que deseja apagar a Categoria a seguir?
        </p>
        <div className="border border-none flex flex-col rounded-2xl shadow-2xl overflow-hidden justify-between">
            <header className="py-4 px-6 bg-indigo-800 text-white font-bold text-xl tracking-wide">
                Categoria
            </header>
            <p className="p-8 text-sm text-indigo-400 uppercase font-semibold tracking-widest bg-white"> {categoria.nome} </p>
            <div className="flex">
                <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
                onClick={retornar}>
                Não
                </button>

                <button className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
                onClick={deletarCategoria}>
                    {
                            isLoading ?
                                <ClipLoader 
                                    color="#ffffff"
                                    size={24}
                                />
                            :
                            <span>Sim</span>                        
                        }
                </button>
            </div>
        </div>
    </div>
  )
}

export default DeletarCategoria