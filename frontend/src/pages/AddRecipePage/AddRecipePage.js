import RecipeForm from "../../components/RecipeForm/RecipeForm";
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const AddRecipePage = () => {
  const [user, token] = useAuth();


  async function addNewRecipe(newRecipe){
    let response = await axios.post('http://127.0.0.1:8000/api/recipe/user/', newRecipe, {
      headers: {
        Authorization: "Bearer " + token,
    },
    })
    console.log(response)
  }

  
  return (
    <div>
        <RecipeForm addNewRecipe={addNewRecipe}/>

    </div>
  );
};

export default AddRecipePage;