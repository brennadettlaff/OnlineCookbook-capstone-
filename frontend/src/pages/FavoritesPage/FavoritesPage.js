import React from "react";
import DisplayFavorites from "../../components/DisplayFavorites/DisplayFavorites";
import './FavoritesPage.css'

const FavoritesPage = () => {
    return ( 
        <div>
            <div className="title-style"><h1>Favorites</h1></div>
            <div className="favs-style"><DisplayFavorites /></div>
            
        </div>
     );
}
 
export default FavoritesPage;