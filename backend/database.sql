-- Criação do banco
DROP DATABASE IF EXISTS alunos_db;
CREATE DATABASE alunos_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE alunos_db;

-- Tabela de alunos
CREATE TABLE alunos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  matricula VARCHAR(20) NOT NULL UNIQUE,
  email VARCHAR(100),
  curso VARCHAR(50),
  ano_ingresso INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dados alunos
INSERT INTO alunos (nome, matricula, email, curso, ano_ingresso) VALUES
('Rodrigo Granado Bittencourt', '2023001', 'rodrigo.bittencourt@email.com', 'Ciência da Computação', 2023),
('Bruno Carvalho', '2023005', 'bruno.carvalho@email.com', 'Engenharia Mecânica', 2023),
('Carolina Mendes', '2023006', 'carolina.mendes@email.com', 'Design Gráfico', 2023),
('Diego Martins', '2023007', 'diego.martins@email.com', 'Engenharia de Software', 2023),
('Elaine Castro', '2023008', 'elaine.castro@email.com', 'Nutrição', 2023),
('Fábio Nunes', '2023009', 'fabio.nunes@email.com', 'Sistemas de Informação', 2023),
('Giovana Rocha', '2023010', 'giovana.rocha@email.com', 'Medicina Veterinária', 2023),
('Henrique Lima', '2023011', 'henrique.lima@email.com', 'Economia', 2023),
('Isabela Fontes', '2023012', 'isabela.fontes@email.com', 'Publicidade e Propaganda', 2023),
('João Vitor Alves', '2023013', 'joao.alves@email.com', 'Engenharia Química', 2023),

('Karina Oliveira', '2022003', 'karina.oliveira@email.com', 'Fisioterapia', 2022),
('Leonardo Souza', '2022004', 'leonardo.souza@email.com', 'Engenharia de Produção', 2022),
('Marina Costa', '2022005', 'marina.costa@email.com', 'Relações Internacionais', 2022),
('Nicolas Ferreira', '2022006', 'nicolas.ferreira@email.com', 'Ciências Biológicas', 2022),
('Olivia Ramos', '2022007', 'olivia.ramos@email.com', 'Farmácia', 2022),
('Paulo Henrique Silva', '2022008', 'paulo.silva@email.com', 'Engenharia Civil', 2022),
('Quezia Santos', '2022009', 'quezia.santos@email.com', 'Pedagogia', 2022),
('Rafael Andrade', '2022010', 'rafael.andrade@email.com', 'Direito', 2022),
('Sofia Martins', '2022011', 'sofia.martins@email.com', 'Medicina', 2022),
('Thiago Correia', '2022012', 'thiago.correia@email.com', 'Administração', 2022),

('Úrsula Barbosa', '2021013', 'ursula.barbosa@email.com', 'Psicologia', 2021),
('Vinicius Teixeira', '2021014', 'vinicius.teixeira@email.com', 'Engenharia Elétrica', 2021),
('Wanessa Almeida', '2021015', 'wanessa.almeida@email.com', 'Arquitetura e Urbanismo', 2021),
('Xavier Gonçalves', '2021016', 'xavier.goncalves@email.com', 'Ciência de Dados', 2021),
('Yasmin Ferreira', '2021017', 'yasmin.ferreira@email.com', 'Odontologia', 2021),
('Zacarias Rocha', '2021018', 'zacarias.rocha@email.com', 'Sistemas para Internet', 2021),
('Alice Monteiro', '2021019', 'alice.monteiro@email.com', 'Jornalismo', 2021),
('Bernardo Dias', '2021020', 'bernardo.dias@email.com', 'Engenharia Mecatrônica', 2021),
('Clara Nascimento', '2021021', 'clara.nascimento@email.com', 'Moda', 2021),
('Daniel Pires', '2021022', 'daniel.pires@email.com', 'Marketing', 2021),

('Eduarda Lemos', '2020023', 'eduarda.lemos@email.com', 'Gastronomia', 2020),
('Felipe Cordeiro', '2020024', 'felipe.cordeiro@email.com', 'Engenharia de Alimentos', 2020),
('Gabriela Fonseca', '2020025', 'gabriela.fonseca@email.com', 'Biomedicina', 2020),
('Heitor Montenegro', '2020026', 'heitor.montenegro@email.com', 'Comércio Exterior', 2020),
('Igor Santana', '2020027', 'igor.santana@email.com', 'Segurança da Informação', 2020),
('Júlia Vasconcelos', '2020028', 'julia.vasconcelos@email.com', 'Enfermagem', 2020);
