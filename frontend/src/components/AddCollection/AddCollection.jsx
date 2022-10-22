import React, { useState } from "react";
import CollectionForm from "../CollectionForm/CollectionForm";

const AddCollection = () => {
    const [add, setAdd] = useState(true);
    return ( 
        <div>
            {add ? (
            <button onClick={() => setAdd(!add)}>Add Collection</button>
          ) : (
            <>
            <CollectionForm />
            <button onClick={() => setAdd(!add)}>Cancel</button>
            </>
          )}
        </div>
     );
}
 
export default AddCollection;