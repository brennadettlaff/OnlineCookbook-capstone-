import GetFavorite from "../GetFavorite/GetFavorite"
import AddFavorite from "../AddFavorite/AddFavorite"
import { useState } from "react"

const ToggleFavorite = () => {
    const [favs, setFavs] = useState([])
    const [hold, setHold] = useState([])

    function checkFavorites(fav_data){
        setFavs(fav_data)
        setHold(fav_data[0])

        console.log("This:", fav_data)
        console.log(fav_data.length)
        if(fav_data.length == 0) {
            console.log("like doesn't exists")
        }
        else {
            console.log('like exists') 
            console.log(fav_data[0].fav_toggle)
            if(fav_data[0].fav_toggle == false) {
                console.log("recipe is not liked")
            }
            else {
                console.log("recipe is liked")
            }
        }
        console.log("Hold", hold)
    }

    return ( 
        <div>
            <GetFavorite checkFavorites={checkFavorites}/>
            {favs.length == 0 &&
                <AddFavorite />
            }
            {favs.length == 1 &&
                <p>Like exists</p>
            }
        </div>
     );
}
 
export default ToggleFavorite;