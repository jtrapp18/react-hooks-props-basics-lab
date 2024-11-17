import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const { name, city, bio, color } = user

  return (
    <div>
      <NavBar />
      <Home 
        name={name}
        color={color}
        city={city}
      />
      <About
        bio={bio}
        links ={user.links}
      />
    </div>
  );
}

export default App;
