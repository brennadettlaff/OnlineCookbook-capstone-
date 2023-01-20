import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SearchResults = (props) => {
    const [searchResults, setSearchResults] = useState([])
    const [totalRecipes, setTotalRecipes] = useState([])

        let searchTerm = props.data
        
        let navigate = useNavigate();

        useEffect(() =>{
            getAllRecipes()
        }, [searchTerm])

        async function getAllRecipes(){
            let response = await axios.get('http://127.0.0.1:8000/api/recipe/')
            setTotalRecipes(response.data)
            filterRecipes(searchTerm)
        }

        function filterRecipes(search){
            let filteredResults = totalRecipes.filter((recipe)=>{
                let searchInput = search.toLowerCase()
                if(recipe.name.toLowerCase().includes(searchInput) || recipe.description.toLowerCase().includes(searchInput)){
                    return true
                }
            })
            setSearchResults(filteredResults)
        }
        
    return ( 
        <div>
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