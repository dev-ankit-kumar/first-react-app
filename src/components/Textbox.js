import React, { useState } from "react";



export default function Textbox(props) {
  const Upclick = () => {
    let newtext=text.toUpperCase();
    setText(newtext);
    props.setalert(
      "changed to uppercase");
      setTimeout(
        ()=>{
          props.setalert(null)
        },2000
      );
  };

  const Lowclick = () => {
    let newtext=text.toLowerCase();
    setText(newtext);
    props.setalert(
      "changed to lower case"
    );
    setTimeout(
      ()=>{
        props.setalert(null)
      },2000
    );
  };

  const clear = () => {
    let newtext='';
    setText(newtext);
    props.setalert(
      "All clear"
    );

    setTimeout(
      ()=>{
        props.setalert(null)
      },2000
    );
  };
  const copyclip = () => {
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.setalert(
      "your text is copied to clipboard"
    );
    setTimeout(
      ()=>{
        props.setalert(null)
      },2000
    );
  };

  const remove = () => {
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.setalert(
      "All extra space removed"
    );
    setTimeout(
      ()=>{
        props.setalert(null)
      },2000
    );
  };

  



  const HandleOnChange = (event) => {
setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text");


     
//   const[mystyle,setmystyle]=useState({
//     color:'black',
//     backgroundColor:'white'
// })

// const[btntext,setbtntext]=useState(
//     "Enable dark mode"
// )





let darkmode={
  color:'white',
  backgroundColor:'rgb(5, 5, 76)',
  
 }
let darkmode2={
  color:'white',
  backgroundColor:'rgb(4, 2, 47)'
 }
 let lightmode={
  color:'black',
  backgroundColor:'white'
 }


//  const togglemode=()=>{
//   if(props.mode==='light'){
//     props.setmode('darkmode')
//     // setbtntext("Enable light mode")
//   }
//   else{
//     props.setmode('light')
//     // setbtntext("Enable dark mode")
//   }
// }

  return (
    <>
    <div style={props.mode==='light'?lightmode:darkmode} >
      <div  className='mycontainer ' >
        <h1>Enter the text to analyze</h1>
        {/* <label for="exampleFormControlTextarea1" className="form-label my-3">
          {props.heading}
        </label> */}
        <textarea
          style={props.mode==='light'?lightmode:darkmode2}
          className="textarea1"
          id="exampleFormControlTextarea1"
          rows="10" value={text} onChange={HandleOnChange}
          
        ></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={Upclick}>
        Change to upper case
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={Lowclick}>
        Change to lower case
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={clear}>
        Clear text!
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={copyclip}>
        copy
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={remove}>
        remove extra space
      </button>
     
      </div>
      
    </div>
    <div className="mycontainer"style={props.mode==='light'?lightmode:darkmode}>
      <h1>Text Summary</h1>
      <p>your content has {text.split(" ").length} words 📝 !</p>
      <p>your content has {text.length} characters ✏️!</p>
      <h2>Here is a preview:-</h2>
      <p  className="summary">{text}</p>
      
    </div>
    
    </>
  );
}
