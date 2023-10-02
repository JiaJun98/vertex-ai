import React , { useState } from 'react'
import {Menu, MenuProps, Layout} from 'antd';
import {Route, Routes,useNavigate} from "react-router-dom";
import { HomeOutlined, InfoOutlined, CheckOutlined } from "@ant-design/icons";
import FileUpload from './FileUpload';

const SideMenu =() =>{
  const { Sider } = Layout;
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('Home', "/", <HomeOutlined />),
    getItem('About', "/about", <InfoOutlined />),
    getItem('Checksum', "/checking", <CheckOutlined />),
  
  ];
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" 
        defaultSelectedKeys={['1']} 
        mode="inline" 
        onClick = {({key}) =>{navigate(key)}} 
        items={items} />
      </Sider>
      <Layout>
        <Contents/>
      </Layout>
    </Layout>
  );
}

function Contents(){
    return <div style={{display: 'grid',
    justifyContent: 'center',
    placeItems: 'center', 
    height: '60vh',
    fontSize: '20px'
    }}>
      <Routes>
        <Route path = "/" element={<div>Home</div>}></Route>
        <Route path = "/about" element={<div>About</div>}></Route>
        <Route path = "/checking" element=
        {<div 
          style={{display: 'grid',
                  justifyContent: 'center',
                  placeItems: 'center', 
                  height: '60vh',
                  fontSize: '20px'
                  }}>
          Upload files to check their similarity
          <FileUpload/>
        </div>}></Route> 
      </Routes>
    </div> 
  }

export default SideMenu;