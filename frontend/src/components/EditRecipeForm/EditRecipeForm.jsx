import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import './EditRecipeForm.css'

const EditRecipeForm = (props) => {
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
        editRecipe(newRecipe)
        debugger
    }

    return ( 
        <div className="rec-style">
            <form onSubmit={handleSubmit}>
                <div className="add-space">
                    <label>Name:</label>
                    <input 
                        ref={ref} defaultValue={props.recipe.name}
                        type='text' className="inp-style"
                        onChange={(event) => setName(event.target.value)}>
                    </input>
                </div>
                <div className="add-space">
                    <label>Time:</label>
                    <input type='text' className="inp-style" defaultValue={props.recipe.time} onChange={(event) => setTime(event.target.value)}></input>
                </div>
                <div className="add-space">
                    <label>Description:</label> 
                    <input type='text' className="desc-style" defaultValue={props.recipe.description} onChange={(event) => setDescription(event.target.value)}></input>
                </div>
                <div className="add-space">
                    <div><label>Instructions:</label></div>
                    <div>
                        <textarea type='text' rows='10' cols='75' defaultValue={props.recipe.instructions} onChange={(event) => setInstructions(event.target.value)}></textarea>
                    </div>
                </div>
                <button className="add-space" type='submit'>Save</button>
            </form>
        </div>
     );
}
 
export default EditRecipeForm;