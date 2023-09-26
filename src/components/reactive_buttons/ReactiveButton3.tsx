import React from "react";
import "./ReactiveButton.css";
import "./ReactiveButton3.css";


interface ReactiveButton3Props {
    icon: string; // Icon URL or class
    text: string; // Menu item text
    isScrolled: boolean; // Prop to indicate scroll state
}

const ja: number= 2;
const ReactiveButton3: React.FC<ReactiveButton3Props> = ({ icon, text, isScrolled }) => {
    // Determine the class based on the scroll state
    const menuItemClass = isScrolled ? ' scrolled ' : '';

    return (
        <div className={menuItemClass + 'menu-item item3'}>
            <img src={icon} alt="Menu Icon" className="menu-icon" />
            <span className="menu-text">{text}</span>
        </div>
    );
};

export default ReactiveButton3;
