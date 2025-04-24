import Aluno from '../models/Aluno.js';

export const getAll = (req, res) => {
  Aluno.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

export const getById = (req, res) => {
  Aluno.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0] || {});
  });
};

export const create = (req, res) => {
  if (!req.body.nome || !req.body.matricula) {
    return res.status(400).json({ error: 'Nome e matrícula são obrigatórios' });
  }
  Aluno.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

export const update = (req, res) => {
  if (!req.body.nome || !req.body.matricula) {
    return res.status(400).json({ error: 'Nome e matrícula são obrigatórios' });
  }
  Aluno.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: req.params.id, ...req.body });
  });
};

export const remove = (req, res) => {
  Aluno.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(204).end();
  });
};