import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import BuySideBar from "../components/buy/BuySideBar";
import MoviesList from "../components/buy/MovieList";
import Movie from "../components/buy/Movie";

const BuyPage = () => {
  return (
    <Layout>
      <BuySideBar />
      <Layout>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/search/:keyword" element={<MoviesList />} />
          <Route path="/:id" element={<Movie />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default BuyPage;
