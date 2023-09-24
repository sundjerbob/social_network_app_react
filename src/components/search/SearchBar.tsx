import React, { useEffect, useState } from 'react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Determine if the user has scrolled down a certain distance (e.g., 100 pixels)
            const scrollY = window.scrollY;
            const scrollThreshold = 100;

            if (scrollY > scrollThreshold) {
                // User has scrolled down, apply styles for animation
                setIsScrolled(true);
            } else {
                // User is at the top, reset styles
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`search-bar ${isScrolled ? 'scrolled' : ''}`}
        >
            <input type="text" placeholder="Search..." />
            <button type="submit" className="search-button">Search</button>
            {/* Add the "search-button" class to the button */}
        </div>
    );
};

export default SearchBar;
