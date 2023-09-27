import React, { useState } from "react";
import "./index.css";
import { HomeOutlined, InfoOutlined, CheckOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "/home",
    icon: <HomeOutlined />
  },
  {
    label: "About",
    key: "about",
    icon: <InfoOutlined />
  },
  {
    label: "CheckSum",
    key: "checksum",
    icon: <CheckOutlined />
  }
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default App;