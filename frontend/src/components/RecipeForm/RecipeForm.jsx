import React, {useState} from "react";
import './RecipeForm.css'

const RecipeForm = (props) => {
    const [id] = useState(0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [instructions, setInstructions] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        const newRecipe = {
            id: id,
            name: name,
            description: description,
            time: time,
            instructions: instructions,
        };
        props.addNewRecipe(newRecipe)
    }


    return ( 
        <div className="add-space">
            <h1>New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
                </div>
                <div>
                    <label>Description: </label>
                    <input type='text' value={description} onChange={(event) => setDescription(event.target.value)}></input>
                </div>
                <div>
                    <label>Time: </label>
                    <input type='text' value={time} onChange={(event) => setTime(event.target.value)}></input>
                </div>
                <div>
                    <div><label>Instructions:</label> </div>
                    <textarea type='text' rows='13' cols='80' value={instructions} onChange={(event) => setInstructions(event.target.value)}></textarea>
                </div>
                
                
                
                
                <button type='submit'>Add Recipe</button>
            </form>
        </div>
     );
}
 
export default RecipeForm;