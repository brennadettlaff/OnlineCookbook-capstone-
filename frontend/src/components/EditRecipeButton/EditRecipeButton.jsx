import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const EditRecipeButton = () => {
    let pageId = useParams().id
    let navigate = useNavigate();
    return ( 
        <div>
          <button onClick={() => navigate(`/recipe/${pageId}`)}>Edit Recipe</button>


        </div>
     );
}
 
export default EditRecipeButton;