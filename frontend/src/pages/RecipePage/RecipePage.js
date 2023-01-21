import React from "react";
import DisplayRecipe from "../../components/DisplayRecipe/DisplayRecipe";
import Notes from "../../components/Notes/Notes";
import AddToCollection from "../../components/AddToCollection/AddToCollection";
import EditRecipeButton from "../../components/EditRecipeButton/EditRecipeButton";
import Ingredients from "../../components/Ingredients/Ingredients";
import { useParams } from "react-router-dom";
import './RecipePage.css'
import HandleFavorite from "../../components/HandleFavorite/HandleFavorite";

import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const RecipePage = () => {

  const [recipe, setRecipe] = useState([]);
  const [user] = useAuth();
  const [owner, setOwner] = useState()

  console.log(user.id)

  let recipeId = useParams().id

  useEffect(() => {
    getRecipe();
  }, [])

  async function getRecipe(){
    let response = await axios.get(`http://127.0.0.1:8000/api/recipe/details/${recipeId}/`)
    setRecipe(response.data)
    console.log("User Data", response.data[0].user.id)
    showEditButton(); 
  }

  function showEditButton(){
    if(user.id == recipe[0].user.id){
      setOwner(true)
      console.log("working")
    } else {setOwner(false)} 
    console.log(owner)
  }

  return (
    <div className="add-space">
      <div className="page-buttons"><HandleFavorite /></div>
      {/* {owner == true &&
        <div className="page-buttons"> <EditRecipeButton /> </div>
      } */}
      <div className="page-buttons"> <EditRecipeButton owner={owner}/> </div>
      
 
      <DisplayRecipe />
      
      <div className="ingred"> 
        <h2>Ingredients</h2>
        <Ingredients recipeId={recipeId}/>
      </div>
      
      <div className="ingred">
        <h2>Notes</h2>
        <Notes />
      </div>
      <div > <AddToCollection /> </div>
      

    </div>
  );
};

export default RecipePage;