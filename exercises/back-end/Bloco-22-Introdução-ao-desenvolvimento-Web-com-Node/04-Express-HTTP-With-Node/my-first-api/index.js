// 1º Passo - importar o express
// a função express retorna uma aplicação express
const express = require('express');

// 2° Passo - o app recebe o retorno da função express que
// cria um servidor e já executa
const app = express();

// Array com dados para fazer o CRUD
const books = [
  {id: 1, title: 'The Lord of Rings', author: 'J.R.R Tolkien'},
  {id: 2, title: 'Dune', author: 'Frank Herbert'},
  {id: 3, title: 'Foundation', author: 'Isaac Asimov'},
  {id: 4, title: 'The man in The High Castle', author: 'Philip K'},
  {id: 5, title: '1984', author: 'George Orwell'},
  {id: 6, title: 'Brave New World', author: 'Aldous Huxley'}
];

// 4º Passo - Definindo o que será feito quando uma requisição chegar ao /
// se não definido, aco conectar irá aparecer o erro "cannot GET /" no navegador
// (req, res) é uma função de middware
app.get("/", (req, res) => {
  res.send('Hello API!');
});

// 1ª Rota do CRUD - GET em /books - app.get(rota, middware)
// nesse caso é .json pq queremos retornar um json
// o 'send' seria em um caso geral.
app.get('/books', (_req, res) => {
  res.status(200).json(books)
});

// Pesquisando um livro espessífico por meio de dados passados como parâmetro
// atravez do chamado 'Parâmetro de Rota' a partir do ':'.
app.get('/book/:id', (req, res) => {
  // Recuperando o parâmetro passado
  // console.log(req.params).
  const { id } = req.params;

  // Procurando o livro no array books
  // Como o id recuperado na requisição é uma string
  // precisamos usar 'parseInt' para transformar em um inteiro
  // uma dica é utilizar o '+'.
  const book = books.find((b) => b.id === +id);

  // Caso seja passado um id que não esteja no DB o
  // return para a execução do bloco de códigos, evitando
  // que a outra mensagem seja exibida.
  if (!book) return res.status(404).json({ message: 'Book not found!' })

  // Aqui não precisa de return pq a ultima condição caso não caia na de cima.
  res.status(200).json(book);
});

// 2ª Rota do CRUD - GET em /book - app.get(rota, middware)
// para buscar o livro pelo autor.
app.get('/books/search', function (_req, res) {
  const { author } = req.query;
  const filteredBooks = books.filter((b) => b.author === author);
  if (filteredBooks.length === 0) return res.status(200).json({ message: 'Author not found!' })
  res.status(200).json({ books: filteredBooks });
});


// 3º Passo - setar a porta que será utilizada
// neste contexto será a 3001, pois a 3000 já é usada pelo React
// caso estejamos desenvolvendo uma aplicação express e react que irão se comunicar
// dará conflito.
app.listen(3001, () => {
  console.log("🛸🛸 Nossa Primeira API Está rodando!");
});
