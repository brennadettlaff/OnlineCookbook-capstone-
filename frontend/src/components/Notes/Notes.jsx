import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Notes = () => {

    const [notes, setNote] = useState([]);

  
    useEffect(() => {
      getRecipe();
    }, [])
  
    async function getRecipe(){
      let response = await axios.get(`http://127.0.0.1:8000/api/notes/view/1/`)
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