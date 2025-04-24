import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlunoList from './pages/AlunoList.jsx';
import AlunoForm from './pages/AlunoForm.jsx';
import AlunoDetail from './pages/AlunoDetail.jsx';
import Footer from './components/Footer.jsx';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AlunoList />} />
            <Route path="/alunos/novo" element={<AlunoForm />} />
            <Route path="/alunos/:id" element={<AlunoDetail />} />
            <Route path="/alunos/editar/:id" element={<AlunoForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;