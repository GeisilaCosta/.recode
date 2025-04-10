import React, { useState, useEffect } from "react";
import axios from "axios";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [editando, setEditando] = useState(null);
  const [editDescricao, setEditDescricao] = useState("");
  const [editValor, setEditValor] = useState("");

  useEffect(() => {
    carregarCursos();
  }, []);

  const carregarCursos = () => {
    axios
      .get("http://localhost:5000/api/cursos")
      .then((response) => {
        setCursos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar cursos:", error);
      });
  };

  const addCurso = () => {
    const novoCurso = { descricao, valor };
    axios
      .post("http://localhost:5000/api/cursos", novoCurso)
      .then(() => {
        setDescricao("");
        setValor("");
        carregarCursos();
      })
      .catch((error) => {
        console.error("Erro ao adicionar curso:", error);
      });
  };

  const deleteCurso = (id) => {
    axios
      .delete(`http://localhost:5000/api/cursos/${id}`)
      .then(() => {
        carregarCursos();
      })
      .catch((error) => {
        console.error("Erro ao excluir curso:", error);
      });
  };

  const iniciarEdicao = (curso) => {
    setEditando(curso.id);
    setEditDescricao(curso.descricao);
    setEditValor(curso.valor);
  };

  const cancelarEdicao = () => {
    setEditando(null);
    setEditDescricao("");
    setEditValor("");
  };

  const salvarEdicao = (id) => {
    const cursoAtualizado = {
      descricao: editDescricao,
      valor: editValor
    };
    
    axios
      .put(`http://localhost:5000/api/cursos/${id}`, cursoAtualizado)
      .then(() => {
        carregarCursos();
        cancelarEdicao();
      })
      .catch((error) => {
        console.error("Erro ao atualizar curso:", error);
      });
  };

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <div>
        <h2>{editando ? "Editar Curso" : "Adicionar Novo Curso"}</h2>
        <input
          type="text"
          placeholder="Descrição"
          value={editando ? editDescricao : descricao}
          onChange={(e) => editando ? setEditDescricao(e.target.value) : setDescricao(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={editando ? editValor : valor}
          onChange={(e) => editando ? setEditValor(e.target.value) : setValor(e.target.value)}
        />
        {editando ? (
          <>
            <button onClick={() => salvarEdicao(editando)}>Salvar</button>
            <button onClick={cancelarEdicao}>Cancelar</button>
          </>
        ) : (
          <button onClick={addCurso}>Adicionar Curso</button>
        )}
      </div>

      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            {editando === curso.id ? (
              <div>
                <input
                  type="text"
                  value={editDescricao}
                  onChange={(e) => setEditDescricao(e.target.value)}
                />
                <input
                  type="number"
                  value={editValor}
                  onChange={(e) => setEditValor(e.target.value)}
                />
              </div>
            ) : (
              <div>
                {curso.descricao} - R${curso.valor}
                <button onClick={() => iniciarEdicao(curso)}>Editar</button>
                <button onClick={() => deleteCurso(curso.id)}>Excluir</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cursos;