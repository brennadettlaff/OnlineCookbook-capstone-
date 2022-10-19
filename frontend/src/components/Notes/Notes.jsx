import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import NewNote from "../../components/NewNote/NewNote";
import useAuth from "../../hooks/useAuth";


const Notes = () => {
    const [token] = useAuth();
    const [notes, setNote] = useState([]);

    let recipeId = useParams().id
  
    useEffect(() => {
      getNote();
    }, [])
  
    async function getNote(){
      let response = await axios.get(`http://127.0.0.1:8000/api/notes/view/${recipeId}/`)
      setNote(response.data)
    }

    async function addNewNote(newNote){
      let response = await axios.post('http://127.0.0.1:8000/api/notes/add/', newNote, {
        headers: {
          Authorization: "Bearer " + token,
      },})
      if(response.status === 201){
        await getNote();
    }
      console.log(response)
    }


    return ( 
        <div>
          <div>
            {notes.map((entry, index) => {
              return(
                <div key={index}>
                  <div>{entry.text}</div>
                </div>
              )})}
          </div>
          <div>
            <NewNote addNewNote={addNewNote}/>
          </div>
        </div>
     );
}
 
export default Notes;