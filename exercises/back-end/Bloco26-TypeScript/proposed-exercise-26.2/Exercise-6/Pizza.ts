// Crie uma interface que represente uma pizza, ela deve conter:

// Uma propriedade do tipo string chamada flavor que representa o sabor.
// Uma propriedade do tipo type alias chamada slices que representa o número de fatias;
// O número de fatias pode ser 4, 6 ou 8;

// Crie uma pizza sabor Calabresa de 8 fatias; Crie uma pizza sabor Marguerita de 6 fatias; Crie uma pizza sabor Nutela de 4 fatias; 
type Slices = 4 | 6 | 8;
interface Pizza{
  flavor: string,
  slices: Slices
}
export default Pizza;
