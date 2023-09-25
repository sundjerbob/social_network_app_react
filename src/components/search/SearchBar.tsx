import React from "react";
import "./SearchBar.css";

interface SearchBarProps {
    isScrolled: boolean; // Prop to indicate scroll state
}

const SearchBar: React.FC<SearchBarProps> = ({ isScrolled }) => {
    return (
        <div className={`search-bar ${isScrolled ? "scrolled" : ""}`}>
            <input type="text" placeholder="Search..." />
            <button type="submit" className="search-button">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
