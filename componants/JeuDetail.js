import React, { useState } from 'react'

export default function JeuDetail(gameId) {

    console.log("Composant Detail:" + gameId.gameId);
    // const [detailJeu, setDetailJeu] = useState();

    // async function fetchGameDetails(gameId) {
    //     const res = await fetch("https://api.rawg.io/api/games/" + gameId.gameId + "?key=1ffa16216d324d469708c437d40d38ca");
    //     const gameDetails = await res.json();
    //     console.log(gameDetails);
    //     setDetailJeu("gameDetails : " + gameDetails);
    //     console.log("detailJeu : " + detailJeu);
    // }

    // useEffect(() => {
    //     fetchGameDetails(gameId);
    // }, [gameId.gameId]);

    // return (
    //     <div>
    //         Details

    //     </div>
    // )
}
