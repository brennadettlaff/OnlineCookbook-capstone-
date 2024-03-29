import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import HandleFavorite from "../../components/HandleFavorite/HandleFavorite";
import EditRecipeButton from "../../components/EditRecipeButton/EditRecipeButton";
import DisplayRecipe from "../../components/DisplayRecipe/DisplayRecipe";
import Ingredients from "../../components/Ingredients/Ingredients";
import Notes from "../../components/Notes/Notes";
import AddToCollection from "../../components/AddToCollection/AddToCollection";

import './RecipePage.css'

const RecipePage = () => {
  const [recipe, setRecipe] = useState([]);
  const [userId, setUserId] = useState()
  let recipeId = useParams().id

  useEffect(() => {
    getRecipe();
  }, [])

  async function getRecipe(){
    let response = await axios.get(`http://127.0.0.1:8000/api/recipe/details/${recipeId}/`)
    setRecipe(response.data)
    setUserId(response.data[0].user.id)
  }

  return (
    <div className="add-space">
      <div className="page-buttons"><HandleFavorite /></div>
      <div className="page-buttons"> <EditRecipeButton userId={userId}/> </div>      
 
      <DisplayRecipe recipe={recipe}/>
      
      <div className="ingred"> <h2>Ingredients</h2> 
        <Ingredients recipeId={recipeId}/>
      </div>
      
      <div className="ingred"> <h2>Notes</h2> <Notes /></div>
      <div > <AddToCollection /> </div>
    </div>
  );
};

export default RecipePage;