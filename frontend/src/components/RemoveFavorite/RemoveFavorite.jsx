import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const RemoveFavorite = (props) => {
    const [user, token] = useAuth();
    let recipe_id = useParams().id
    let navigate = useNavigate();

    async function deleteFavorite(){
        console.log(props.id)
        let response = await axios.delete(`http://127.0.0.1:8000/api/favorite/delete/${props.id}/`, {
          headers: {
            Authorization: "Bearer " + token,
        }, 
        })
        window.location.reload()  
    }

    return ( 
        <div>
            <p onClick={() => deleteFavorite()}>Unfavorite</p>
        </div>
     );
}
 
export default RemoveFavorite;