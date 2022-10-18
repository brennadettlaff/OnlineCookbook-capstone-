import React, {useState} from "react";

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
        <div>
            <h1>test</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
                <label>Description:</label>
                <input type='text' value={description} onChange={(event) => setDescription(event.target.value)}></input>
                <label>Time:</label>
                <input type='text' value={time} onChange={(event) => setTime(event.target.value)}></input>
                <label>Instructions:</label>
                <input type='text' value={instructions} onChange={(event) => setInstructions(event.target.value)}></input>
                <button type='submit'>Add Recipe</button>
            </form>
        </div>
     );
}
 
export default RecipeForm;