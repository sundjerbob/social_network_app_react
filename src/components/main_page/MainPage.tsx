// MainPage.tsx

import React, { useEffect, useState } from "react";
import ItemGrid from "../grid_layout/ItemGrid";
import SearchBar from "../search/SearchBar";
import ReactiveButton1 from "../reactive_buttons/ReactiveButton1";
import ReactiveButton2 from "../reactive_buttons/ReactiveButton2";
import ReactiveButton3 from "../reactive_buttons/ReactiveButton3";
import ReactiveButton4 from "../reactive_buttons/ReactiveButton4";
import BlobSVG from "./landing_info/Blob";
import "./MainPage.css";

interface MainPageProps {
    // Define props here
}

const MainPage: React.FC<MainPageProps> = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollThreshold = 100;

            if (scrollY > scrollThreshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <ReactiveButton1 icon="" text="Belo kes i" isScrolled={isScrolled} />
            <ReactiveButton2 icon="" text="I Luksuz" isScrolled={isScrolled} />
            <ReactiveButton3 icon="" text="STa ti treba" isScrolled={isScrolled} />
            <ReactiveButton4 icon="" text="Kaazi  " isScrolled={isScrolled} />
            <SearchBar isScrolled={isScrolled} />

            <ItemGrid isScrolled={isScrolled} />

            {/* Render the PinkBlobSection component */}
            <BlobSVG />
        </div>
    );
};

export default MainPage;
