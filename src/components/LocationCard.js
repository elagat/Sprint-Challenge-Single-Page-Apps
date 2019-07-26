import React, { useState } from 'react';
import { Card } from "semantic-ui-react";

export default function LocationCard (props) {
  const [location, setLocation] = useState({});

  return (
    <Card>
      <h3>{props.name}</h3>
      <p>{props.type}</p>
      <p>{props.dimension}</p>
    </Card>
  )
}
