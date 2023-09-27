import React from "react";
import "./ReactiveButton.css";
import "./ReactiveButton2.css";


interface ReactiveButton2Props {
    icon: string; // Icon URL or class
    text: string; // Menu item text
    isScrolled: boolean; // Prop to indicate scroll state
}

const ReactiveButton2: React.FC<ReactiveButton2Props> = ({ icon, text, isScrolled }) => {
    // Determine the class based on the scroll state
    const menuItemClass = isScrolled? ' scrolled ' : '';

    return (
        <div className={menuItemClass + 'menu-item item2'}>
            <img src={icon} alt="Menu Icon" className="menu-icon" />
            <span className="menu-text">{text}</span>
        </div>
    );
};

export default ReactiveButton2;
