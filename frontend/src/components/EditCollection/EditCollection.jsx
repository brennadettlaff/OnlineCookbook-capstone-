import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const EditCollection = () => {
    const [toggle, setToggle] = useState(true);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [user, token] = useAuth()
    
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

    async function editCollection(collectionData){
        let response = await axios.put(`http://127.0.0.1:8000/api/collection/edit/1/`, collectionData, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        console.log(response)
        }

    return ( 
        <div>
            {toggle ? (
                <div>
                     <button onClick={()=> setToggle(!toggle)}>Edit</button>
                </div>
            ):(
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input type='text' value={name}  onChange={(event) => setName(event.target.value)}></input>
                        </div>
                        <div>
                            <label>Description</label>
                            <input type='text' value={description} onChange={(event) => setDescription(event.target.value)}></input>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                    <button onClick={() => setToggle(!toggle)}>Save</button>
                </div>
            )}
        </div>
     );
}
 
export default EditCollection;