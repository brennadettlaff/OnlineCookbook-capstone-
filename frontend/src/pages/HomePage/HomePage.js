import React from "react";
import useAuth from "../../hooks/useAuth";
import DisplayRecipe from "../../components/DisplayRecipe/DisplayRecipe";


const HomePage = () => {
  const [user, token] = useAuth();

  return (
    <div>
      <div>Welcome {user.first_name}</div>
      <DisplayRecipe />
    </div>
  );
};

export default HomePage;
