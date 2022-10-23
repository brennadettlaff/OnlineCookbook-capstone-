import useAuth from "../../hooks/useAuth";
import UserRecipes from "../../components/UserRecipes/UserRecipes";
import { useNavigate } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {
  const [user] = useAuth();

  let navigate = useNavigate();

  return (
    <div className="add-spacing">
      <h1 className="add-spacing">Welcome {user.first_name}</h1>
      <button onClick={() => navigate('/addrecipe/')}>Add Recipe</button>
      <div className="display-recipes">
        <h2>Recipes:</h2>
      </div>
      <UserRecipes />

    </div>
  );
};

export default HomePage;
