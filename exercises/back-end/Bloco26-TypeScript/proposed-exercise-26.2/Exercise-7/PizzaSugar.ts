import Pizza from "../Exercise-6/Pizza";
import { Sugar } from "./PizzaFlavorsTypes";

interface PizzaSugar extends Pizza{
  flavor: Sugar,
  slices: 4
}
export default PizzaSugar;
