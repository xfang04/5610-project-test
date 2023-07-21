import React from "react";
import { Layout } from "antd";
import AddMovie from "../components/sell/AddMovie";
import SellSideBar from "../components/sell/SellSideBar";

const SellPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SellSideBar />
      <Layout>
        <AddMovie />
      </Layout>
    </Layout>
  );
};

export default SellPage;
