import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AddToCollection = () => {
    const [collections, setCollections] = useState([])
    const [add, setAdd] = useState(true);
    const [user, token] = useAuth();
    const [id] = useState(0);

    let recipe_id = useParams().id

    function handleNewJunction(collectionId){
        const newJunction = {
            id: id,
            recipe_id: recipe_id,
            collection_id: collectionId,
        };
        createJunction(newJunction)
    }

    async function createJunction(newEntry){
        let response = await axios.post('http://127.0.0.1:8000/api/recipe_collection/add/', newEntry)
    }

    useEffect(() => {
        getCollections();
      }, [])

    async function getCollections(){
        let response = await axios.get('http://127.0.0.1:8000/api/collection/', {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        setCollections(response.data)
    }

    return ( 
        <div>
            {add ? (
                <button onClick={() => setAdd(!add)}>Add to Collection</button>
          ) : (
            <div>
                {collections.map((entry, index) => {
                    return(
                        <div key={index}>
                            <div>{entry.name}</div>                            
                            <button onClick={() => handleNewJunction(entry.id)}>Add</button>
                        </div>
                    )
                })}


                <button onClick={() => setAdd(!add)}>Done</button>

            </div>
          )}
        </div>
     );
}
 
export default AddToCollection;