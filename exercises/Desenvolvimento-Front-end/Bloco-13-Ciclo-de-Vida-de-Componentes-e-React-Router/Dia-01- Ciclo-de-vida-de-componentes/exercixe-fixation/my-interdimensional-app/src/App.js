import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
    };
  }

  // Requisição ao endpoint https://rickandmortyapi.com/api/character'
  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({ characters: data.results})//setState é assíncrono
    })
  }

  // Como o setState é assincrono. Não será impreso nada na tela. Para resolver
  // será usado componenteDidMount().
  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state; // desestruturando o estado. Evita o 'this.state.characters'
    return (
      <div className="App">
        <div className="body">
          {characters.map(({ name, image, id }) => {
            return (
              <div className="container" key={id}>
                <h3>{name}</h3>
                <img src={image} alt={name} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
