import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DisplayCollectionRecipes from "../../components/DisplayCollectionRecipes/DisplayCollectionRecipes";
import EditCollectionWindow from "../../components/EditCollectionWindow/EditCollectionWindow";

const CollectionPage = () => {
    const [collectionData, setCollectionData] = useState([])
    let collectionId = useParams().id

    useEffect(() => {
        getCollectionDetails(collectionId);
      }, [])

    async function getCollectionDetails(id){
        let response = await axios.get(`http://127.0.0.1:8000/api/collection/details/${id}/`, {
        })
        setCollectionData(response.data[0])
    }    
    
    return ( 
        <div>
            
            <h2>{collectionData.name}</h2>
            <EditCollectionWindow collectionData={collectionData}/>
            <DisplayCollectionRecipes />

        </div>
     );
}
 
export default CollectionPage;