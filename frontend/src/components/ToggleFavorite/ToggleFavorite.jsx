import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const ToggleFavorite = (props) => {

    // console.log(props.favoriteData.recipe)
    let recipe_id = props.favoriteData.recipe
    let id = props.favoriteData.id
    const [user, token] = useAuth();
    
    useEffect(() => {
        handleSubmit()
    })

    function handleSubmit(){
        // event.preventDefault();
        const newFavorite = {
            id: id,
            user: user,
            recipe: recipe_id,
            recipe_id: recipe_id,
            fav_toggle: true,
        };
        console.log(newFavorite)
        // editRecipe(newRecipe)
    }


    return ( 

        
        <div>
            <p>Test</p>
        </div>
     );
}
 
export default ToggleFavorite;