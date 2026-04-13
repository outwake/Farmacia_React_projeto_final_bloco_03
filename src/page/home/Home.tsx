import { Link } from "react-router-dom"


function Home() {
  return (
    <>
        <div className="bg-cyan-100 flex justify-center items-center p-24">
            <div className="container grid grid-cols-1 md:grid-cols-2 text-black">
                <div className="flex justify-center pb-4 md:pb-0 order-first md:order-last">
                    <img src="./src/assets/Imagem_hero.png" alt="Imagem da Pagina Home" className="w-1/2 md:w-2/3" />
                </div>

            <div className="flex flex-col gap-4 items-center justify-center py-4 text-center md:text-left order-last md:order-first">
             <h2 className="text-3xl md:text-5xl font-bold">Seja Bem Vinde!</h2>
                <p className="text-base md:text-xl">
                 Aqui você encontra Medicamentos e Cosméticos!
                 </p>

                    <div className="flex justify-around gap-4">
                         <div className="rounded text-white 
                             border-indigo-800 bg-indigo-900 border-solid border-2 py-2 px-4">
                            <Link to='/cadastrarcategoria' className='hover:underline'> Nova Categoria </Link>
                         </div>
                         
                         {/* Para adicionar produto
                        <div className="rounded text-white 
                             border-indigo-800 bg-indigo-900 border-solid border-2 py-2 px-4">
                            <Link to='/cadastrarproduto' className='hover:underline'> Novo Produto </Link>
                         </div>*/}
                    </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Home