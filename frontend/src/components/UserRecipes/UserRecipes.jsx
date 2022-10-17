import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const UserRecipes = () => {
    const [user, token] = useAuth();
    const [userRecipes, setUserRecipes] = useState([])
    console.log("users recipes:", userRecipes) 

    useEffect(()=> {
        getUsersRecipes();
    }, [])

    async function getUsersRecipes(){
        let response = await axios.get('http://127.0.0.1:8000/api/recipe/user/', {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        console.log(response.data)
        setUserRecipes(response.data)
        }

    return (  
        <div>
            {userRecipes.map((entry, index) => {
              return(
                <div key={index}>
                    <h3>{entry.name}</h3>
                    <div>{entry.description}</div>
                </div>
            )})}
        </div>
     );
}
 
export default UserRecipes;