//import React, {useState, useEffect} from 'react'
import SideMenu from './components/SideMenu';
import './App.css';

function App() {

  /*
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
  */
  return (
    <div style={{display: "flex", flexDirection: "column", flex: 1, height:"100vh"}}>
      <Header/>
      <div style={{display: "flex", flexDirection: "row", flex: 10}}>
        <SideMenu/>
      </div>
     <Footer/>
    </div> //TODO: Pending formating of API display <p>The current time is {currentTime}.</p> 
  );
}

function Header(){ // Testing
  return <div style = {{
    height:50, 
    backgroundColor: "#cdd1e4", //Can change using HEX
    color: "black", 
    fontFamily: "Open Sans",
    fontSize: '25px',
    display:"flex", 
    justifyContent: 'center', 
    alignItems: "center",
    fontWeight :"bold"}}>
      Vertex Assignment
      </div>
}

function Footer(){ //Testing
  return <div style = {{
    height:50, 
    backgroundColor: "#cdd1e4", //Can change using HEX
    color: "black", 
    fontFamily: "Open Sans",
    fontSize: '25px',
    display:"flex", 
    justifyContent: 'center', 
    alignItems: "center",
    fontWeight :"bold"}}>
      This is the end of the page
      </div>
}

export default App;
