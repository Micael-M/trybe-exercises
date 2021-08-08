import React, { Component } from 'react';
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Feed da Rede Social</h1>
        <Post title="Aprendendo sobre componetização no React"/>
        <Post title="Aqui será abordado também as Props"/>
        <Post title="E o estado do componente"/>
      </div>
    );
  }
}

export default App;
