// Item.tsx
import React from 'react';
import './style/Item.css'
interface ItemProps {
    label: string; // Prop for the label at the top
    imageSrc: string; // Prop for the image source
    icons: string[]; // Prop for small icons at the bottom
}

const Item: React.FC<ItemProps> = ({ label, imageSrc, icons }) => {
    return (
        <div className="rectangle-item" >
            <img src={imageSrc} alt={label} /> {/* Image in the middle */}
            <h4>{label}</h4> {/* Heading label at the top */}

            <div className="icons">
                {icons.map((icon, index) => (
                    <span key={index}>{icon}</span> // Small icons at the bottom
                ))}
            </div>
        </div>
    );
};

export default Item;
