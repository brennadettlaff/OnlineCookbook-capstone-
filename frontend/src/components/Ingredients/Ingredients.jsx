import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

const Ingredients = (props) => {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        getIngredients();
      }, [])
    
      async function getIngredients(){
        let response = await axios.get(`http://127.0.0.1:8000/api/ingredients/view/${props.id}/`)
        setIngredients(response.data)
      }

    return ( 
        <div>
            <div>
            {ingredients.map((entry, index) => {
              return(
                <div key={index}>
                  <h3>{entry.name}</h3>
                </div>
              )})}
          </div>
        </div>
     );
}
 
export default Ingredients;