import React, { useState } from "react";
const EditCollection = () => {
    const [toggle, setToggle] = useState(true);
    const [name, setName] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        const newCollection = {
            name: name,
        };
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
                        <label></label>
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