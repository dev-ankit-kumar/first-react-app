
import './App.css';
import About from './components/About';

import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import react,{useState} from 'react';



function App() {

  const[mode,setmode]=useState("light")




  return (
  <div>
  <Navbar tittle="TextEditor" abouttext="About us" mode={mode} setmode={setmode} />

  <Textbox heading="Enter the text"  mode={mode} setmode={setmode}/>
  {/* <About mode={mode} setmode={setmode}/> */}
    
  </div>
  );
}

export default App;
