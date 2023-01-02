import useAuth from "../../hooks/useAuth";
import axios from "axios";

const ToggleFavorite = (props) => {
    let recipe_id = props.favoriteData.recipe.id
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
        changeFavorite(newFavorite)
    }

    async function changeFavorite(newFav){
        let response = await axios.put(`http://127.0.0.1:8000/api/favorite/delete/${id}/`, newFav, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        console.log(response)
        }

    return ( 
        <div>
            <button onClick={handleSubmit}>Favorite</button>
        </div>
     );
}
 
export default ToggleFavorite;