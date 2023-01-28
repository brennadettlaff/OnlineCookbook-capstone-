import React from "react";
import AddCollection from "../../components/AddCollection/AddCollection";
import CollectionsList from "../../components/CollectionsList/CollectionsList";

const CollectionsPage = () => {
    return ( 
        <div>
            <CollectionsList />
            <AddCollection />
        </div>
     );
}
 
export default CollectionsPage;