import { useState, useEffect } from "react";
import axios from 'axios';

const SearchPage = (props) => {
    const [allRecipes, setAllRecipes] = useState([])
    console.log(props.data)

    useEffect(() => {
        getAllRecipes();
    }, []);

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