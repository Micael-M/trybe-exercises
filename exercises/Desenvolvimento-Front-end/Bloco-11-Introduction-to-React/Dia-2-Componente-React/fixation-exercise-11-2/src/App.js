import React, { Component } from 'react';
import Order from './components/Order';
import data from './data/data'
class App extends Component {
  // Exercicio de fixação do dia 11.2
  render() {
    
    return (
      <div>
        <h1>Pedidos Criados recentemente</h1>
          <Order products={data}/>
      </div>
    );
  }
}

export default App;
