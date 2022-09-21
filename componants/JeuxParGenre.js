import React, { useEffect, useState, useRef } from "react";
import Styles from '../styles/genre.module.css'
import JeuDetail from "./JeuDetail";

export default function JeuxParGenre(genreId) {
  // console.log(genreId.genreId);

  const [selectionJeu, setSelectionJeu] = useState([]);
  const [gameId, setGameId] = useState();

  let params = new URLSearchParams();
  params.append("genres", genreId);

  async function fetchGamesByGenres(genreId) {
    let parameters = new URLSearchParams();
    parameters.append("key", "1ffa16216d324d469708c437d40d38ca");
    parameters.append("genres", genreId.genreId);

    const res = await fetch("https://api.rawg.io/api/games?" + parameters);
    const gamesByGenres = await res.json();
    // console.log(gamesByGenres);
    setSelectionJeu(gamesByGenres);
    // console.log(selectionJeu.results);
  }

  useEffect(() => {
    fetchGamesByGenres(genreId);
  }, [genreId]);

  const handleGames = (e) => {
    setGameId(e.target.id);
    // console.log({ gameId });
  }

  return (
    <>
      <h1>Jeux</h1>
      <div className={Styles.wrapper}>
        {selectionJeu.results?.map((jeux, index) => (
          <div key={index}>
            <img className={Styles.imgGenre} src={jeux.background_image} id={jeux.id} alt={jeux.name} value={gameId} onClick={handleGames} />
            {jeux.name}
            <h3>id : {jeux.id} </h3>
          </div>
        ))}
      </div>
      <JeuDetail gameId={gameId} />
    </>
  );
}
