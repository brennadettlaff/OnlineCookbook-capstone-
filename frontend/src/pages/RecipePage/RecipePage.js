import React from "react";
import DisplayRecipe from "../../components/DisplayRecipe/DisplayRecipe";
import Notes from "../../components/Notes/Notes";
import AddFavorite from "../../components/AddFavorite/AddFavorite"
import AddToCollection from "../../components/AddToCollection/AddToCollection";
import EditRecipeButton from "../../components/EditRecipeButton/EditRecipeButton";
import Ingredients from "../../components/Ingredients/Ingredients";
import { useParams } from "react-router-dom";
import './RecipePage.css'

const RecipePage = () => {
  let id = useParams().id
  return (
    <div className="add-space">
      <div className="page-buttons"><AddFavorite /></div>
      <div className="page-buttons"> <EditRecipeButton /> </div>
      <div className="page-buttons"> <AddToCollection /> </div>
 
      <DisplayRecipe />
      
      <div> 
        <h2>Ingredients</h2>
        <Ingredients id={id}/>
      </div>
      
      <h2>Notes</h2>
      <Notes />
      
    </div>
  );
};

export default RecipePage;