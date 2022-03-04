import React from 'react'
import "./section.css";
import Bottle from "../images/bottle.png";
import Cap from "../images/cap.png"
const Section = () => {
    return (
        <div className='section'>
            <div className='image'>
                <img className='cap' src = {Cap} alt="" />
                <img clasName = "bottle" src={Bottle} alt="" />
            </div>
            <div className='text'>
                <h2>LARQ Bottle PureVis</h2>
                <h4>Brilliantly clean water</h4>
                <p>Neutralizes up to 99%* of bacteria such as E.coli using PureVis technology. Learn more.
                </p>
                <h4>Self-cleaning & worry-free</h4>
                <p>Intelligently activates every 2 hours to keep your water and bottle stink-free.
                </p>
            </div>
        </div>
    )
}

export default Section