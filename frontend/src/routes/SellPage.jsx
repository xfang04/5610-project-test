import React from "react";
import AddMovie from "../components/sell/AddMovie";
import SellSideBar from "../components/sell/SellSideBar";

const SellPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      <SellSideBar />
      <AddMovie />
    </div>
  );
};

export default SellPage;
