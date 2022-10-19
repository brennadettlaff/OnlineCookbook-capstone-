import RecipeForm from "../../components/RecipeForm/RecipeForm";
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const AddRecipePage = () => {
  const [user, token] = useAuth();
  const [newRecipe, setNewRecipe] = useState([])

  let navigate = useNavigate();

  async function addNewRecipe(newRecipe){
    let response = await axios.post('http://127.0.0.1:8000/api/recipe/user/', newRecipe, {
      headers: {
        Authorization: "Bearer " + token,
    },
    })
    setNewRecipe(response.data)
    if(response.status === 201){
      navigate(`/edit/${response.data.id}`);
  }
    
  }

  
  return (
    <div>
      <RecipeForm addNewRecipe={addNewRecipe}/>

    </div>
  );
};

export default AddRecipePage;