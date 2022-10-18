import React, {useState} from "react";

const NewNote = () => {
    const [id] = useState(0);
    const [text, setText] = useState('');
    const [recipe_id, setRecipeId] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        const newNote = {
            id: id,
            text: text,
            recipe_id: recipe_id,
        };
    }
    return ( 
        <div>
            <label>Add Note:</label>
            <input type='text' value={text} onChange={(event) => setText(event.target.value)}></input>
            <button type='submit'>Submit</button>
        </div>
     );
}
 
export default NewNote;