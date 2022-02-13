// 1º Passo - importar o express
// a função express retorna uma aplicação express
const express = require('express');

// Importando o body-parser
 const bodyParser = require('body-parser');

// 2° Passo - o app recebe o retorno da função express que
// cria um servidor e já executa
const app = express();

// Iniciando o Body-parser - middware
app.use(bodyParser.json());

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
// para buscar o livro pelo autor. Esta busca é feita via
// query string no formato http://localhost:3001/books/search?author=query
// exemplo: http://localhost:3001/books/search?author=Isaac Asimov
app.get('/books/search', function (req, res) {
  const { author } = req.query;
  const filteredBooks = books.filter((b) => b.author === author);
  if (filteredBooks.length === 0) return res.status(200).json({ message: `'The book with author ${author} was not found!'` })
  res.status(200).json({ books: filteredBooks });
});

// 3ª Rota do CRUD - POST em /books - app.post(rota, middware)
app.post('/books', function (req, res) {
  const { id, title, author } = req.body;
  books.push({ id, title, author });
  res.status(201).json({ message: 'Book created!'});
});

// 4ª Rota do CRUD - PUT em /books - app.post(rota, middware)
app.put('/books/:id', function (req, res) {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookIndex = books.findIndex((b) => b.id === +id);
  if (bookIndex === -1) return res.status(404).send({ message: "Book not found!" });
  books[bookIndex] = { id, title, author };
  // O end() é aplicado quando se deseja apenas retornar o status sem nenhuma msg.
  res.status(204).end();
});

// 5ª Rota do CRUD - DELETE em /books - app.post(rota, middware)
app.delete('/books/:id', function (req, res) {
  const { id } = req.params;
  const bookIndex = books.findIndex((b) => b.id === +id);
  if (bookIndex === -1) return res.status(404).send({ message: "Book not found!" });
  books.splice(bookIndex, 1);
  res.status(204).end();
});


// 3º Passo - setar a porta que será utilizada
// neste contexto será a 3001, pois a 3000 já é usada pelo React
// caso estejamos desenvolvendo uma aplicação express e react que irão se comunicar
// dará conflito.
app.listen(3001, () => {
  console.log("🛸🛸 Nossa Primeira API Está rodando!");
});
