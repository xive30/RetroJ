import React, { useEffect, useState } from "react";
import Styles from '../styles/genre.module.css'

export default function JeuxParGenre({genreId, setGameId}) {

  const [selectionJeu, setSelectionJeu] = useState([]);


  async function fetchGamesByGenres(genreId) {
    let parameters = new URLSearchParams();
    parameters.append("genres", genreId);
    parameters.append("key", "1ffa16216d324d469708c437d40d38ca");

    const res = await fetch("https://api.rawg.io/api/games?" + parameters);
    const gamesByGenres = await res.json();
    // console.log( gamesByGenres);
    setSelectionJeu(gamesByGenres);
    // console.log("Selection de jeux : " + selectionJeu.results);
  }

  useEffect(() => {
    fetchGamesByGenres(genreId);
  }, [genreId]);

  return (
    <>
      <h1>Jeux</h1>
      <div className={Styles.wrapper}>
        {selectionJeu.results?.map((jeux, index) => (
          <div key={index}>
            <img className={Styles.imgGenre} src={jeux.background_image} alt={jeux.name} value={jeux.Id} onClick={() => (setGameId(jeux.id))} />
            <h3>{jeux.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
