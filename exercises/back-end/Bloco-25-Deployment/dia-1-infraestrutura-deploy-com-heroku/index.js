// Iniciando um app express.
const express = require("express");

const app = express();

// Criando uma rota no barra - checar a conexão.
app.get("/", (req, res) => {
  res.status(200).send("Exercício Deploy Heroku Online");
});

// Utilizando da variável de ambiente para
// tornar a conexão dinâmica.
const port = process.env.PORT || 3000;

// Iniciando a conexão.
app.listen(port, () => {
  console.log(`Exercício rodando na porta ${port}`);
});
