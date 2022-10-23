import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";


const EditRecipeForm = (props) => {
    const [id] = useState(0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [instructions, setInstructions] = useState('');
    const [user, token] = useAuth();
    const [editRecpie, setEditRecipe] = useState([]);

    const ref = useRef(null)
    let recipe_id = useParams().id

    console.log("this", props.recipe.name)

    async function editRecipe(newRecipe){
        let response = await axios.put(`http://127.0.0.1:8000/api/recipe/edit/${recipe_id}/`, newRecipe, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        setEditRecipe(response.data)
        console.log(response)
        }


    function handleSubmit(event){
        event.preventDefault();
        const newRecipe = {
            id: recipe_id,
            name: name,
            description: description,
            time: time,
            instructions: instructions,
        };
        console.log(newRecipe)
        debugger
        editRecipe(newRecipe)
    }
    return ( 
       
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    ref={ref} defaultValue={props.recipe.name}
                    type='text'  
                    onChange={(event) => setName(event.target.value)}>
                </input>
                <label>Description:</label>
                <input type='text' defaultValue={props.recipe.description} onChange={(event) => setDescription(event.target.value)}></input>
                <label>Time:</label>
                <input type='text' defaultValue={props.recipe.time} onChange={(event) => setTime(event.target.value)}></input>
                <label>Instructions:</label>
                <input type='text' defaultValue={props.recipe.instructions} onChange={(event) => setInstructions(event.target.value)}></input>
                <button type='submit'>Save</button>
            </form>
        </div>
     );
}
 
export default EditRecipeForm;