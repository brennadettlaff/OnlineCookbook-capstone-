import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth"; 
import { useParams } from "react-router-dom";

const GetFavorite = () => {
    const [favorites, setFavorites] = useState([])
    const [user, token] = useAuth();

    let recipe_id = useParams().id

    useEffect(() => {
        getFavorites(recipe_id);
      }, [])

    async function getFavorites(recipe_id){
        let response = await axios.get(`http://127.0.0.1:8000/api/favorite/recipe/${recipe_id}/`, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        console.log("Fav", response)
        console.log("Status", response.status)
        console.log("Data", response.data.length)
        setFavorites(response.data)
        if(response.data.length == 0) {
            console.log("like doesn't exists")
        }
        else {
            console.log('like exists') 
        }
    }

    return ( 
        <div>
        </div>
     );
}
 
export default GetFavorite;