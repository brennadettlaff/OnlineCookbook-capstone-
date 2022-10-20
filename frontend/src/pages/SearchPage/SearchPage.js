import { useState, useEffect } from "react";
import axios from 'axios';

const SearchPage = (props) => {
    const [allRecipes, setAllRecipes] = useState([])
    const [searchResults, setSearchResults] = useState([])

    let searchTerm = props.data

    useEffect(() => {
        getAllRecipes();
    }, [searchTerm]);

    async function getAllRecipes(){
        let response = await axios.get('http://127.0.0.1:8000/api/recipe/')
        setAllRecipes(response.data)
        if(response.status === 200){
            filterRecipes(searchTerm);
        }
        
    }

    function filterRecipes(search){
        let filteredResults = allRecipes.filter((recipe)=>{
            if(recipe.name.includes(search)){
                return true
            }
        })
        setSearchResults(filteredResults)
        // debugger
        console.log(filteredResults)
    }

    return ( 
        <div>
            {console.log("Filtered Results:", searchResults)}
            <>test</>
            {searchResults.map((entry, index) =>{
                return(
                    <div key={index}>
                        <h3>{entry.name}</h3>
                        <div>{entry.description} </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default SearchPage;