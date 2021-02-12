import { computeHeadingLevel } from "@testing-library/react";
import React from "react"
import Typed from "react-typed";
function Header() {
    return (
        <div className = "header-wrapper">
            <div className ="main-info">
                <h1>Thanks for the visit.</h1>
                <Typed
                    className="typed-text"
                    strings ={["This is Abhijit Utkarsh.","I am a passionate coder.","I used to do development, in most of my spare time.","I love to explore and learn new technologies.","Tolle Sachen noch zu kommen"]}
                    typeSpeed={50}
                    backspeed={60}
                    loop
               />
               {/* <a href= "#" className= "btn-main-offer">THANK YOU</a> */}
                </div>        

        </div>
    )
}

export default Header
