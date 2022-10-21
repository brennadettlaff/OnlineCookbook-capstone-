import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const RemoveFavorite = (props) => {
    const [user, token] = useAuth();
    let recipe_id = useParams().id

    async function deleteFavorite(){
        console.log(props.id)
        let response = await axios.post(`http://127.0.0.1:8000/api/favorite/delete/${props.id}/`, {
          headers: {
            Authorization: "Bearer " + token,
        }, 
        })
        console.log(response)
    }

    return ( 
        <div>
            <p onClick={() => deleteFavorite()}>Unfavorite</p>
        </div>
     );
}
 
export default RemoveFavorite;