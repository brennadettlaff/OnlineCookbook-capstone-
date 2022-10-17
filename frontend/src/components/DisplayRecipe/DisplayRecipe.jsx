import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Ingredients from "../../components/Ingredients/Ingredients";



const DisplayRecipe = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipe();
  }, [])

  async function getRecipe(){
    let response = await axios.get('http://127.0.0.1:8000/api/recipe/details/1/')
    console.log("recipe", response.data)
    setRecipe(response.data)
  }

    return ( 
        <div>
          <div>
            {recipe.map((entry, index) => {
              return(
                <div key={index}>
                  <h1>{entry.name}</h1>
                  <h4>{entry.time}</h4>
                  <h4>{entry.description}</h4>
                  <h2>Directions</h2>
                  <h3>{entry.instructions}</h3>
                  <h2>Ingredients</h2>
                  <Ingredients id={entry.id}/>
                </div>
              )})}
          </div>
        </div>
     );
}
 
export default DisplayRecipe;

