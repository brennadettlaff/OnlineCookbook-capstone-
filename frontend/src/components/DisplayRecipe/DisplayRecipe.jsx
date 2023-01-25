import React from "react";
import './DisplayRecipe.css'


const DisplayRecipe = (props) => {

    return ( 
        <div>
          <div>
            {props.recipe.map((entry, index) => {
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

