import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const UserRecipes = () => {
    const [user, token] = useAuth();
    const [recipe, setRecipe] = useState([])

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
        setRecipe(response.log)
        console.log("recipe:", recipe)
        }

    return ( 
        <div>

        </div>
     );
}
 
export default UserRecipes;