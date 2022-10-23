import React from "react";
const EditIngredientForm = (props) => {
    console.log("here", props.data)
    return ( 
        <div>
            <h3>{props.data.name}</h3>
            <button>Edit</button>
        </div>
     );
}
 
export default EditIngredientForm;