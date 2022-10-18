import RecipeForm from "../../components/RecipeForm/RecipeForm";
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IngredientsForm from "../../components/IngredientsForm/IngredientsForm";
// import LinkRecipes from "../../components/LinkRecipes/LinkRecipes";



const AddRecipePage = () => {
  const [user, token] = useAuth();
  const [newRecipe, setNewRecipe] = useState([])
  const [newIngredient, setNewIngredient] = useState([])

  console.log(newRecipe)
  console.log(newIngredient)

  async function addNewRecipe(newRecipe){
    let response = await axios.post('http://127.0.0.1:8000/api/recipe/user/', newRecipe, {
      headers: {
        Authorization: "Bearer " + token,
    },
    })
    setNewRecipe(response.data)
  }

  async function addNewIngredient(newIngredient){
    let response = await axios.post('http://127.0.0.1:8000/api/ingredients/add/', newIngredient, {
      headers: {
        Authorization: "Bearer " + token,
    },
    })
    setNewIngredient(response.data)
  }

  
  return (
    <div>
        <RecipeForm addNewRecipe={addNewRecipe}/>
        <IngredientsForm addNewIngredient={addNewIngredient}/>
        {newIngredient.name}

    </div>
  );
};

export default AddRecipePage;