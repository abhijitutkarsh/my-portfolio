import React from "react"
import Typed from "react-typed";
function Header() {
    return (
        <div className = "header-wrapper">
            <div className ="main-info">
                <h1>Web develpment and website promotion</h1>
                <Typed
                    className="typed-text"
                    strings ={["This is Abhijit Utkarsh","I love to do coding","In my spare time, I used to do development","I love to explore new technologies"]}
                    typeSpeed={50}
                    backspeed={60}
                    loop
               />
               <a href= "#" className= "btn-main-offer">Contact Me</a>
                </div>        

        </div>
    )
}

export default Header
