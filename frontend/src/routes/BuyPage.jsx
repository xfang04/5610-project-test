import React from "react";
import { Routes, Route } from "react-router-dom";
import BuySideBar from "../components/buy/BuySideBar";
import MoviesList from "../components/buy/MovieList";
import Movie from "../components/buy/Movie";

const BuyPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      <BuySideBar />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </div>
  );
};

export default BuyPage;
