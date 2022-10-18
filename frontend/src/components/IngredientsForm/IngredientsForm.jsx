import React, {useState} from "react";

const IngredientsForm = (props) => {
    const [id] = useState(0);
    const [name, setName] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        const newIngredient = {
            id: id,
            name: name,
        };
        props.addNewIngredient(newIngredient)
    }


    return ( 
        <div>
            <h1>Ingredients</h1>
            <form onSubmit={handleSubmit}>
                <label>Add:</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
                <button type='submit'>Add Ingredient</button>
            </form>
        </div>
     );
}
 
export default IngredientsForm;