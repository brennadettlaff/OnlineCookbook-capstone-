import React, {useState} from "react";
import { useParams } from "react-router-dom";

const IngredientsForm = (props) => {
    const [id] = useState(0);
    const [name, setName] = useState('');
    let recipe_id = useParams().id


    function handleSubmit(event){
        event.preventDefault();
        const newIngredient = {
            id: id,
            name: name,
            recipe_id: recipe_id,
        };
        props.addNewIngredient(newIngredient)
    }


    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add Ingredient:</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
                <button type='submit'>Add Ingredient</button>
            </form>
        </div>
     );
}
 
export default IngredientsForm;