import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './SearchBar.css';


const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState('');
    let navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        props.submittedSearchTerm(searchInput)
        console.log("Search input", searchInput)
        navigate('/search')
    };

    return ( 
        <div className='align-bar'>
            <form onSubmit={handleSubmit} className='form-style'>
                <label className='add-space'>Search for Recipes</label>
                <input onChange={(event)=>setSearchInput(event.target.value)}/>
                <button className='button' type='submit'>Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;