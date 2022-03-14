import Pizza from "../Exercise-6/Pizza";
import { Vegetarian } from "./PizzaFlavorsTypes";

interface PizzaVegetarian extends Pizza{
  flavor: Vegetarian
}
export default PizzaVegetarian;
