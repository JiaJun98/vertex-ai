import React, {useState, useEffect} from 'react'
import "./App.css";
import { Menu } from 'antd';
import {Route, Routes, useNavigate} from "react-router-dom";
import { HomeOutlined, InfoOutlined, CheckOutlined } from "@ant-design/icons";
//import "antd/dist/antd.css"

function App() {
  
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div style={{display: "flex", flexDirection: "column", flex: 1, height:"100vh"}}>
      <Header/>
      <div style={{display: "flex", flexDirection: "row", flex: 1}}>
        <SideMenu/>
      </div>
     <p>The current time is {currentTime}.</p> 
     <Footer/>
    </div>
        
    
  );
}

function Header(){ // Testing
  return <div style = {{
    height:50, 
    backgroundColor: "lightskyblue", 
    color: "white", 
    display:"flex", 
    justifyContent: 'center', 
    alignItems: "center",
    fontWeight :"bold"}}>
      Header
      </div>
}

function Footer(){ //Testing
  return <div style = {{
    height:50, 
    backgroundColor: "lightgray", 
    color: "black", 
    display:"flex", 
    justifyContent: 'center', 
    alignItems: "center",
    fontWeight :"bold"}}>
      Footer
      </div>
}

function SideMenu(){
  const navigate = useNavigate()
  return <div style={{ display: 'flex', flexDirection:"row"}}>
      <Menu
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
}

function Content(){
  return <div>
    <Routes>
      <Route path = "/" element={<div>Home</div>}></Route>
      <Route path = "/about" element={<div>About</div>}></Route>
      <Route path = "/checksum" element={<div>Checksum</div>}></Route> 
    </Routes>
  </div> //Becareful of checksum might re-direct to wrong page
}


export default App