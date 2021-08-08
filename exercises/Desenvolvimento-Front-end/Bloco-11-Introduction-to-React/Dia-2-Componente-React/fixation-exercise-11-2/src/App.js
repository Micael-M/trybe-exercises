import React, { Component } from 'react';git 
import Order from './Order';

class App extends Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };
    return (
      /* Como só é possível retonrar dois componentes 
      por vez. Usa-se as divs para criar um componente com dois componentes filhos */

      <div>
        <h1>Pedidos Criados recentemente</h1>
          <Order order={headphone} />
          <Order order={energyDrink} />
      </div>

      /* <div>  Exercício de fixação do tópico props
        <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Um gatinho Com fundo de Natureza" />
      </div> */
    );
  }
}

export default App;
