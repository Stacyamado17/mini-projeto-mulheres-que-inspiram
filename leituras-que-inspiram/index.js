// index.js

const PORT = 3000;

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Middleware para aceitar JSON no body da requisição
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "Mulheres, Raça e Classe",
    autora: "Angela Davis",
    categoria: "antirracismo"
  },
  {
    id: 2,
    titulo: "O Segundo Sexo",
    autora: "Simone de Beauvoir",
    categoria: "mulheres"
  },
  {
    id: 3,
    titulo: "Pequeno Manual Antirracista",
    autora: "Djamila Ribeiro",
    categoria: "antirracismo"
  },
  {
    id: 4,
    titulo: "Histórias de Ninar para Garotas Rebeldes",
    autora: "Elena Favilli e Francesca Cavallo",
    categoria: "mulheres"
  },
  {
    id: 5,
    titulo: "Quarto de Despejo",
    autora: "Carolina Maria de Jesus",
    categoria: "todos"
  }
];

// Rota 1 - Todos os livros
app.get("/livros/todos", (req, res) => {
  res.json(livros);
});

// Rota 2 - Livros sobre mulheres inspiradoras
app.get("/livros/mulheres", (req, res) => {
  const mulheres = livros.filter(livro => livro.categoria === "mulheres");
  res.json(mulheres);
});

// Rota 3 - Livros antirracistas
app.get("/livros/antirracismo", (req, res) => {
  const antirracismo = livros.filter(livro => livro.categoria === "antirracismo");
  res.json(antirracismo);
});

// Rota POST - Adicionar novo livro
app.post("/livros/novo", (req, res) => {
  const novoLivro = req.body;

  if (!novoLivro.titulo || !novoLivro.autora || !novoLivro.categoria) {
    return res.status(400).json({ erro: "Dados incompletos!" });
  }

  novoLivro.id = livros.length + 1;
  livros.push(novoLivro);

  res.status(201).json({ mensagem: "Livro adicionado com sucesso!", livro: novoLivro });
});

app.listen(PORT, () => {
  console.log(`API rodando em: http://localhost:${PORT}`);
});
