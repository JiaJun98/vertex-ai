import React, {useState, useEffect} from 'react'
import "./App.css";
import SideMenu from './components/SideMenu';

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

export default App