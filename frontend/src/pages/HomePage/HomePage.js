import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const HomePage = () => {
  const [user, token] = useAuth();
  const [recipe, setRecipe] = useState([])

  useEffect(()=> {
    getUsersRecipes();
  }, [])

  const getUsersRecipes = async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/recipe/user/', {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    console.log(response.data)
    setRecipe(response.log)
  }

  return (
    <div>
      <div>Welcome {user.first_name}</div>

    </div>
  );
};

export default HomePage;
