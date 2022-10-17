import useAuth from "../../hooks/useAuth";
import UserRecipes from "../../components/UserRecipes/UserRecipes";


const HomePage = () => {
  const [user] = useAuth();


  return (
    <div>
      <h1>Welcome {user.first_name}</h1>
      <h2>Recipes:</h2>
      <UserRecipes />

    </div>
  );
};

export default HomePage;
