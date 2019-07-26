import React, { useState } from 'react';

export default function CharacterCard (props) {
  const [character, setCharacter] = useState({});

  return (
    <span>
      <h3>{props.name}</h3>
      <p>{props.status}</p>
    </span>
  )
}
