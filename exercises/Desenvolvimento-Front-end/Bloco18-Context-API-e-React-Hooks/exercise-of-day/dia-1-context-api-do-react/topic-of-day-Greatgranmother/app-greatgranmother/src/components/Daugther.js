import React, { Component } from 'react';
// 4° PASSO - Como a filha vai consumir o estado. Será preciso importar o
// context e criar o consumer
// O Consumer, obrigatoraimente deve possuir uma função que pode retornar
// qualquer coisa inclusive um nó React
import MyContext from '../contextAPI/MyContext';

class Daugther extends Component {
  render(){

    return (
      <section>
        <h1>Eu sou a filha</h1>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <p>{`Minha herança é R$: ${value.heritage}`}</p>
                <button type="button" onClick={value.spend}>
                  Pedir Açaí
                </button>
              </div>
            )
          }
        </MyContext.Consumer>
        {/* <p>{`Minha herança é R$: ${this.props.heritage}`}</p>
        <button type="button" onClick={this.props.spend}>Pedir Açaí</button> */}
      </section>
    );
  }
}

export default Daugther;
