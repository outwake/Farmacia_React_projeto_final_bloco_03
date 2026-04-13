import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";
import { EraserIcon, PencilIcon } from "@phosphor-icons/react";

interface CardProdutosProps {
  produto: Produto;
}
function CardProduto({ produto }: CardProdutosProps) {
  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-indigo-100 "
    >
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img
            src={produto.foto}
            className="h-12 rounded-full"
            alt={produto.nome}
          />
          <h3 className="text-lg font-bold text-center uppercase">
            {produto.nome}
          </h3>
        </div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">Categoria</h4>
          <p>{produto.categoria?.nome}</p>
          <p>Categoria: {produto.categoria?.nome} </p>
          <p className="font-semibold">R${produto.preco}</p>
        </div>
        
      </div>
      <div className="flex">
        <Link
          to={`/editarproduto/${produto.id}`}
          className="w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <PencilIcon size={20} />
          <span className="text-sm font-medium">Editar</span>
        </Link>
        <Link
          to={`/deletarproduto/${produto.id}`} 
          className="text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center"
        >
          <EraserIcon size={20}/>
          <span className="text-sm font-medium">Excluir</span>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
