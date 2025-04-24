export default function AlunoCard({ aluno, onEdit, onDelete, onView }) {
  return (
    <div className="aluno-card">
      <h3>{aluno.nome}</h3>
      <p>Matrícula: {aluno.matricula}</p>
      <p>Curso: {aluno.curso || 'Não informado'}</p>
      
      <div className="actions">
        <button onClick={onView}>Ver</button>
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
      </div>
    </div>
  );
}