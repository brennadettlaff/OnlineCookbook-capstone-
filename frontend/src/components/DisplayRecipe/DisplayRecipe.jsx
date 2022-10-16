import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";


const DisplayRecipe = () => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getRecipe();
  }, [])

  async function getRecipe(){
    let response = await axios.get('http://127.0.0.1:8000/api/recipe/details/2/')
    console.log(response.data)
    setRecipe(response.data)
  }

    return ( 
        <div>
          <h1>test</h1>
        </div>
     );
}
 
export default DisplayRecipe;


// const Disp = () => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const getRecipe = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setCars(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchCars();
//   }, [token]);
//   return (
//     <div className="container">
//       <h1>Home Page for {user.username}!</h1>
//       {cars &&
//         cars.map((car) => (
//           <p key={car.id}>
//             {car.year} {car.model} {car.make}
//           </p>
//         ))}
//     </div>
//   );
// };

// export default HomePage;
