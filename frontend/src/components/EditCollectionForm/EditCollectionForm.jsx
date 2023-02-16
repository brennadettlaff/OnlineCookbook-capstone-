import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const EditCollection = (props) => {
    const [name, setName] = useState(props.collectionInfo.name)
    const [description, setDescription] = useState(props.collectionInfo.description)
    const [user, token] = useAuth()
    console.log("here", props.collectionInfo)

    function handleSubmit(event){
        event.preventDefault();
        const newCollectionInfo = {
            name: name,
            description: description,
            user: user,
        };
        console.log(newCollectionInfo)
        editCollection(newCollectionInfo)
    }

    async function editCollection(newCollectionData){
        let response = await axios.put(`http://127.0.0.1:8000/api/collection/edit/${props.collectionInfo.id}/`, newCollectionData, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        console.log(response)
        }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input 
                        type='text' value={name}  
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input type='text' value={description} onChange={(event) => setDescription(event.target.value)}></input>
                </div>
                {/* <button type='submit'>Submit</button> */}
            </form>
        </div>
     );
}
 
export default EditCollection;