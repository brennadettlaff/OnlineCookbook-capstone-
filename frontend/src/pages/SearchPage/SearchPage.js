import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import SearchResults from "../../components/SearchResults/SearchResults";

const SearchPage = () => {
    // const [searchResults, setSearchResults] = useState([])

    // let searchTerm = props.data.data
    // let allRecipes = props.data.allRecipes
    // let navigate = useNavigate();

    // useEffect(() =>{
    //     filterRecipes(searchTerm)
    // }, [searchTerm])

    // function filterRecipes(search){
    //     let filteredResults = allRecipes.filter((recipe)=>{
    //         if(recipe.name.includes(search)){
    //             return true
    //         }
    //     })
    //     setSearchResults(filteredResults)
    // }



    const [data, setData] = useState('');
    const [totalRecipes, setTotalRecipes] = useState([])

    useEffect(() => {
        passedSearchTerm();
        getAllRecipes();
    }, [])

    function passedSearchTerm(search_term){
        let response = search_term 
        console.log("response", response)
        setData(response)
        console.log("Data", data)
    };

    async function getAllRecipes(){
        let response = await axios.get('http://127.0.0.1:8000/api/recipe/')
        console.log(response)
        setTotalRecipes(response.data)
    }

    const passedInfo = {
        data: data, 
        totalRecipes: totalRecipes
        
    }
        console.log(passedInfo)
    return ( 
        <div>
            <SearchBar submittedSearchTerm={passedSearchTerm}/>
            <SearchResults data={passedInfo}/>
            <div>
                {/* {console.log("Filtered Results:", searchResults)}
                <h1>Results</h1>
                {searchResults.map((entry, index) =>{
                    return(
                        <div key={index}>
                            <h3 onClick={() => navigate(`/recipe/${entry.id}`)}>{entry.name}</h3>
                            <div>{entry.description} </div>
                        </div>
                    )
                })} */}
            </div>
        </div>
     );
}
 
export default SearchPage;