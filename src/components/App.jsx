import React from "react";
import "./App.css";
import Logo from "./Logo";
import AllMovieCards from "./AllMovieCards";

const App = () => {
  return (
    <div className="main-container">
      <Logo />
      <AllMovieCards />
    </div>
  );
};

export default App;
