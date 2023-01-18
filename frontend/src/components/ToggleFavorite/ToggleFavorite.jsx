import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useState } from "react";

const ToggleFavorite = (props) => {
    let recipe_id = props.favoriteData.recipe.id
    let id = props.favoriteData.id
    let favoriteStatus = props.favoriteData.fav_toggle

    const [user, token] = useAuth();
    const [toggle, setToggle] = useState(favoriteStatus)

    function handleSubmit(){
        const newFavorite = {
            id: id,
            user: user,
            recipe: recipe_id,
            recipe_id: recipe_id,
            fav_toggle: !favoriteStatus,
        };
        console.log(newFavorite)
        changeFavorite(newFavorite)
    }

    async function changeFavorite(newFav){
        let response = await axios.put(`http://127.0.0.1:8000/api/favorite/delete/${id}/`, newFav, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        window.location.reload()
        }

    return ( 
        <div>
            <div>
                {favoriteStatus === false &&
                <button onClick={handleSubmit}>Favorite</button>
                }
            </div>
            <div>
                {favoriteStatus === true &&
                <button onClick={handleSubmit}>Unfavorite</button>
                }
            </div>
            
        </div>
     );
}
 
export default ToggleFavorite;