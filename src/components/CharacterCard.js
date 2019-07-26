import React, { useState } from 'react';
import { Card } from "semantic-ui-react";

export default function CharacterCard (props) {
  const [character, setCharacter] = useState({});

  return (
    <Card>
      <h3>{props.name}</h3>
      <p>{props.status}</p>
      <img src={`${props.image}`}/>
    </Card>
  )
}
