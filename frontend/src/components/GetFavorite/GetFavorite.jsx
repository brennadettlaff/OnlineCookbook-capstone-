import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth"; 
import { useParams } from "react-router-dom";

const GetFavorite = (props) => {
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
        // console.log("Fav", response.data)
        setFavorites(response.data)
        console.log(response.data[0])
        props.checkFavorites(response.data)
        // checkFavorites(favorites)
    }
    

    return ( 
        <div>
            
        </div>
     );
}
 
export default GetFavorite;