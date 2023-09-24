// MenuItem.tsx
import React, { ReactNode } from 'react';

interface MenuItemProps {
    children: ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ children }) => {
    return (
        <div className="menu-item">
            {children}
        </div>
    );
};

export default MenuItem;
