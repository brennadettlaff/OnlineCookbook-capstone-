import RecipeForm from "../../components/RecipeForm/RecipeForm";
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IngredientsForm from "../../components/IngredientsForm/IngredientsForm";



const AddRecipePage = () => {
  const [user, token] = useAuth();


  async function addNewRecipe(newRecipe){
    let response = await axios.post('http://127.0.0.1:8000/api/recipe/user/', newRecipe, {
      headers: {
        Authorization: "Bearer " + token,
    },
    })
  }

  async function addNewIngredient(newIngredient){
    let response = await axios.post('http://127.0.0.1:8000/api/ingredients/add/', newIngredient, {
      headers: {
        Authorization: "Bearer " + token,
    },
    })
  }

  
  return (
    <div>
        <RecipeForm addNewRecipe={addNewRecipe}/>
        <IngredientsForm addNewIngredient={addNewIngredient}/>
    </div>
  );
};

export default AddRecipePage;