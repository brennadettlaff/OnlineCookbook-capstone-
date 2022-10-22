import React, { useState } from "react";

const AddCollection = () => {
    const [add, setAdd] = useState(true);
    return ( 
        <div>
            {add ? (
            <button onClick={() => setAdd(!add)}>Add Collection</button>
          ) : (
            <button onClick={() => setAdd(!add)}>Cancel</button>
          )}
        </div>
     );
}
 
export default AddCollection;