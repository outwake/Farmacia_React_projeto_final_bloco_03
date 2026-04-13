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
      <div className="flex flex-col h-full">
        <div className="flex w-full bg-indigo-800 py-2 px-4 items-center gap-4">
          <img
            src={produto.foto}
            className="h-12 rounded-full"
            alt={produto.nome}
          />
          <h3 className="text-sm text-white uppercase font-semibold tracking-widest line-clamp-2 wrap-break-word">
            {produto.nome}
          </h3>
        </div>
        <div className="px-4 pt-4 pb-4 border-t border-indigo-100 tracking-widest flex flex-col grow">
          <h4 className="flex mt-auto text-lg font-semibold uppercase ">Categoria</h4>
          <p>{produto.categoria?.nome}</p>
          <p>Categoria: {produto.categoria?.nome} </p>
          <p className="font-semibold">R${produto.preco}</p>
        </div>
        
      </div>
      <div className="flex mt-auto tracking-widest">
        <Link
          to={`/editarproduto/${produto.id}`}
          className="w-full text-indigo-700 bg-indigo-50 hover:bg-indigo-100 
                     flex items-center justify-center gap-2 py-3 transition-colors duration-200"
        >
          <PencilIcon size={20} />
          <span className="text-sm font-medium">Editar</span>
        </Link>
        <Link
          to={`/deletarproduto/${produto.id}`} 
          className="w-full text-red-700 bg-red-50 hover:bg-red-100 
                     flex items-center justify-center gap-2 py-3 transition-colors duration-200"
        >
          <EraserIcon size={20}/>
          <span className="text-sm font-medium">Excluir</span>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
