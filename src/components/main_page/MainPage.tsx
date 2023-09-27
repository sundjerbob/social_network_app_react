import React, { useEffect, useState } from "react";
import ItemGrid from "../grid_layout/ItemGrid";
import SearchBar from "../search/SearchBar";
import ReactiveButton1 from "../reactive_buttons/ReactiveButton1"; // Import the MenuItem component
import ReactiveButton2 from "../reactive_buttons/ReactiveButton2";
import ReactiveButton3 from "../reactive_buttons/ReactiveButton3";
import ReactiveButton4 from "../reactive_buttons/ReactiveButton4";
import LandingInfo from "../landing_info/LandingInfo";

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
                <ReactiveButton1 icon="" text="Belo kes i" isScrolled={isScrolled} />
                <ReactiveButton2 icon="" text="I Luksuz" isScrolled={isScrolled} />
                <ReactiveButton3 icon="" text="STa ti treba" isScrolled={isScrolled} />
                <ReactiveButton4 icon="" text="Kaazi  " isScrolled={isScrolled} />

                <SearchBar isScrolled={isScrolled} />

                <LandingInfo isScrolled={isScrolled}/>
                <main>
                    <ItemGrid isScrolled={isScrolled}/>
                    {/* Add other content here */}
                </main>
            </div>
            {/* Add the MenuItem component and pass isScrolled as a prop */}
        </div>
    );
};

export default MainPage;
