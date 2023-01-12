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
        setData(response)
    };

    return ( 
        <div>
            <SearchBar submittedSearchTerm={passedSearchTerm}/>
            <SearchResults data={data}/>
        </div>
     );
}
 
export default SearchPage;