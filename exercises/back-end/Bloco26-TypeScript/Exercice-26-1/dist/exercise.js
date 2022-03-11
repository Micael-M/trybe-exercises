"use strict";
// Implemetação dos exercícios proposto no conteudo do dia
// 26.1
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
// Função recepcionista que retorna o nome
// Cujo parâmetro é do tipo string .
function greeter(name) {
    return `Ola ${name}!`;
}
exports.greeter = greeter;
// Função qeu mostra o nome da pessoa e Idade
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
// Função que soma todos os números de um array
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
// Função para calcular a área de um triângulo onde X=(B*A)/2
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
// Função para calcular a área do quadrado X=L*L
function square(side) {
    return side ** 2;
}
exports.square = square;
// Função para calcular a área do retângulo X=B*A
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
