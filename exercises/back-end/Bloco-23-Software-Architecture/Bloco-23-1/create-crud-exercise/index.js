const express = require('express');
const userModel = require('./models/userModel');

// Criando instância do express acessando os seus métodos
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  return res.send("API rodando!")
});

// Criando middleware - endpoint do tipo post na rota /user
app.post('/user', async (req, res) => {
  // O express não traz o body por padrão. Para isto é preciso instalar a biblioteca
  // body-parser ou adicionar: app.use(express.json())
  const { firstName, lastName, email, password } = req.body;
  const result = await userModel.createUser({firstName, lastName, email, password})
  return res.status(201).json(result);
});

app.listen(PORT, () => {
  console.log(`Running project on the port ${PORT} `);
});
