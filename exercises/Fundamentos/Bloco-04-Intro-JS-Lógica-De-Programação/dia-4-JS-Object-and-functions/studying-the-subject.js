// Estudo dos Objetos em JS
// Objetos são contêineres para valores nomeados.
/* Sintaxe =>      let nameObject {
                         name: value
                         name1: value1}; */ 


// Exemplo 

let car = {
  fabricante: 'Ford',
  tipo: 'Picape',
  modelo: 'Ranger 2022',
  cor: 'Vinho',
};
// Duas formas de acessar as propriedades do objeto
console.log(car.fabricante, car.cor);
// Ou
console.log(car['fabricante'], car['tipo']);
 