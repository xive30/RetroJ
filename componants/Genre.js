import React, { useEffect } from 'react'
import { useState, UseEffect } from 'react'
import Styles from '../styles/genre.module.css'

export default function Genre() {

    const [genreJeu, setGenreJeu] = useState([]);

    useEffect(() => {

        fetch("https://api.rawg.io/api/genres?key=1ffa16216d324d469708c437d40d38ca")
            .then(response => response.json())
            .then(data => {
                setGenreJeu(data.results)
                console.log(data.results);
            })
    }, [])
    return (
        <>
            <div className={ Styles.wrapper }>
                {genreJeu.map((genre, index) => (
                    <div key={index}>
                        <img className={Styles.imgGenre} src={genre.image_background} alt={genre.name} />
                        <div>
                        <h2>{genre.name}</h2>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}
