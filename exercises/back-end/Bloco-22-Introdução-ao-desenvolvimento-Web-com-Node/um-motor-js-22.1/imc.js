const readline = require('readline-sync');
// Para maior precisão, lidamos com o peso não sendo mais inteiro, mas do tipo float 
const PESO = readline.questionFloat('Qual seu peso? (em kg)'); // Pode usar qualquer valor aqui
const ALTURA = readline.questionInt('Qual seu altura? (em cm)'); // Pode usar qualquer valor aqui
// Implementar base de dados para informar se está acima ou abaixo do peso


function calcImc () {
  const peso = PESO;
  const altura = ALTURA;
  
  console.log(`O Peso: ${peso}, Altura ${altura}`);
  const imc = (peso/Math.pow((altura/100), 2)).toFixed(2);
  console.log(`Seu IMC é: ${imc}`);
  
  // Verificando o categoria do IMC
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
};

calcImc();

