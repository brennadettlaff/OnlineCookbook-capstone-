import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import RemoveFavorite from "../RemoveFavorite/RemoveFavorite";
import ToggleFavorite from "../ToggleFavorite/ToggleFavorite";

const DisplayFavorites = () => {
    const [favorites, setFavorites] = useState([])
    const [user, token] = useAuth();
    let navigate = useNavigate();

    useEffect(() => {
        getFavorites();
      }, [])

    async function getFavorites(){
        let response = await axios.get('http://127.0.0.1:8000/api/favorite/recipe/true/', {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        setFavorites(response.data)
    }

    return ( 
        <div>
            {favorites.map((entry, index) => {
                return(
                    <div key={index}>
                        <h3 onClick={() => navigate(`/recipe/${entry.recipe.id}`)}>{entry.recipe.name}</h3>
                        <div>{entry.recipe.description}</div>
                        <RemoveFavorite id={entry.id}/>
                        {/* <ToggleFavorite favoriteData={entry}/> */}
                    </div>
                )
            })}
        </div>
     );
}
 
export default DisplayFavorites;