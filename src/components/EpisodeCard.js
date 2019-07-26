import React, { useState } from 'react';
import { Card } from "semantic-ui-react";

export default function EpisodeCard (props) {
  const [episode, setEpisode] = useState({});

  return (
    <Card>
      <h3>{props.name}</h3>
      <p>{props.airdate}</p>
    </Card>
  )
}
