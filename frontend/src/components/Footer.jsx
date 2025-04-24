import '../Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sistema de Gestão de Alunos</h3>
          <p>Uma solução para gerenciamento acadêmico</p>
        </div>
        
        <div className="footer-section">
          <h3>Desenvolvedor</h3>
          <p>Rodrigo Granado Bittencourt</p>
          <p>5º Semestre - Experiência Criativa</p>
        </div>
        
        <div className="footer-section">
          <h3>Tecnologias</h3>
          <ul className="tech-list">
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados</p>
      </div>
    </footer>
  );
}