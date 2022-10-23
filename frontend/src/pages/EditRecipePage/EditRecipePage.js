import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import IngredientsForm from "../../components/IngredientsForm/IngredientsForm";
import Ingredients from "../../components/Ingredients/Ingredients";
import EditRecipe from "../../components/EditRecipe/EditRecipe";


const EditRecipePage = () => {
    const [user, token] = useAuth();
    const [newIngredient, setNewIngredient] = useState([])

    let recipeId = useParams().id
    let navigate = useNavigate()

    async function addNewIngredient(newIngredient){
        let response = await axios.post('http://127.0.0.1:8000/api/ingredients/add/', newIngredient, {
          headers: {
            Authorization: "Bearer " + token,
        },
        })
        setNewIngredient(response.data)
      }

    return ( 
        <div>
            <Ingredients id={recipeId}/>
            <IngredientsForm addNewIngredient={addNewIngredient}/>
            {newIngredient.name}
            <button onClick={() => navigate(`/recipe/${recipeId}`)}>DONE</button>
            <EditRecipe />
        </div>
     );
}
 
export default EditRecipePage;