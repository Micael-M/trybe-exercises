import React, { Component } from 'react';
import Daugther from './Daugther';

class Father extends Component {
  render(){
    return (
      <section>
        <h1>Eu sou o pai</h1>
        <Daugther />
        {/* <Daugther heritage={this.props.heritage} spend={this.props.spend}/> */}
      </section>
    );
  }
}
export default Father;