import React from "react";
import "./Header.css"

import img from "../../assets/dan-gold-4_jhDO54BYg-unsplash 1.png"
import Button from "../Button";


  const Header = () => {
        return (
    <>
        <div className="Header">
            
            <div className="Header-Principal">
                <div className="Flex1">
                    <h1>The Markeplece</h1>
                </div>
               <div className="Header-Principal-Button Flex3">
                    <Button />
                    <Button />
                    <Button />
               </div>
            </div>
        
        
        
        <div className="Header-Meio">
            <h1>Buy Your FOOD</h1>
            <p>Buy your family food with us</p>
        </div>
        <div className="Header-Abaixo">
            <div className="Flex1">
            </div>
        <div className="Header-Principal-Button Flex3">
                    <Button>It is already our customer?</Button>
                    <Button>teste</Button>
                    <Button />
               </div>
        </div>
        
        </div>
    </>
    )
}

export default Header;