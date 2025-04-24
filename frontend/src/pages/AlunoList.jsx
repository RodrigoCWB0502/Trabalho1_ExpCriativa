import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../services/api.js';

export default function AlunoList() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const response = await api.get('/alunos');
        setAlunos(response.data);
        toast.success('Alunos carregados com sucesso!');
      } catch (error) {
        toast.error(`Erro ao carregar alunos: ${error.message}`);
        console.error('Erro ao buscar alunos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlunos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
      try {
        await api.delete(`/alunos/${id}`);
        setAlunos(alunos.filter(aluno => aluno.id !== id));
        toast.success('Aluno excluído com sucesso!');
      } catch (error) {
        toast.error(`Erro ao excluir aluno: ${error.message}`);
        console.error('Erro ao excluir aluno:', error);
      }
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h1>Lista de Alunos</h1>
      
      <div className="header">
        <h2>Total: {alunos.length} alunos</h2>
        <button className="add" onClick={() => navigate('/alunos/novo')}>
          + Adicionar Aluno
        </button>
      </div>
      
      <div className="box">
        {alunos.length === 0 ? (
          <div className="empty-message">Nenhum aluno cadastrado</div>
        ) : (
          <ul className="aluno-list">
            {alunos.map(aluno => (
              <li key={aluno.id} className="aluno-item">
                <div className="aluno-info">
                  {aluno.nome} - Matrícula: {aluno.matricula}
                </div>
                <div className="aluno-actions">
                  <button 
                    className="detalhes" 
                    onClick={() => navigate(`/alunos/${aluno.id}`)}
                  >
                    Detalhes
                  </button>
                  <button 
                    className="edit" 
                    onClick={() => navigate(`/alunos/editar/${aluno.id}`)}
                  >
                    Editar
                  </button>
                  <button 
                    className="remove" 
                    onClick={() => handleDelete(aluno.id)}
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}