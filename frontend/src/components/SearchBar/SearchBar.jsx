import React, {useState} from 'react';


const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');


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