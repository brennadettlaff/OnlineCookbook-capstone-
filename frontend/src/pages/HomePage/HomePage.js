import useAuth from "../../hooks/useAuth";
import UserRecipes from "../../components/UserRecipes/UserRecipes";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const [user] = useAuth();

  let navigate = useNavigate();

  return (
    <div>
      <h1>Welcome {user.first_name}</h1>
      <button onClick={() => navigate('/addrecipe/')}>Add Recipe</button>
      <button onClick={() => navigate('/favorites/')}>See Favorites</button>
      <h2>Recipes:</h2>
      <UserRecipes />

    </div>
  );
};

export default HomePage;
