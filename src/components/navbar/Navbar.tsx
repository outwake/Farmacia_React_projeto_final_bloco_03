import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, ListIcon, XIcon } from "@phosphor-icons/react"
import { useState, type ChangeEvent } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [busca, setBusca] = useState("")
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav className="bg-indigo-900 text-white shadow-lg">
      
      {/* Barra principal */}
      <div className="flex items-center justify-between px-6 py-3 gap-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="https://ik.imagekit.io/Outwake/imagens/produtos_farmacia/Icon_Farmacia.png"
            alt="Logo Farmácia"
            className="w-30 md:w-40"
          />
        </Link>

        {/* Busca - some no mobile, aparece no md+ */}
        <div className="hidden md:flex flex-1 max-w-md">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={busca}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setBusca(e.target.value)}
            className="w-full bg-[#d8d9db] border border-[#b0b0b1] rounded-l-md text-gray-800 text-sm px-4 py-2 placeholder-slate-500 outline-none focus:border-blue-400"
          />
          <button className="bg-blue-800 hover:bg-blue-500 px-4 rounded-r-md flex items-center transition-colors">
            <MagnifyingGlassIcon size={20} />
          </button>
        </div>

        {/* Links - some no mobile */}
        <div className="hidden md:flex items-center gap-5 text-slate-300 text-sm">
          <Link to="/produtos" className="hover:text-white transition-colors">Produtos</Link>
          <Link to="/cadastrarproduto" className="hover:text-white transition-colors">Cadastrar Produto</Link>
          <Link to="/categorias" className="hover:text-white transition-colors">Categorias</Link>
          <Link to="/cadastrarcategoria" className="hover:text-white transition-colors">Cadastrar Categoria</Link>
        </div>

        {/* Ícones sempre visíveis */}
        <div className="flex items-center gap-4 text-slate-300">
          <UserIcon size={28} className="hover:text-white cursor-pointer" />
          <ShoppingCartIcon size={28} className="hover:text-white cursor-pointer" />
          {/* Botão hambúrguer - só no mobile */}
          <button
            className="md:hidden hover:text-white"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? <XIcon size={28} /> : <ListIcon size={28} />}
          </button>
        </div>

      </div>

      {/* Busca mobile */}
      <div className="md:hidden px-6 pb-3">
        <div className="flex">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={busca}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setBusca(e.target.value)}
            className="w-full bg-[#d8d9db] border border-[#b0b0b1] rounded-l-md text-gray-800 text-sm px-4 py-2 placeholder-slate-500 outline-none"
          />
          <button className="bg-blue-800 hover:bg-blue-500 px-4 rounded-r-md flex items-center transition-colors">
            <MagnifyingGlassIcon size={20} />
          </button>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {menuAberto && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-3 text-slate-300 text-sm border-t border-indigo-700">
          <Link to="/produtos" className="hover:text-white transition-colors pt-3" onClick={() => setMenuAberto(false)}>Produtos</Link>
          <Link to="/cadastrarproduto" className="hover:text-white transition-colors" onClick={() => setMenuAberto(false)}>Cadastrar Produto</Link>
          <Link to="/categorias" className="hover:text-white transition-colors" onClick={() => setMenuAberto(false)}>Categorias</Link>
          <Link to="/cadastrarcategoria" className="hover:text-white transition-colors" onClick={() => setMenuAberto(false)}>Cadastrar Categoria</Link>
        </div>
      )}

    </nav>
  )
}

export default Navbar