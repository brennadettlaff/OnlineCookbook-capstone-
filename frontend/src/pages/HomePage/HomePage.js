import useAuth from "../../hooks/useAuth";
import UserRecipes from "../../components/UserRecipes/UserRecipes";


const HomePage = () => {
  const [user] = useAuth();


  return (
    <div>
      <div>Welcome {user.first_name}</div>
      <UserRecipes />

    </div>
  );
};

export default HomePage;
