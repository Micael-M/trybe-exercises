const readline = require('readline-sync');


function velocidade () {
  const tempo = readline.questionInt('Tempo gasto (s): ');
  const distancia = readline.questionInt('Distância percorrida (m): ');

  const velMedia = distancia/tempo;
  console.log(`Velocidade média: ${velMedia} m/s`);
}

velocidade();