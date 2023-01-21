import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const EditRecipeButton = (props) => {
    let pageId = useParams().id
    let navigate = useNavigate();
    console.log("props", props.owner)

    return ( 
        <div>
          {props.owner == true &&
            <button onClick={() => navigate(`/edit/${pageId}`)}>Edit Recipe</button>
          }
          {/* <button onClick={() => navigate(`/edit/${pageId}`)}>Edit Recipe</button> */}
        </div>
     );
}
 
export default EditRecipeButton;