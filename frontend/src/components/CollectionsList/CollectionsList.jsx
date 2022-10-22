import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CollectionsList = () => {
    const [collections, setCollections] = useState([])
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
        console.log(response.data)
    }

    return ( 
        <div>
            <>Test</>
        </div>
     );
}
 
export default CollectionsList;