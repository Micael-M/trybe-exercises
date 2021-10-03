import React, { Component } from 'react';
import Grandmother from './Grandmother';
// 2° PASSO É Importar o contexto criado.
import MyContext from '../contextAPI/MyContext';

class GreatGranmother extends Component {
  // É preciso passar a herança para a bisneta. O mais lógico é criar o estado no componente pai
  // da arvore e ir passando dentre os componentes até chegar ao componente Daugther.js.
  constructor(props) {
    super(props);
    this.state = {
      heritage: 1000000,
    }
    this.handleSpendHeritage = this.handleSpendHeritage.bind(this);
  }
    // Iremos criar uma função que atualiza o estado conforme a bisneta for gastando
    handleSpendHeritage() {
      this.setState((prevState) => ({heritage: prevState.heritage - 100}))
    }

  render(){
    // 3° PASSO - Indicar o provider e fornecer o valor a ser passado aos consumers
    const contextValue = {
      heritage: this.state.heritage,
      spend: this.handleSpendHeritage,
    }

    return (
      <MyContext.Provider value={contextValue}>
        <section>
          <h1>Eu sou a bisavó</h1>
          <Grandmother heritage={this.state.heritage} spend={this.handleSpendHeritage}/>
        </section>
      </MyContext.Provider>

    );
  }
}
export default GreatGranmother;