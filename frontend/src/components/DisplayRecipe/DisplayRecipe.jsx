import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";


const DisplayRecipe = () => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getRecipe();
  }, [])

  async function getRecipe(){
    let response = await axios.get('http://127.0.0.1:8000/api/recipe/details/2/')
    console.log(response.data)
    setRecipe(response.data)
  }

    return ( 
        <div>
          <h1>test</h1>
          <div>
            {recipe.map((entry, index) => {
              return(
                <div key={index}>
                  <h3>{entry.name}</h3>
          </div>)})}
        </div>
          {/* <div>
            {recipe &&
              recipe.map((recipe) => (
                <p key={recipe.id}>
                  {recipe.name}
                </p>
              ))}
          </div> */}
          {/* <h1>{recipe[0].name}</h1> */}
        </div>
     );
}
 
export default DisplayRecipe;

