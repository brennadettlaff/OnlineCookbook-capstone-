import React from "react";
import useAuth from "../../hooks/useAuth";


const HomePage = () => {
  const [user] = useAuth();

  return (
    <div>
      <div>Welcome {user.first_name}</div>

    </div>
  );
};

export default HomePage;
