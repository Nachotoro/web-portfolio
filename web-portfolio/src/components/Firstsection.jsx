import React from "react";
import ContactMe from "./ContactMe";
import Marquee from "./Marquee"
import NavBar from "./Navbar"
import '../styles/first-section.css'

function FirstSection(){
    return(
        <>
        <div className="container">
            <NavBar/>
            <div className="line"></div>
            <div className="line-white"></div>
            <img className="lotus" src="./src/assets/Secuencia 01.gif"/>
            <div className="gif">
                <img src="./src/assets/Secuencia 01_1.gif" alt="GIF description" />
            </div>
            <div className="web-title">
                <img src="./src/assets/triangle.png"></img>
                <h1>Hi, this is <br></br> Ignacio Toro's <br></br> portfolio</h1>
            </div>
            <h2>Designer & Web developer <br/> Based in Santiago, Chile</h2>
            <ContactMe/>
        </div>
        <Marquee/>
        </>
    )
}

export default FirstSection;