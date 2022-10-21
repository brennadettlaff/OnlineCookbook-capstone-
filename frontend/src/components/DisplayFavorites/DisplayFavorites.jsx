import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const DisplayFavorites = () => {
    const [favorites, setFavorites] = useState([])
    const [user, token] = useAuth();
    console.log(favorites)

    useEffect(() => {
        getFavorites();
      }, [])

    async function getFavorites(){
        let response = await axios.get('http://127.0.0.1:8000/api/favorite/', {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        setFavorites(response.data)
      }

    return ( 
        <div>
            <h1>{user.username}'s Favorites</h1>
            {favorites.map((entry, index) => {
                return(
                    <div key={index}>
                        <h3>{entry.recipe.name}</h3>
                        <div>{entry.recipe.description}</div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default DisplayFavorites;