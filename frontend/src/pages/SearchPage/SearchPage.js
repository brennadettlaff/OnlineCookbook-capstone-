import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";

const SearchPage = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        passedSearchTerm();
    }, [])

    function passedSearchTerm(search_term){
        let response = search_term 
        console.log("Search Term", response)
        setData(response)
    };

    return ( 
        <div>
            <h1>Search for Recipes</h1>
            <SearchBar submittedSearchTerm={passedSearchTerm}/>
            <SearchResults data={data}/>
        </div>
     );
}
 
export default SearchPage;