import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState('');
    let navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        props.submittedSearchTerm(searchInput)
        navigate('/search')
    };

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for Recipes</label>
                <input onChange={(event)=>setSearchInput(event.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;