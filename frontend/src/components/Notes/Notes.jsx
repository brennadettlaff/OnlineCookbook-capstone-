import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const Notes = () => {

    const [notes, setNote] = useState([]);

    console.log("Params", useParams().id)
    let recipeId = useParams().id
  
    useEffect(() => {
      getRecipe();
    }, [])
  
    async function getRecipe(){
      let response = await axios.get(`http://127.0.0.1:8000/api/notes/view/${recipeId}/`)
      console.log("recipe", response.data)
      setNote(response.data)
    }

    return ( 
        <div>
            {notes.map((entry, index) => {
              return(
                <div key={index}>
                  <div>{entry.text}</div>
                </div>
              )})}
        </div>
     );
}
 
export default Notes;