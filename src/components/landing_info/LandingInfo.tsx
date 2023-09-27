// LandingInfo.txt

import React from "react";
import './LandingInfo.css'

interface LandingInfoProps {
    isScrolled: boolean;
}

const LandingInfo: React.FC<LandingInfoProps> = ({ isScrolled }) => {
    return(
        <div className={`landing-info ${isScrolled ? ' scrolled ' : ''}`}>
        </div>
    );
};

export default LandingInfo;
