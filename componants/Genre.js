import React, { useEffect, useState, useRef } from 'react'
import Styles from '../styles/genre.module.css'

export default function Genre({ setGenreId }) {

    const [genreJeu, setGenreJeu] = useState([]);

    useEffect(() => {
        fetch("https://api.rawg.io/api/genres?key=1ffa16216d324d469708c437d40d38ca")
            .then(response => response.json())
            .then(data => {
                setGenreJeu(data.results)
                // console.log(data.results);
            })
    }, [])

    return (
        <>
            <h2>Genre</h2>
            <div className={Styles.wrapper}>
                {genreJeu.map((genre, index) => (
                    <div key={index}>
                        <div>
                            <img className={Styles.imgGenre} src={genre.image_background} alt={genre.name} value={genre.id} onClick={() => (setGenreId(genre.id))} />
                            <h3>{genre.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
