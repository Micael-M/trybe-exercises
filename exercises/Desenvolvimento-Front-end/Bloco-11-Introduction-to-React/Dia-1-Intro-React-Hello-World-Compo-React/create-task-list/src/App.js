
// Crie um novo projeto utilizando npx create-react-app .
// Solução: npx create-react-app nomeDoSeuApp
// Crie uma lista de tarefas simples que:
//     Utilize a função Task dentro do componente App .
//     Leia as tarefas de dentro de um Array.
//     Use a função map para criar cada item da lista no HTML.
//     Solução:

import React from 'react';

const Task = (value) => {// Função que adiciona as task no elementos html
  return(
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Levantar', 'Lavar o rosto', 'Preparar café da manhã', 'Operar' ];

class App extends React.Component { // Estrutura básica de um App React
  render() {
    return (
      <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>
    );
  }
}

export default App;
