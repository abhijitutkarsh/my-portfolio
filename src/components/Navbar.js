import React from "react";
//REACT FONTFONTSOME IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from "@fortawesome/free-solid-svg-icons" 
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
        <a className="navbar-brand" href="#"><img className = "logo" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Portfolio.hu_full_logo.png"alt="logo"/></a>
          
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">About me</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">How work</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Me</a>
            </li>
            
          </ul>
         
        </div>
        </div>
      </nav>
    )
}

export default Navbar
