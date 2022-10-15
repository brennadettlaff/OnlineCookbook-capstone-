import React from "react";
import useAuth from "../../hooks/useAuth";


const HomePage = () => {
  const [user, token] = useAuth();

  return (
      <div>Welcome {user.first_name}</div>
  );
};

export default HomePage;
