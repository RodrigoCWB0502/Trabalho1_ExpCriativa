import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import alunoRoutes from './routes/alunoRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/alunos', alunoRoutes);

// Conexão DB e Inicialização
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL');
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});