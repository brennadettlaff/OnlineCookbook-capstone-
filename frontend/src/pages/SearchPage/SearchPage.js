import { useState, useEffect } from "react";
import axios from 'axios';

const SearchPage = () => {
    const [allRecipes, setAllRecipes] = useState([])

    useEffect(() => {
        getAllRecipes();
    })

    async function getAllRecipes(){
        let response = await axios.get('http://127.0.0.1:8000/api/recipe/')
        setAllRecipes(response.data)
        console.log(response.data)
    }

    return ( 
        <div>
            
        </div>
     );
}
 
export default SearchPage;