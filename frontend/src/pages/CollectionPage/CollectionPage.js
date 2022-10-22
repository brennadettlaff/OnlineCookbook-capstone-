import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
    const [recipes, setRecipes] = useState([])
    let collectionId = useParams().id

    useEffect(() => {
        getRecipes(collectionId);
      }, [])

    async function getRecipes(id){
        let response = await axios.get(`http://127.0.0.1:8000/api/recipe_collection/collection/${id}/`, {
        })
        setRecipes(response.data)
        console.log(response.data)
    }
    return ( 
        <div>

        </div>
     );
}
 
export default CollectionPage;