import { useEffect, useState, type ChangeEvent, type SyntheticEvent,} from "react";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";

function FormCategoria() {


  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const { id } = useParams<{ id: string }>();

  async function buscarCategoriaPorId() {
    try {
      setIsLoading(true);
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        alert("Categoria não encontrada!");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId();
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: SyntheticEvent<HTMLFormElement>) {
  e.preventDefault();

  try {
    setIsLoading(true);

    if (id !== undefined) {
      await atualizar("/categorias", categoria, setCategoria);
      alert("Categoria atualizada com sucesso!");
    } else {
      // Envia apenas os campos necessários, sem o id
      const { id: _, ...novaCategoria } = categoria;
      await cadastrar("/categorias", novaCategoria, setCategoria);
      alert("Categoria cadastrada com sucesso!");
    }

    retornar();
  } catch (error: any) {
    console.error("Erro detalhado:", error?.response?.status, error?.response?.data);
    alert(
      id !== undefined
        ? "Erro ao atualizar a Categoria!"
        : "Erro ao cadastrar a Categoria!"
    );
  } finally {
    setIsLoading(false);
  }
}

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto text-gray-600 tracking-widest">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Atualizar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria:</label>
          <input
            type="text"
            placeholder="Escreva o nome de categoria"
            name="nome"
            id="nome"
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={categoria.nome || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          className="rounded text-slate-100 bg-indigo-800 hover:bg-indigo-400 
                     w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;