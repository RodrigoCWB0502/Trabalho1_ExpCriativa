import db from '../config/db.js';

class Aluno {
  static getAll(callback) {
    db.query('SELECT * FROM alunos', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM alunos WHERE id = ?', [id], callback);
  }

  static create(aluno, callback) {
    const { nome, matricula } = aluno;
    db.query(
      'INSERT INTO alunos (nome, matricula) VALUES (?, ?)',
      [nome, matricula],
      callback
    );
  }

  static update(id, aluno, callback) {
    const { nome, matricula } = aluno;
    db.query(
      'UPDATE alunos SET nome = ?, matricula = ? WHERE id = ?',
      [nome, matricula, id],
      callback
    );
  }

  static delete(id, callback) {
    db.query('DELETE FROM alunos WHERE id = ?', [id], callback);
  }
}

export default Aluno;