import GetFavorite from "../GetFavorite/GetFavorite"
import AddFavorite from "../AddFavorite/AddFavorite"
import { useState } from "react"

const ToggleFavorite = () => {
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
                <p>Like exists</p>
            }
        </div>
     );
}
 
export default ToggleFavorite;