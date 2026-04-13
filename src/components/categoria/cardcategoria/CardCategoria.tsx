import { EraserIcon, PencilIcon } from "@phosphor-icons/react";
import type Categoria from "../../../models/Categoria"
import { Link } from "react-router-dom";

interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
     <div className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-indigo-100">
      
      <header className="py-4 px-6 bg-indigo-800 text-white font-bold text-xl tracking-wide">
        {categoria.nome}
      </header>

      <p className="px-6 py-3 text-sm text-indigo-400 uppercase font-semibold tracking-widest bg-white">
        Categoria #{categoria.id}
      </p>

      <div className="flex border-t border-indigo-100 mt-auto">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-indigo-700 bg-indigo-50 hover:bg-indigo-100 
                     flex items-center justify-center gap-2 py-3 transition-colors duration-200"
        >
          <PencilIcon size={20} />
          <span className="text-sm font-medium">Editar</span>
        </Link>

        <div className="w-px bg-indigo-100" />

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full text-red-500 bg-red-50 hover:bg-red-100 
                     flex items-center justify-center gap-2 py-3 transition-colors duration-200"
        >   

          <EraserIcon size={20}/>
          <span className="text-sm font-medium">Excluir</span>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria