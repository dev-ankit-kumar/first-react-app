
import './App.css';
import About from './components/About';

import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import react,{useState} from 'react';
import Alert from './components/Alert';



function App() {
  
  const[mode,setmode]=useState("light")
  const[alert,setalert]=useState(null)
  console.log("hello",alert)

  return (
  <div>
  <Navbar tittle="TextEditor"  setalert={setalert} abouttext="About us" mode={mode} setmode={setmode} />
{ alert && <Alert alert={alert}  />}
  <Textbox heading="Enter the text" setalert={setalert} mode={mode} setmode={setmode}/>
  {/* <About mode={mode} setmode={setmode}/> */}
  
  </div>
  );
}

export default App;
