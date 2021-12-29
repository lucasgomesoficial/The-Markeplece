import React from "react";
import "./header.css"
import Fundo from "../../Fundo-verde";
import img from "../../assets/dan-gold-4_jhDO54BYg-unsplash 1.png"


  const Header = () => {
        return (
    <>
        <div className="Header">
            <img src={img}></img>
            <div className="Header-Principal">
                <h1>The Markeplece</h1>
               
            </div>
        </div>
        <div className="Header-Meio">
            <h1>Buy Your FOOD</h1>
            <p>Buy your family food with us</p>
        </div>
        <div className="Header-Abaixo">
        </div>
    </>
    )
}

export default Header;