import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Rodri0502',
  database: process.env.DB_NAME || 'alunos_db'
});

export default connection;