import { useState, useEffect } from "react";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import CardProduto from "../cardproduto/CardProduto";
import type Produto from "../../../models/Produto";

function ListarProduto() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [produtos, setProdutos] = useState<Produto[]>([]);


  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  async function buscarProdutos() {
    try {
      setIsLoading(true);

      await buscar("/produtos", setProdutos);
    } catch (error: any) {
      
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#312e81" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && produtos.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma Produto foi encontrado!
            </span>
          )}

          <div
            className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8"
          >
            {produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarProduto;
