import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const EditCollection = () => {
    const [toggle, setToggle] = useState(true);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [user] = useAuth()

    function handleSubmit(event){
        event.preventDefault();
        const newCollectionInfo = {
            name: name,
            description: description,
            user: user,
        };
        console.log(newCollectionInfo)
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
                        <label>Name</label>
                        <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
                        <button type='submit'>Submit</button>
                    </form>
                    <form onSubmit={handleSubmit}>
                        <label>Description</label>
                        <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
                        <button type='submit'>Submit</button>
                    </form>
                    <button onClick={() => setToggle(!toggle)}>Save</button>
                </div>
            )}
        </div>
     );
}
 
export default EditCollection;