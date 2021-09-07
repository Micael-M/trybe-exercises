import React, { Component } from 'react';
import Order from './Order';
// import products from './data/data'

class App extends Component {
  
  render() {
    
    return (
      /* Como só é possível retonrar 1 componentes 
      por vez. Usa-se as divs para criar um componente com componentes filhos */

      <div>
        <h1>Pedidos Criados recentemente</h1>
          <Order/>
      </div>

      /* <div>  Exercício de fixação do tópico props
        <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Um gatinho Com fundo de Natureza" />
      </div> */
    );
  }
}

export default App;
