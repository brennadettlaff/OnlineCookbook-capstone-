import React, {useState} from "react";
import { useParams } from "react-router-dom";


const NewNote = (props) => {
    const [id] = useState(0);
    const [text, setText] = useState('');
    const [recipe_id] = useParams().id;

    function handleSubmit(event){
        event.preventDefault();
        const newNote = {
            id: id,
            text: text,
            recipe_id: recipe_id,
        };
        debugger
        console.log(newNote)
        props.addNewNote(newNote)
    }

   

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add Note:</label>
                <input type='text' value={text} onChange={(event) => setText(event.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default NewNote;