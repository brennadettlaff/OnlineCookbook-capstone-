import React, {useState, useEffect} from "react";
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";


const NewNote = () => {
    const [user, token] = useAuth();
    const [id] = useState(0);
    const [text, setText] = useState('');
    const [recipe_id] = useParams().id;
    const [note, setNote] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        const newNote = {
            id: id,
            text: text,
            recipe_id: recipe_id,
        };
        setNote(newNote)
        console.log(newNote)
    }

    useEffect(() => {
        addNewNote(note)
    }, [])

    async function addNewNote(newNote){
        let response = await axios.post('http://127.0.0.1:8000/api/notes/add/', newNote, {
          headers: {
            Authorization: "Bearer " + token,
        },
        })
        console.log(response)
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