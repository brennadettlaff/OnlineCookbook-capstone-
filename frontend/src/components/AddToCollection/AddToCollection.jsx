import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AddToCollection = () => {
    const [collections, setCollections] = useState([])
    const [add, setAdd] = useState(true);
    const [user, token] = useAuth();
   

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
                <button onClick={() => setAdd(!add)}>Add Collection</button>
          ) : (
            <div>
                {collections.map((entry, index) => {
                    return(
                        <div key={index}>
                            <div>{entry.name}</div>
                            <button>Add</button>
                        </div>
                    )
                })}


                <button onClick={() => setAdd(!add)}>Cancel</button>

            </div>
          )}
        </div>
     );
}
 
export default AddToCollection;