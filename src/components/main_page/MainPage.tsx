import React, { useEffect, useState } from "react";
import ItemGrid from "../grid_layout/ItemGrid";
import SearchBar from "../search/SearchBar";
import ReactiveButton from "../reactive_buttons/ReactiveButton"; // Import the MenuItem component

interface MainPageProps {
    // Define props here
}

const MainPage: React.FC<MainPageProps> = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Add a scroll event listener to detect scrolling
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

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="main-page">
            <div className="content">
                {/* Pass the isScrolled state as a prop */}
                <SearchBar isScrolled={isScrolled} />
                <main>
                    <ItemGrid />
                    {/* Add other content here */}
                </main>
            </div>
            {/* Add the MenuItem component and pass isScrolled as a prop */}
            <ReactiveButton icon="icon.png" text="Menu Item" isScrolled={isScrolled} />
        </div>
    );
};

export default MainPage;
