import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const ToggleFavorite = (props) => {
    let recipe_id = props.favoriteData.id
    let id = props.favoriteData.id
    const [user, token] = useAuth();


    function handleSubmit(){
        const newFavorite = {
            id: id,
            user: user,
            recipe: recipe_id,
            recipe_id: recipe_id,
            fav_toggle: true,
        };
        console.log(newFavorite)
    }



    return ( 
        <div>
            <button onClick={handleSubmit}>Favorite</button>
        </div>
     );
}
 
export default ToggleFavorite;