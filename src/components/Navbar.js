import React,{useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {


  const[btntext,setbtntext]=useState(
    "Enable dark mode"
)

let darkmode={
  color:'white',
  backgroundColor:'black'
 }
 let lightmode={
  color:'black',
  backgroundColor:'white'
 }

 const[tittlecolor,settittlecolor]=useState({
  color:'black'
})


const[menucolor,setmenucolor]=useState({

})





const togglemode=()=>{
  if(props.mode==='light'){
    props.setmode('darkmode')
    setbtntext("Enable light mode")
    settittlecolor({
      color:'white'
    })
    setmenucolor({
      backgroundColor:'white',
      color:'black',
     
    })

    props.setalert(
      "dark mode enabled ");
      setTimeout(
        ()=>{
          props.setalert(null)
        },2000
      );
    
  }
  else{
    props.setmode('light')
    setbtntext("Enable dark mode")
    settittlecolor({
      color:'black'
    })

    props.setalert(
      "light mode enabled ");
      setTimeout(
        ()=>{
          props.setalert(null)
        },2000
      );
   
  }
}
  return (
    <nav className="navbar " style={props.mode==='light'? lightmode : darkmode}>
      
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={tittlecolor}>
          {props.tittle}
        </Link>
        {/* <button className="btn btn-primary my-3" onClick={togglemode}>{btntext}</button> */}

        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={togglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
</div>

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent"  style={menucolor}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-Link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/About">
                {props.abouttext}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
      
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { tittle: PropTypes.string.isRequired, abouttext: PropTypes.string.isRequired };

// navbar.defaultProps={
//     tittle:'Set tittle',
//     abouttext:'about text is here'
// }
