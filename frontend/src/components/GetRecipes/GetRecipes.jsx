const GetRecipes = () => {
    const [allRecipes, setAllRecipes] = useState([])
    
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
    return ( 
        <div>
            {allRecipes}
        </div>
     );
}
 
export default GetRecipes;