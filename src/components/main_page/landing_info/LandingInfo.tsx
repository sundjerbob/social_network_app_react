// LandingInfo.txt

import React from "react";
import './blob1.css'
import './blob2.css'
import './blob3.css'
import './blob4.css'
interface LandingInfoProps {
    isScrolled: boolean;
}

const LandingInfo: React.FC<LandingInfoProps> = ({ isScrolled }) => {
    return(
        <>

            <div className={`blob-1 ${isScrolled ? ' scrolled ' : ''}`}/>
            <div className={`blob-2 ${isScrolled ? ' scrolled ' : ''}`}/>
            <div className={`blob-3 ${isScrolled ? ' scrolled ' : ''}`}/>
            <div className={`blob-4 ${isScrolled ? ' scrolled ' : ''}`}/>
        </>

    );
};

export default LandingInfo;
