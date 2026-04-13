import {MagnifyingGlassIcon, ShoppingCartIcon,UserIcon,} from "@phosphor-icons/react";
import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [busca, setBusca] = useState("");
  return (
    <nav className=" bg-indigo-900 flex items-center justify-around px-6 py-3 gap-6 shadow-lg">
      <Link to="/" className="flex items-center">
        <img src="./src/assets/Icon_Farmacia.png" alt="" className="w-46" />
      </Link>
      <div className="flex flex-1 max-w-md">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={busca}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBusca(e.target.value)
          }
          className="w-full bg-[#d8d9db] border border-[#b0b0b1] rounded-l-md text-white text-sm px-4 py-2 placeholder-slate-500 outline-none focus:border-blue-400"
        />
        <button className="bg-blue-800 hover:bg-blue-500 px-4 rounded-r-md flex items-center transition-colors text-white">
          <MagnifyingGlassIcon size={20} />
        </button>
      </div>
      <div className="flex items-center gap-5 text-slate-300 text-sm">
        <Link to="/produtos" className="hover:text-white transition-colors">
          Produtos
        </Link>
        <Link to="/categorias" className="hover:text-white transition-colors">
          Categorias
        </Link>
        <Link
          to="/cadastrarcategoria"
          className="hover:text-white transition-colors"
        >
          Cadastrar Categoria
        </Link>
      </div>
      <div className="flex justify-between items-center gap-4 text-slate-300 ">
        <UserIcon size={32} className="hover:text-white" />
        <ShoppingCartIcon size={32} className="hover:text-white"/>
      </div>
    </nav>
  );
}

export default Navbar;
