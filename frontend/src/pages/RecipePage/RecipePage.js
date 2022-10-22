import React from "react";
import DisplayRecipe from "../../components/DisplayRecipe/DisplayRecipe";
import Notes from "../../components/Notes/Notes";
import AddFavorite from "../../components/AddFavorite/AddFavorite"
import AddToCollection from "../../components/AddToCollection/AddToCollection";



const RecipePage = () => {

  return (
    <div>
      <AddFavorite />
      <AddToCollection />
      <DisplayRecipe />
      <h2>Notes</h2>
      <Notes />
      
    </div>
  );
};

export default RecipePage;