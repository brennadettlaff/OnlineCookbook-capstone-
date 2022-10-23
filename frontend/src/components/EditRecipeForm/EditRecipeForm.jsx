import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const EditRecipeForm = (props) => {
    const [id] = useState(0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [instructions, setInstructions] = useState('');

    const [recipe, setRecipe] = useState([]);
    const ref = useRef(null)
    let recipeId = useParams().id


    useEffect(() => {
        getRecipe();
      }, [])

    async function getRecipe(){
        let response = await axios.get(`http://127.0.0.1:8000/api/recipe/details/${recipeId}/`)
        setRecipe(response.data[0])
        console.log(response.data[0])
      }

    function handleSubmit(event){
        event.preventDefault();
        const newRecipe = {
            id: recipe.id,
            name: name,
            description: description,
            time: time,
            instructions: instructions,
        };
        debugger
        console.log(newRecipe)
        props.editRecipe(newRecipe)
    }
    return ( 
       
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    ref={ref} defaultValue={recipe.name}
                    type='text'  
                    onChange={(event) => setName(event.target.value)}>
                </input>
                <label>Description:</label>
                <input type='text' defaultValue={recipe.description} onChange={(event) => setDescription(event.target.value)}></input>
                <label>Time:</label>
                <input type='text' defaultValue={recipe.time} onChange={(event) => setTime(event.target.value)}></input>
                <label>Instructions:</label>
                <input type='text' defaultValue={recipe.instructions} onChange={(event) => setInstructions(event.target.value)}></input>
                <button type='submit'>Save</button>
            </form>
        </div>
     );
}
 
export default EditRecipeForm;