import React, { useEffect, useState } from 'react'
import Styles from '../styles/genre.module.css'

export default function JeuDetail({ gameId }) {

    // console.log("Composant Detail:" + gameId);

    const [detailJeu, setDetailJeu] = useState();

    async function fetchGameDetails(gameId) {
        const res = await fetch("https://api.rawg.io/api/games/" + gameId + "?key=1ffa16216d324d469708c437d40d38ca");
        const gameDetails = await res.json();
        // console.log(gameDetails);
        setDetailJeu(gameDetails);
        console.log(detailJeu);
    }

    useEffect(() => {
        fetchGameDetails(gameId);
    }, [gameId]);

    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.titreJeu} >
                    <h1>{detailJeu.name}</h1>
                </div>
                <div>
                    <img className={Styles.imgJeu} src={detailJeu.background_image} alt="" />
                    <img className={Styles.imgJeu2} src={detailJeu.background_image_additional} alt="" />
                    <p>sortis le : {detailJeu.released}</p>
                    {/* <p>plateforme : {detailJeu.platforms} </p> */}
                    <div className={Styles.description}
                        dangerouslySetInnerHTML={{ __html: detailJeu.description }}>
                    </div>
                </div>
            </div>
        </>
    )
}
