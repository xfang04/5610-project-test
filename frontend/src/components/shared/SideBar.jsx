import React from "react";

import { Layout } from "antd";

const { Sider } = Layout;

const SideBar = (props) => {
  let { children } = props;
  return (
    <Sider
      width={250}
      className="site-layout-background"
      style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}
    >
      {children}
    </Sider>
  );
};

export default SideBar;
