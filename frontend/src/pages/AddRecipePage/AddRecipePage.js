import AddRecipe from "../../components/AddRecipe/AddRecipe";
import useAuth from "../../hooks/useAuth";


const AddRecipePage = () => {
  const [user, token] = useAuth();


  return (
    <div>
        <AddRecipe />

    </div>
  );
};

export default AddRecipePage;