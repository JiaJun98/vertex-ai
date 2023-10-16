import React from 'react'
import { Menu} from 'antd';
import {Route, Routes,useNavigate} from "react-router-dom";
import { HomeOutlined, InfoOutlined, CheckOutlined } from "@ant-design/icons";
import './SideMenu.css';

const SideMenu =() =>{
    const navigate = useNavigate()
    return (
        <div style={{ display: 'flex', flexDirection:"row"}}>
      <Menu
      style = {{fontSize: '18px'}}
      onClick = {({key}) =>{navigate(key)}} 
      defaultSelectedKeys={window.location.pathname}
      items= {
        [{label: 'Home', key:"/", icon : <HomeOutlined/>}, 
        {label: 'About', key:"/about", icon : <InfoOutlined/>}, //Temporary use as home page; change to moving centre later
        {label: 'Checksum', key:"/checksum", icon: <CheckOutlined/>}]} //Temporary use as home page; change to moving centre later
        > 
      </Menu>
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
        <Route path = "/checksum" element={<div>Checksum</div>}></Route> 
      </Routes>
    </div> //Becareful of checksum might re-direct to wrong page for checksum
  }

export default SideMenu;