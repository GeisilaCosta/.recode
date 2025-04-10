import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/cursos')
      .then((response) => {
        setCursos(response.data);
      })
      .catch((error) => {
        console.error('Erro ao carregar cursos:', error);
      });
  }, [cursos]);

  const addCurso = () => {
    const novoCurso = { descricao, valor };
    axios.post('http://localhost:5000/api/cursos', novoCurso)
      .then(() => {
        setDescricao('');
        setValor('');
      })
      .catch((error) => {
        console.error('Erro ao adicionar curso:', error);
      });
  };

  const deleteCurso = (id) => {
    axios.delete(`http://localhost:5000/api/cursos/${id}`)
      .then(() => {
        setCursos(cursos.filter(curso => curso.id !== id));
      })
      .catch((error) => {
        console.error('Erro ao excluir curso:', error);
      });
  };

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={addCurso}>Adicionar Curso</button>

      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            {curso.descricao} - R${curso.valor}
            <button onClick={() => deleteCurso(curso.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cursos;
