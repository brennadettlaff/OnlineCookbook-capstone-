import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';

import IngredientsForm from "../../components/IngredientsForm/IngredientsForm";


const EditRecipePage = () => {
    const [user, token] = useAuth();
    const [newIngredient, setNewIngredient] = useState([])

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
            <IngredientsForm addNewIngredient={addNewIngredient}/>
            {newIngredient.name}
        </div>
     );
}
 
export default EditRecipePage;