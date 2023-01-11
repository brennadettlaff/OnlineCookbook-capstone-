import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const SearchResults = (props) => {
    const [searchResults, setSearchResults] = useState([])

        let searchTerm = props.data.data
        let allRecipes = props.data.allRecipes
        let navigate = useNavigate();

        useEffect(() =>{
            filterRecipes(searchTerm)
        }, [searchTerm])

        function filterRecipes(search){
            let filteredResults = allRecipes.filter((recipe)=>{
                if(recipe.name.includes(search)){
                    return true
                }
            })
            setSearchResults(filteredResults)
        }
        
    return ( 
        <div>
            {console.log("Filtered Results:", searchResults)}
            <h1>Results</h1>
            {searchResults.map((entry, index) =>{
                return(
                    <div key={index}>
                        <h3 onClick={() => navigate(`/recipe/${entry.id}`)}>{entry.name}</h3>
                        <div>{entry.description} </div>
                    </div>
                )
            })}
        </div>
    );
}
 
export default SearchResults;