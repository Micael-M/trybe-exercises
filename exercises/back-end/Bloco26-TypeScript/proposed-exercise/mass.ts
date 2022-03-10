// // Function to convert mass measurement units 
// // Creating array with measurement units
//   const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

//   // Function that handles error
//   function makeError(unity: string) {
//     throw new Error(`A unidade ${unity} não é válida `)
//   }

//   function convert(value: number, forUnity: string, toUnity: string): number {

//     // Lançando erro caso a unidade de medida seja inválida
//     if (!units.includes(forUnity)) makeError(forUnity);
//     if (!units.includes(toUnity)) makeError(toUnity);

//     const forIndex = units.indexOf(forUnity);
//     const toIndex = units.indexOf(toUnity);
//     const exponent = (toIndex - forIndex);

//     return value * Math.pow(10, exponent);
// }

// ### Refactoring ###
import utils from "./utils";

const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

// function convert(value: number, forUnity: string, toUnity: string): number {
//   return utils.convert(units, value, forUnity, toUnity);
// }

// ### Refactoring Exercise 7 ###
utils.exec(units);
