import React, { useEffect, useState } from 'react';
import axios from "axios";
import LocationCard from "./LocationCard.js";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/location/")
    .then(res => {
      setLocations(res.data.results);
    })
  }, []);

  return <section classNmae="location-list grid-view">
      <h2>Locations</h2>
      {locations.map(location => {
        return <LocationCard key={location.id} name={location.name}
                                               type={location.type}
                                               dimension={location.dimension} />
      })}
    </section>
}
