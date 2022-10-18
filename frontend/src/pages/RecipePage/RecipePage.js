import React from "react";
import DisplayRecipe from "../../components/DisplayRecipe/DisplayRecipe";
import NewNote from "../../components/NewNote/NewNote";
import Notes from "../../components/Notes/Notes";


const RecipePage = () => {


  return (
    <div>
      <DisplayRecipe />
      <h2>Notes</h2>
      <Notes />
      <NewNote />
    </div>
  );
};

export default RecipePage;