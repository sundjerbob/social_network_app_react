import React from "react";
import "./ReactiveButton.css";

interface ReactiveButtonProps {
    icon: string; // Icon URL or class
    text: string; // Menu item text
    isScrolled: boolean; // Prop to indicate scroll state
}

const ReactiveButton: React.FC<ReactiveButtonProps> = ({ icon, text, isScrolled }) => {
    // Determine the class based on the scroll state
    const menuItemClass = isScrolled ? "menu-item scrolled" : "menu-item";

    return (
        <div className={menuItemClass}>
            <img src={icon} alt="Menu Icon" className="menu-icon" />
            <span className="menu-text">{text}</span>
        </div>
    );
};

export default ReactiveButton;
