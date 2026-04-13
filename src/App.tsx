import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./page/home/Home"
import ListarCategoria from "./components/categoria/listarcategoria/ListarCategoria"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto"
import FormProduto from "./components/produto/formproduto/FormProduto"
import ListarProduto from "./components/produto/listarproduto/ListarProduto"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"



function App() {
  return (
   <>
   <ToastContainer/>
   <BrowserRouter>
   <Navbar/>
   <div className="min-h-[80vh] bg-cyan-100">
    <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/categorias" element={<ListarCategoria />} />
    <Route path="/cadastrarcategoria" element={<FormCategoria />} />
    <Route path="/editarcategoria/:id" element={<FormCategoria />} />
    <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
    <Route path="/produtos" element={<ListarProduto />} />
    <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
    <Route path="/cadastrarproduto" element={<FormProduto />} />
		<Route path="/editarproduto/:id" element={<FormProduto />} />
    </Routes>
   </div>
    <Footer/>
   </BrowserRouter>
   
   </>
  )
}

export default App