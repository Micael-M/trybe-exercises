import Pizza from "../Exercise-6/Pizza";
import { Common } from "./PizzaFlavorsTypes";

// Criando Interface PizzaCommon extendendo da interface Pizza
interface PizzaCommon extends Pizza {
  flavor: Common
}

export default PizzaCommon;
