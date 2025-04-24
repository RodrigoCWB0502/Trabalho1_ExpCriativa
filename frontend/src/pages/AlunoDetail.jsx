import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AlunoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aluno, setAluno] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAluno = async () => {
      try {
        const response = await api.get(`/alunos/${id}`);
        setAluno(response.data);
        toast.success('Dados do aluno carregados!');
      } catch (error) {
        toast.error(`Erro ao carregar aluno: ${error.message}`);
        console.error('Erro ao buscar aluno:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchAluno();
  }, [id, navigate]);

  if (loading) {
    return <div className="container">Carregando...</div>;
  }

  if (!aluno) {
    return (
      <div className="container">
        <div className="box">
          <p>Aluno não encontrado</p>
          <button onClick={() => navigate('/')}>Voltar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Detalhes do Aluno</h1>
      <div className="box">
        <div className="aluno-info-detail">
          <p><strong>Nome:</strong> {aluno.nome}</p>
          <p><strong>Matrícula:</strong> {aluno.matricula}</p>
          <p><strong>Curso:</strong> {aluno.curso || 'Não informado'}</p>
          <p><strong>Ano de Matrícula:</strong> {aluno.ano_ingresso || 'Não informado'}</p>
          {aluno.email && <p><strong>Email:</strong> {aluno.email}</p>}
        </div>
        <div className="aluno-actions">
          <button 
            className="edit" 
            onClick={() => navigate(`/alunos/editar/${id}`)}
          >
            Editar
          </button>
          <button onClick={() => navigate('/')}>Voltar</button>
        </div>
      </div>
    </div>
  );
}