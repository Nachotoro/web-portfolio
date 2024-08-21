import React from "react";
import ContactMe from "./ContactMe";
import Marquee from "./Marquee"
import '../styles/first-section.css'

function FirstSection(){
    return(
        <>
        <div className="container">
            <div className="line"></div>
            <img className="lotus" src="./src/assets/Secuencia 01.gif"/>
            <div className="gif"/>
            <div className="web-title">
                <h1>Hi, this is Ignacio Toro's portfolio</h1>
            </div>
            <h2>Designer & Web developer <br/> Based in Santiago, Chile</h2>
            <ContactMe/>
        </div>
        <Marquee/>
        </>
    )
}

export default FirstSection;