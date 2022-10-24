import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import EditRecipeForm from "../EditRecipeForm/EditRecipeForm";


const EditRecipe = () => {
    let recipe_id = useParams().id;

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        getRecipe();
      }, [])
    async function getRecipe(){
        let response = await axios.get(`http://127.0.0.1:8000/api/recipe/details/${recipe_id}/`)
        setRecipe(response.data[0])
        console.log(response.data[0])
      }


    return ( 
        <div>
            <EditRecipeForm recipe={recipe} />
        </div>
     );
}
 
export default EditRecipe;