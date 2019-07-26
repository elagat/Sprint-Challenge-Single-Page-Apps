import React, { useState } from 'react';

export default function CharacterCard (props) {
  const [character, setCharacter] = useState({});


  return <span>{props.character.name}</span>
}
