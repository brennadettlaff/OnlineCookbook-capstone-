import GetFavorite from "../GetFavorite/GetFavorite"

const ToggleFavorite = () => {

    function checkFavorites(fav_data){
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
        }}

    return ( 
        <div>
            <GetFavorite checkFavorites={checkFavorites}/>
        </div>
     );
}
 
export default ToggleFavorite;