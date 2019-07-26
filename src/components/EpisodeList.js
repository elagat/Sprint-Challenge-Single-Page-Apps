import React, { useEffect, useState } from 'react';
import axios from "axios";
import EpisodeCard from "./EpisodeCard.js";

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/episode/")
    .then(res => {
      setEpisodes(res.data.results);
    })
  }, []);

  return <section className="episode-list grid-view">
      {episodes.map(episode => {
        return <EpisodeCard key={episode.id} name={episode.name}
                                             airdate={episode.air_date} />
      })}
    </section>
}
