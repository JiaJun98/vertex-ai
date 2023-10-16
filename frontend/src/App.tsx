import FileUpload from './components/FileUpload';
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
      <div 
          style={{flex: 1,
                  display: 'grid',
                  justifyContent: 'center',
                  placeItems: 'center', 
                  height: '60vh',
                  fontSize: '20px'
                  }}>
          Upload files to check their similarity
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

export default App;
