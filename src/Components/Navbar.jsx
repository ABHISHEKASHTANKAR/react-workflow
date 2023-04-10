import React from 'react'
import './Navbar.css';

const Navbar = (props) => {
  return (
    <div className = "navbar">
        <div className="logo">
            {props.isModulePage ? "Workflow" : "Workflows"}
        </div>
        <div className="module-name" style = {{display : props.isModulePage ? "block" : "none"}}>
            name : {props.name}
        </div>
    </div>
  )
}

export default Navbar