import React from "react";
import DisplayRecipe from "../../components/DisplayRecipe/DisplayRecipe";
import Notes from "../../components/Notes/Notes";



const RecipePage = () => {

  return (
    <div>
      <DisplayRecipe />
      <h2>Notes</h2>
      <Notes />
      
    </div>
  );
};

export default RecipePage;