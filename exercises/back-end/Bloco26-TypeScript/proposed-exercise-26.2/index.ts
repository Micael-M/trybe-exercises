import { exit } from "process";
import readline from "readline-sync";
import Months from "./Months";
import Seasons from "./WeatherSeasons";

// Armazenado os nomes dos meses
 const monthNames = Object.values(Months).map(month => month);

//  Como já possuimos os nomes dos meses, podemos mostrar um display para a pessoa usuária
// com os itens desse array. Atravez do readline.keyInSelect(array,mensagem a ser exibida)
const choiceMonth = readline.keyInSelect(monthNames, "Escolha um mês do ano", {cancel: "SAIR"});

// Se a escolha for sair, será retornado -1
if (choiceMonth === -1) {
  console.log("Saindo");
  exit();
}

// como existe dois Hemisférios e para cada um deles
// as estações do ano possuem durações distintas, é preciso
// organizar essas informaçoes.

//Hemisfério Norte
const northHemisphere = {
  [Seasons.OUTONO]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
  [Seasons.INVERNO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
  [Seasons.PRIMAVERA]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Seasons.VERAO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO]
}

//Hemisfério Sul
// const southHemisphere = {
//   [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
//   [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
//   [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
//   [Seasons.VERAO]:[Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
// }

// Observei que a configuração no hemisfério sul possui o mesmo intervalo de tempo
// do hemisfério norte mudando apenas a referencia da estação. posso reaproveitar e 
// refatorar da seguinte forma

const southHemisphere = {
  [Seasons.PRIMAVERA]: northHemisphere[Seasons.OUTONO],
  [Seasons.VERAO]: northHemisphere[Seasons.INVERNO],
  [Seasons.OUTONO]: northHemisphere[Seasons.PRIMAVERA],
  [Seasons.INVERNO]: northHemisphere[Seasons.VERAO]
}

// Preciso solicitar a pessoa usuária para escolher qual o hemisfério.
const hemispheres = {
  "Norte": northHemisphere,
  "Sul": southHemisphere
}

// Escolher qual o hemisfério
const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", {cancel: "SAIR"});

if (choiceHemisphere === -1) {
  console.log("Sanindo");
  exit();
}

// Acessando as informações fornecidas pela pessoa usuária.
// Acessando o mês escolhido no arquivo de Months
const chosenMonth = Object.values(Months)[choiceMonth];
// Acessando o hemisfério escolhido
const chosenHemisphere = Object.keys(hemispheres)[choiceHemisphere];

// Exibindo o resultado a pessoa usuária
console.log(`Mês: \n${chosenMonth}`);
console.log(`Hemisfério: \n${chosenHemisphere}`);
console.log(`Estações:`);
// Exibindo as estações- acessando os valores da propriedade
// do objeto hemispheres
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere]
Object.entries(chosenHemisphereSeasons).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];

  // Para mostrar os meses que estão incluidos em mais de uma estação
  if (months.includes(chosenMonth)) console.log(seasons)
});
