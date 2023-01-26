import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import EditCollection from "../EditCollection/EditCollection";

const CollectionsList = () => {
    const [collections, setCollections] = useState([])
    const [user, token] = useAuth();
    let navigate = useNavigate();


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
            <h1>{user.username}'s Collections</h1>
            {collections.map((entry, index) => {
                return(
                    <div key={index}>
                        <h2 onClick={() => navigate(`/collection/${entry.id}`)}>{entry.name}</h2>
                        <div>{entry.description}</div>
                        <EditCollection />
                    </div>
                )
            })}
        </div>
     );
}
 
export default CollectionsList;