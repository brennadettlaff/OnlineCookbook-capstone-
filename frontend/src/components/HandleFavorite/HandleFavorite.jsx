import GetFavorite from "../GetFavorite/GetFavorite"
import AddFavorite from "../AddFavorite/AddFavorite"
import ToggleFavorite from "../ToggleFavorite/ToggleFavorite"
import { useState } from "react"

const HandleFavorite = () => {
    const [favoriteData, setFavoriteData] = useState([])

    function passedFavorites(fav_data){
        setFavoriteData(fav_data)
    }

    return ( 
        <div>
            <GetFavorite checkFavorites={passedFavorites}/>
            {favoriteData.length == 0 &&
                <AddFavorite />
            }
            {favoriteData.length == 1 &&
                <ToggleFavorite favoriteData={favoriteData[0]}/>
            }
        </div>
     );
}
 
export default HandleFavorite;