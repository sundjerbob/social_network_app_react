// src/components/ItemGrid.tsx
import React from 'react';
import './ItemGrid.css';
import Item from '../items/Item';
import cacaj from '../../assets/CACAJ.jpg'
const ItemGrid: React.FC = () => {
    // Define the common image URL
    const commonImageSrc =  cacaj;// Replace with the actual common image URL

    // Generate an array of data (10 items) with the same image URL
    const gridData = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        label: `Product ${index + 1}`,
        imageSrc: commonImageSrc, // Use the common image URL for all items
        icons: [`icon${index + 1}_1`, `icon${index + 1}_2`, `icon${index + 1}_3`],
    }));

    return (
        <div className="item-grid">
            {gridData.map((itemData) => (
                <Item
                    key={itemData.id}
                    label={itemData.label}
                    imageSrc={itemData.imageSrc}
                    icons={itemData.icons}
                />
            ))}
        </div>
    );
};

export default ItemGrid;
