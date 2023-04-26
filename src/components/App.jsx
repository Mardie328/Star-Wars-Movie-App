import React from "react";
import "./App.css";
import Logo from "./Logo";
import AllMovieCards from "./AllMovieCards";
//import MovieCard from "./MovieCard";

const App = () => {
  return (
    <div className="main-container">
      <Logo />
      <AllMovieCards />
      {/* <MovieCard /> */}
    </div>
  );
};

export default App;
