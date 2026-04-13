import {GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"


//usar rfce para fazer tudo isso
function Footer() {

  let data = new Date().getFullYear()
  return (
    <>
    <div className="flex justify-center bg-indigo-900 w-full font-sans text-white shadow-2xl">
      <div className=" container px-80 flex justify-around items-center py-4">
        <div className="flex flex-col justify-center items-center mx-10">
        <p className=" text-lg font-bold ">
          Farmacia do Povo | Copyright: {data}
        </p>
        <p>Desenvolvido by <a href="https://github.com/outwake" target="_blank" className="font-semibold"> Lary, a Pioral 😎 </a></p> 
        </div>
        <div className="flex flex-col gap-2 text-slate-100 items-center">
              <p className="text-lg"> Acesse Minhas redes sociais:</p>
              <div className="flex ">
               <Link to="https://www.linkedin.com/in/larissa-ferreira-mendonça-49655a185/" target="_blank" className="hover:text-white transition-colors"> 
                    < LinkedinLogoIcon size={42}/>
               </Link>

               <Link to="https://github.com/outwake" target="_blank" className="hover:text-white transition-colors"> 
                    < GithubLogoIcon size={42}/>
               </Link>

               <Link to="https://www.instagram.com/mrsherlokia/" target="_blank" className="hover:text-white transition-colors"> 
                    < InstagramLogoIcon size={42}/>
               </Link>
              </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer