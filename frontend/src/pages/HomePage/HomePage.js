import React from "react";
import useAuth from "../../hooks/useAuth";
import DisplayRecipe from "../../components/DisplayRecipe/DisplayRecipe";
import Ingredients from "../../components/Ingredients/Ingredients";


const HomePage = () => {
  const [user] = useAuth();

  return (
    <div>
      <div>Welcome {user.first_name}</div>
      {/* <DisplayRecipe /> */}
      <Ingredients />
    </div>
  );
};

export default HomePage;
