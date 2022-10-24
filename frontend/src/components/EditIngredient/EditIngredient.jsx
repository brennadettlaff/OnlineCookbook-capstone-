import React, {useState, useEffect} from "react";
import axios from 'axios';
import EditIngredientForm from "../EditIngredientForm/EditIngredientForm";

const EditIngredient = (props) => {
    const [ingredients, setIngredients] = useState([])
    console.log(ingredients)
    useEffect(() => {
        getIngredients();
        }, [])

    async function getIngredients(){
        let response = await axios.get(`http://127.0.0.1:8000/api/ingredients/view/${props.id}/`)
        setIngredients(response.data)
        }

    return ( 
        <div>
            <div>
            {ingredients.map((entry, index) => {
              return(
                <div key={index}>
                    <EditIngredientForm data={entry}/>
                </div>
              )})}
          </div>
        </div>
     );
}
 
export default EditIngredient;