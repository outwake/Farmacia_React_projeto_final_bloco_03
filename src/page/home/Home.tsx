import { Link } from "react-router-dom"
import ListarProduto from "../../components/produto/listarproduto/ListarProduto"

function Home() {
  return (
   <>
    <div className="bg-white flex justify-center items-center px-6 py-16 md:p-24 min-h-screen">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
        
        {/* Imagem */}
        <div className="flex justify-center items-center order-first md:order-last">
          <img
            src="https://ik.imagekit.io/Outwake/imagens/produtos_farmacia/Imagem_hero.png"
            alt="Imagem da Pagina Home"
            className="w-1/2 sm:w-2/5 md:w-2/3"
          />
        </div>

        {/* Texto e botões */}
        <div className="flex flex-col gap-4 items-center md:items-start justify-center text-center md:text-left order-last md:order-first">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            Seja Bem Vinde à
            <br />
            <span className="text-indigo-900 text-5xl sm:text-6xl md:text-8xl">Farma</span>
            <span className="text-red-600 text-4xl sm:text-5xl md:text-6xl">Povo!</span>
          </h2>

          <p className="text-base md:text-xl">
            Aqui você encontra Medicamentos e Cosméticos!
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/cadastrarcategoria"
              className="rounded text-white border-indigo-800 bg-indigo-900 border-solid border-2 py-2 px-4 hover:underline"
            >
              Nova Categoria
            </Link>
            <Link
              to="/cadastrarproduto"
              className="rounded text-white border-indigo-800 bg-indigo-900 border-solid border-2 py-2 px-4 hover:underline"
            >
              Novo Produto
            </Link>
          </div>
        </div>

      </div>
    </div>
    <div className="">
      <hr className="border-t border-gray-200 shadow-2xl my-8" />
    <ListarProduto/>
    </div>
    </> 
  )
}

export default Home