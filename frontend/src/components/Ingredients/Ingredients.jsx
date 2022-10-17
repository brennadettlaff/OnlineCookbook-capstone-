import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        getIngredients();
      }, [])
    
      async function getIngredients(){
        let response = await axios.get('http://127.0.0.1:8000/api/recipe_ingredients/')
        console.log(response.data)
        setIngredients(response.data)
      }

    return ( 
        <div>
            <div>
            {ingredients.map((entry, index) => {
              return(
                <div key={index}>
                  <h1>{entry.ingredients.name}</h1>
                  <h1>{entry.recipe.name}</h1>
                </div>
              )})}
          </div>
        </div>
     );
}
 
export default Ingredients;