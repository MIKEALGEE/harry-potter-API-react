import React from 'react';
import upperCaser from '../upperCaseHelper.js';

const Character = ({name, house, image, wand}) =>{
  return (

    <>
      <h4>{name} {house}</h4>
      <img src={image} height="240" alt="individual character headshot"/>
      <h4>Wand: Wood: {upperCaser(wand.wood)} Core: {upperCaser(wand.core)}  Length: {wand.length}"</h4>
    </>
  )

}

export default Character;
