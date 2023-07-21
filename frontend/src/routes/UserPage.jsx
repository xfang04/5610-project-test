import React from "react";
import UserSideBar from "../components/user/UserSideBar";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Orders from "../components/user/Orders";
import Profile from "../components/user/Profile";
import EditProfile from "../components/user/EditProfile";
import Favorites from "../components/user/Favorites";
const UserPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <UserSideBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default UserPage;
