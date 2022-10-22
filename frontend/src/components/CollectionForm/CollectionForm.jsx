import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CollectionForm = () => {
    const [user, token] = useAuth();
    const [id] = useState(0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(){
        const newFavorite = {
            id: id,
            name: name,
            description: description,
        };
        addNewFavorite(newFavorite)
    }

    async function addNewFavorite(newEntry){
        let response = await axios.post('http://127.0.0.1:8000/api/collection/', newEntry, {
          headers: {
            Authorization: "Bearer " + token,
        },
        })
        window.location.reload();
    }

    return ( 
        <div>
            <h2>New Collection</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
                    <label>Description:</label>
                    <input type='text' value={description} onChange={(event) => setDescription(event.target.value)}></input>
                    <button type='submit'>Add</button>
                </form>
        </div>
     );
}
 
export default CollectionForm;