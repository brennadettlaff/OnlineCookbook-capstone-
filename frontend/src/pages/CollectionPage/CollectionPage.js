import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import DisplayCollectionRecipes from "../../components/DisplayCollectionRecipes/DisplayCollectionRecipes";

const CollectionPage = () => {
    const [collection, setCollection] = useState([])
    let collectionId = useParams().id
    let navigate = useNavigate();

    useEffect(() => {
        getCollection(collectionId);
      }, [])

    async function getCollection(id){
        let response = await axios.get(`http://127.0.0.1:8000/api/recipe_collection/collection/${id}/`, {
        })
        setCollection(response.data)
    }
    
    return ( 
        <div>
            <DisplayCollectionRecipes />
            {collection.map((entry, index) => {
                return(
                    <div key={index}>
                        <h3 onClick={() => navigate(`/recipe/${entry.recipe.id}`)}>{entry.recipe.name}</h3>
                        <div>{entry.recipe.description}</div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default CollectionPage;