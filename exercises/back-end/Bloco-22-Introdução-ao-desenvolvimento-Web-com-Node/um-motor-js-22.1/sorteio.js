const readline = require('readline-sync');

function verify(escolha, numGerado) {
  if (escolha === numGerado) {
    return console.log("Parabéns, número correto!");
  }
  // Como o if da linha acima tem um `return`, não precisamos do `else`, já que, se a execução
  // do código entrar no if, a linha abaixo não será executada
  console.log(`Opa, não foi dessa vez. O número era ${numGerado}`);
}

function gerarNum () {
  // Pode ser feito parseInt(Math.random()*10)
  const numGerado = (Math.random()*10).toFixed(0);

  const numEscolhido = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );
  verify(numEscolhido, numGerado);

  const novamente =  readline.question('Digite s para jogar novamente ou qualquer tecla para sair: ');
  if (novamente !== 's') return console.log('Tchaaaau, volte logo!')
  gerarNum();
}

gerarNum();