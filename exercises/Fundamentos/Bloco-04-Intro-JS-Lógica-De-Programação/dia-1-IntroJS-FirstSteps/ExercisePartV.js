let estado = ["aprovada", "lista", "reprovada"];

switch(estado[3]){
  case estado[0]:
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case estado[1]:
    console.log("Você está na nossa lista de espera!");
    break;
  case estado[2]:
    console.log("Você foi reprovada(o)!");
    break;
  default:
    console.log("Não se aplica!");
}