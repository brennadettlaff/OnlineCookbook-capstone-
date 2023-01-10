import React from "react";
import DisplayRecipe from "../../components/DisplayRecipe/DisplayRecipe";
import Notes from "../../components/Notes/Notes";
import AddFavorite from "../../components/AddFavorite/AddFavorite"
import AddToCollection from "../../components/AddToCollection/AddToCollection";
import EditRecipeButton from "../../components/EditRecipeButton/EditRecipeButton";
import Ingredients from "../../components/Ingredients/Ingredients";
import { useParams } from "react-router-dom";
import './RecipePage.css'
import GetFavorite from "../../components/GetFavorite/GetFavorite";
import ToggleFavorite from "../../components/HandleFavorite/HandleFavorite";
import HandleFavorite from "../../components/HandleFavorite/HandleFavorite";

const RecipePage = () => {
  let id = useParams().id
  return (
    <div className="add-space">
      <div className="page-buttons"><HandleFavorite /></div>
      <div className="page-buttons"> <EditRecipeButton /> </div>
      
 
      <DisplayRecipe />
      
      <div className="ingred"> 
        <h2>Ingredients</h2>
        <Ingredients id={id}/>
      </div>
      
      <div className="ingred">
        <h2>Notes</h2>
        <Notes />
      </div>
      <div > <AddToCollection /> </div>
      
      {/* <ToggleFavorite /> */}

    </div>
  );
};

export default RecipePage;