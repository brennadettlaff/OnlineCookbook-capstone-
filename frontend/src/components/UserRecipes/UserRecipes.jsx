import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const UserRecipes = () => {
    const [user, token] = useAuth();
    const [userRecipes, setUserRecipes] = useState([])
    
    let navigate = useNavigate();

    useEffect(()=> {
        getUsersRecipes();
    }, [])

    async function getUsersRecipes(){
        let response = await axios.get('http://127.0.0.1:8000/api/recipe/user/', {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        setUserRecipes(response.data)
        }

    return (  
        <div>
            {userRecipes.map((entry, index) => {
              return(
                <div key={index}>
                    <h3 onClick={() => navigate(`/recipe/${entry.id}`)}>{entry.name}</h3>
                    <div>{entry.description}</div>
                </div>
            )})}
        </div>
     );
}
 
export default UserRecipes;