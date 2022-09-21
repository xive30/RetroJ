import React, { useEffect, useState, useRef } from 'react'
import Styles from '../styles/genre.module.css'
import JeuxParGenre from './JeuxParGenre';

export default function Genre() {

    const [genreJeu, setGenreJeu] = useState([]);
    const [genreId , setGenreId]= useState();

        useEffect(() => {
            fetch("https://api.rawg.io/api/genres?key=1ffa16216d324d469708c437d40d38ca")
                .then(response => response.json())
                .then(data => {
                    setGenreJeu(data.results)
                    // console.log(data.results);
                })
        }, [])

    const handleGenre = (e) => {
        setGenreId(e.target.id);
        console.log({genreId});
    }

    return (
        <>
            <h2>Genre</h2>
            <div className={Styles.wrapper}>
                {genreJeu.map((genre, index) => (
                    <div key={index}>
                        <img className={Styles.imgGenre} src={genre.image_background} alt={genre.name} id={genre.id} value={genreId} onClick={handleGenre} />
                        <div>
                            <h3>{genre.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <JeuxParGenre genreId={genreId}  />
        </>
    )
}
