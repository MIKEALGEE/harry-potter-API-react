import React from 'react';
import Character from './Character.jsx'

const CharacterList = ({characters}) => {
  if (characters == null || characters.length === 0){
    return <p>Loading...</p>
  }

  return (
    <div>
    {characters.map((character, index) => {
      return (
        <Character
          key={index}
          name={character.name}
          house={character.house}
          image={character.image}
          wand={character.wand}
          />
      )
    })}
    </div>
)


}

export default CharacterList
