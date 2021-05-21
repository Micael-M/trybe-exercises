
let peca = prompt("Digite uma peça;");
let pecaXadrez = peca.toLowerCase();

switch(pecaXadrez) {

  case "rei":
    console.log("Move-se para: todas direções, mas uma casa por vez.");
    break;

  case "rainha":
    console.log("Move-se para: horizontal, vertical e diagonais, mas não pode pular outra peça.");
    break;

  case "bispo":
    console.log("Move-se para: as diagonais.");
    break;

  case "cavalo":
    console.log("Move-se em: formato de 'L'. Duas casas para a horinzontal e uma na vertical ou vice-versa.");
    break;

  case "torre":
    console.log("Move-se para: a vertical ou horinzontal, mas não pode pular outras peças.");
    break;

  case "peão":
    console.log("Move-se para: uma casa para frente.");
    break;
  default:
    console.log("Peça inválida!");  
}