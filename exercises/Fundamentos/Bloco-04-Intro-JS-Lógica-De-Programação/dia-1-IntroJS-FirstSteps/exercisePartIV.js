let nota = 59.99;
let msg = ["Parabéns, você foi aprovada(o)!", "Você está na nossa lista de espera", "Você foi reprovada(o)"];

if (nota >= 80){
    console.log(msg[0]);
}
else if (nota < 80 && nota > 60){
    console.log(msg[1]);
}
else {
    console.log(msg[2]);
}