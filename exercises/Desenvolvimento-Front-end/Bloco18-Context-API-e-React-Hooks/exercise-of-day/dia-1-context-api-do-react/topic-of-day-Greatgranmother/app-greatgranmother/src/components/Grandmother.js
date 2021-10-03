import React, { Component } from 'react';
import Father from './Father';
// Aqui recebemos a herança e passamos para o componente filho. Como props na forma: this.props.heritage
// Receberemos uma função responsável por atualizar o estado cada vez que a bisneta gasta.
class Grandmother extends Component {
  render(){
    return (
      <section>
        <h1>Eu sou a avó</h1>
        <Father />
        {/* <Father heritage={this.props.heritage} spend={this.props.spend} /> */}
      </section>);
  }
}
export default Grandmother;