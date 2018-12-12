import React, {Component} from 'react';
import CharacterList from '../components/CharacterList.jsx';
import TitleBar from '../components/TitleBar.jsx';

class DisplayContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters:[]
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount(){
    this.loadCharacters(this.props.houses[0].url)
  }

  loadCharacters(url) {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const characterList = JSON.parse(jsonString);
        //TODO: add a helper file to strip the api
        this.setState({characters: characterList})
      }
    }
    request.send();
  }

  handleSelectChange(event) {
    this.loadCharacters(event.target.value);
  }


  render(){
    return(
      <div>
      <TitleBar
        handleSelectChange={this.handleSelectChange}
        houses={this.props.houses}
       />
      <CharacterList
        characters={this.state.characters}
        />
      </div>
    )
  }
}

export default DisplayContainer;
