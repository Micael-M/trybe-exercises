// Atividades propostas para o laço for/in.
// 1.Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão. 

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

console.log('Resolução da atividade: intem 1');
for (let name in names){
  console.log(name, names[name]);}