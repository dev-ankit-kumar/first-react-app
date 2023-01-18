
import './App.css';
import About from './components/About';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React,{useState} from 'react';
import Alert from './components/Alert';



function App() {
  
  const[mode,setmode]=useState("light")
  const[alert,setalert]=useState(null)
  // console.log("hello",alert)

  return (
    
  <div>
    <BrowserRouter>
  <Navbar tittle="TextEditor"  setalert={setalert} abouttext="About us" mode={mode} setmode={setmode} />
{ alert && <Alert alert={alert}  />}

      <Routes>  

    <Route path="/About" element={<About mode={mode} setmode={setmode}/> 
}/>
    <Route path="/" element={ <Textbox heading="Enter the text" setalert={setalert} mode={mode} setmode={setmode}/> }/>
    
      </Routes>
      </BrowserRouter>
  </div>
  
  );
}

export default App;
