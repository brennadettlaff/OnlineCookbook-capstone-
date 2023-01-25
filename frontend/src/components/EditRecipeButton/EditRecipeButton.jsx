import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const EditRecipeButton = (props) => {
    const [user] = useAuth();
    let pageId = useParams().id
    let navigate = useNavigate();

    return ( 
        <div>
          {props.userId == user.id &&
            <button onClick={() => navigate(`/edit/${pageId}`)}>Edit Recipe</button>
           }
        </div>
     );
}
 
export default EditRecipeButton;