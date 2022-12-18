import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const AddFavorite = () => {
    const [user, token] = useAuth();
    const [id] = useState(0);
    let recipe_id = useParams().id

    function handleFavorite(){
        const newFavorite = {
            id: id,
            recipe_id: recipe_id,
        };
        addNewFavorite(newFavorite)
    }

    async function addNewFavorite(newEntry){
        let response = await axios.post('http://127.0.0.1:8000/api/favorite/', newEntry, {
          headers: {
            Authorization: "Bearer " + token,
        },
        })
        console.log(response)
        window.location.reload();
    }

    return ( 
        <div>
            <button onClick={() => handleFavorite()}>Favorite</button>
        </div>
     );
}
 
export default AddFavorite;