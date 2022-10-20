import { useState, useEffect } from "react";
import axios from 'axios';

const SearchPage = (props) => {
    // const [allRecipes, setAllRecipes] = useState([])
    const [searchResults, setSearchResults] = useState([])

    let searchTerm = props.data.data
    let allRecipes = props.data.allRecipes

    console.log(allRecipes)
    console.log(searchTerm)

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
        </div>
     );
}
 
export default SearchPage;