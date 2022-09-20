import React, { useEffect } from 'react'
import { useState, UseEffect } from 'react'

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
        {genreJeu.map((genre, index) => (
            <div key= {index}>
                <p>{genre.name}</p>
            </div>
            
        ))}
    </>
  )
}
