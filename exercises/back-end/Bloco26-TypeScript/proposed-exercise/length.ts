// // Criando um array de strings para as unidades de medidas
// // O TypeScript por inferência irá inferir o tipo "string[]"
// const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

// // Caso seja uma unidade inválida
// function makeError(unity: string) {
//   throw new Error(`A unidade ${unity} não é válida `);
// }

// // Function to convert measurement units
// function convert(value: number, forUnity: string, ToUnity: string): number {

//   if (!units.includes(forUnity)) makeError(forUnity); // Lança um erro caso a unidade base não seja válida
//   if (!units.includes(ToUnity)) makeError(ToUnity);// Lança um erro caso a unidade para conversão não seja válida

//   const forIndex = units.indexOf(forUnity); // Preciso pegar o indice da unidade base no array
//   const toIndex = units.indexOf(ToUnity); // Preciso pegar o indice da unidade para conversão no array
//   const exponent = (toIndex - forIndex);

//   return value * Math.pow(10, exponent);
// }

// ### Refactoring ###

import utils from "./utils"

const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

// function convert(value: number, forUnity: string, toUnity: string): number {
//   return utils.convert(units, value, forUnity, toUnity);
// }

// ### Refactoring Exercise 7 ###
utils.exec(units);
