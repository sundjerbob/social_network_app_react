// LeftMenu.tsx
import React from 'react';
import MenuItem from '../menu_item/MenuItem';
import './LeftMenu.css'
const LeftMenu: React.FC = () => {
    return (
        <aside className="left-menu">
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            {/* Add more menu items as needed */}
        </aside>
    );
};

export default LeftMenu;
