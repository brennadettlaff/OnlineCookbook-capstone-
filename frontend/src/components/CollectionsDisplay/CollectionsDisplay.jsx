import { useNavigate } from 'react-router-dom';

const CollectionsDisplay = (props) => {
    let navigate = useNavigate();

    return ( 
        <div>
            {props.collections.map((entry, index) => {
                return(
                    <div key={index}>
                        <h2 onClick={() => navigate(`/collection/${entry.id}`)}>{entry.name}</h2>
                        <div>{entry.description}</div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default CollectionsDisplay;