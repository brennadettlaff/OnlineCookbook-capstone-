import React, {useEffect, useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import EditRecipeForm from "../EditRecipeForm/EditRecipeForm";


const EditRecipe = () => {
    const [editRecpie, setEditRecipe] = useState([]);
    const [user, token] = useAuth();
    let recipe_id = useParams().id;

    async function editRecipe(newRecipe){
        let response = await axios.put(`http://127.0.0.1:8000/api/recipe/edit/${recipe_id}/`, newRecipe, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        setEditRecipe(response.data)
        }

    return ( 
        <div>
            <EditRecipeForm />
            <button>Save</button>
        </div>
     );
}
 
export default EditRecipe;