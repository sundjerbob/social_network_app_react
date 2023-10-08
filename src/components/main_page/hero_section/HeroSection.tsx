// HeroSection.tsx

import React from "react";
import './style/HeroSection.css'

const HeroSection: React.FC = () => {

    return (
        <div className="hero-section">
            <h2>Find service to fit your need</h2>
            <h2 className="effect" onClick={()=>{alert('...')}}>
                Find service to fit your need</h2>
        </div>
    )
}

export default HeroSection;