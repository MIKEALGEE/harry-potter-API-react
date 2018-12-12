import React, { Component } from 'react';
import './App.css';
import DisplayContainer from './containers/DisplayContainer.jsx';

class App extends Component {
  render() {

    const houses = [
      {name: "All", url: "http://hp-api.herokuapp.com/api/characters"},
      {name: "Gryffindor", url: "http://hp-api.herokuapp.com/api/characters/house/gryffindor"},
      {name: "Hufflepuff", url: "http://hp-api.herokuapp.com/api/characters/house/hufflepuff"},
      {name: "Ravenclaw", url: "http://hp-api.herokuapp.com/api/characters/house/ravenclaw"},
      {name: "Slytherin", url: "http://hp-api.herokuapp.com/api/characters/house/slytherin"}
    ]

    return (
      <DisplayContainer houses={houses}/>
    );
  }
}

export default App;
