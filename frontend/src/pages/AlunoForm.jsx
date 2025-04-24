import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api.js';

export default function AlunoForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aluno, setAluno] = useState({
    nome: '',
    matricula: ''
  });

  useEffect(() => {
    if (id) {
      api.get(`/alunos/${id}`)
        .then(response => setAluno(response.data))
        .catch(error => console.error('Erro ao buscar aluno:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? 'put' : 'post';
    const url = id ? `/alunos/${id}` : '/alunos';

    api[method](url, aluno)
      .then(() => navigate('/'))
      .catch(error => console.error('Erro ao salvar aluno:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <h1>{id ? 'Editar Aluno' : 'Novo Aluno'}</h1>
      <form onSubmit={handleSubmit} className="box">
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={aluno.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Matrícula:</label>
          <input
            type="text"
            name="matricula"
            value={aluno.matricula}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="edit">
          {id ? 'Atualizar' : 'Salvar'}
        </button>
        <button type="button" className='remove' onClick={() => navigate('/')}>
          Cancelar
        </button>
      </form>
    </div>
  );
}