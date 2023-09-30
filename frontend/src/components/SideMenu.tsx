import React from 'react'
import { Menu, ConfigProvider, theme} from 'antd';
import {Route, Routes,useNavigate} from "react-router-dom";
import { HomeOutlined, InfoOutlined, CheckOutlined } from "@ant-design/icons";
import FileUpload from './FileUpload';

const SideMenu =() =>{
    const navigate = useNavigate()
    return (
        <div style={{ display: 'flex', flexDirection:"row"}}>
     <ConfigProvider theme={{ 
        algorithm: theme.darkAlgorithm,
        components: {
            Menu: {
              colorPrimary: '#33FFF5',
              controlHeight: 50,
              fontFamily: "Roboto",
              fontSize: 20, 
              colorBgContainer: '#abb7b7'
            }}
        }}>

      <Menu
      style = {{fontSize: '20px'}}
      onClick = {({key}) =>{navigate(key)}} 
      defaultSelectedKeys={[window.location.pathname]}
      items= {
        [{label: 'Home', key:"/", icon : <HomeOutlined/>}, 
        {label: 'About', key:"/about", icon : <InfoOutlined/>}, //Temporary use as home page; change to moving centre later
        {label: 'Checksum', key:"/checking", icon: <CheckOutlined/>}]} //Temporary use as home page; change to moving centre later
        > 
      </Menu>
      </ConfigProvider>
      <div>
        <Content/>
      </div>
    </div>

    )
}

function Content(){
    return <div>
      <Routes>
        <Route path = "/" element={<div>Home</div>}></Route>
        <Route path = "/about" element={<div>About</div>}></Route>
        <Route path = "/checking" element=
        {<div 
          style={{display: 'grid',
                  justifyContent: 'center',
                  placeItems: 'center', 
                  height: '60vh'
                  }}>
          Upload your file here to test if they are identical
          <FileUpload/>
        </div>}></Route> 
      </Routes>
    </div> //Becareful of checksum might re-direct to wrong page for checksum
  }

export default SideMenu;