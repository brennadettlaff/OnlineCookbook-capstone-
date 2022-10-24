import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import './DisplayRecipe.css'


const DisplayRecipe = () => {
  const [recipe, setRecipe] = useState([]);

  let recipeId = useParams().id

  useEffect(() => {
    getRecipe();
  }, [])

  async function getRecipe(){
    let response = await axios.get(`http://127.0.0.1:8000/api/recipe/details/${recipeId}/`)
    setRecipe(response.data)
  }

    return ( 
        <div>
          <div>
            {recipe.map((entry, index) => {
              return(
                <div key={index}>
                  <div className="direct-style">
                    <h1>{entry.name}</h1>
                    <h4>{entry.description}</h4>
                  </div>
                  <div className='time-style'><h4>{entry.time}</h4></div>
                  <div className="split right">
                    <h2 >Directions</h2>
                    <pre><h3>{entry.instructions}</h3> </pre>
                  </div>
                </div>
              )})}
          </div>
        </div>
     );
}
 
export default DisplayRecipe;

