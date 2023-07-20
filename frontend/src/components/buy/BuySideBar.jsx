import React from "react";
import { Layout, Menu } from "antd";
import Search from "antd/es/input/Search";
import SideBar from "../shared/SideBar";

const { Content } = Layout;

const MenuItem = [
  {
    label: "All",
  },
  {
    label: "Books",
  },
];

const BuySidebar = () => {
  return (
    <SideBar>
      <Search
        placeholder="Search for items"
        allowClear
        enterButton="Search"
        size="large"
        style={{ width: 220 }}
      />
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
          items={MenuItem}
        ></Menu>
      </Content>
    </SideBar>
  );
};

export default BuySidebar;
