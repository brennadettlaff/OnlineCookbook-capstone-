import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth"; 

const GetFavorite = () => {
    const [favorites, setFavorites] = useState([])
    const [user, token] = useAuth();

    useEffect(() => {
        getFavorites();
      }, [])

    async function getFavorites(){
        let response = await axios.get('http://127.0.0.1:8000/api/favorite/recipe/427/', {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        console.log("Fav", response)
    }

    return ( 
        <div>
        </div>
     );
}
 
export default GetFavorite;