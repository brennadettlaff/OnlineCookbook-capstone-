import React, {useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const EditIngredientForm = (props) => {
    const [user, token] = useAuth()
    const [toggle, setToggle] = useState(true);
    const [name, setName] = useState(props.data.name)

    console.log("here", props.data.name)
    let ingredientId = props.data.id
    let recipeId = useParams().id;

    async function editIngredient(newIngredient){
        let response = await axios.put(`http://127.0.0.1:8000/api/ingredients/edit/${ingredientId}/`, newIngredient, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        console.log(response)
        }

        function handleSubmit(event){
            event.preventDefault();
            const newIngredient = {
                id: ingredientId,
                user: user,
                name: name,
                recipe_id: recipeId,
            };
            editIngredient(newIngredient)
            setToggle(!toggle)
        }

    return ( 
        <div>
            {toggle ? (
                <div>
                    <h3>{props.data.name}</h3>
                    <button onClick={() => setToggle(!toggle)}>Edit</button>
                </div>
            ) : (
            <div>
                <form onSubmit={handleSubmit}>
                    <label></label>
                    <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
          )}
        </div>
     );
}
 
export default EditIngredientForm;