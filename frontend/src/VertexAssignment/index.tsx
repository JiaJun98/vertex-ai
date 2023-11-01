import React from "react";
import './index.module.css';
import FileUpload from './components/FileUpload';

function VertexAssignment() {
  return (
    <div style={{display: "flex", flexDirection: "column", height:"100vh"}}>
      <Header/>
      <div 
          style={{
                  display: 'grid',
                  justifyContent: 'center',
                  placeItems: 'center', 
                  height: '100vh',
                  fontSize: '20px'
                  }}>
          Upload filesss to check their similarity
          <FileUpload/>
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
      Vertex Assignment
      </div>
}

export default VertexAssignment;
