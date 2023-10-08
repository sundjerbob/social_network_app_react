// MainPage.tsx

import React, {useEffect, useState} from "react";
import ItemGrid from "../grid_layout/ItemGrid";
import SearchBar from "../search/SearchBar";
import ReactiveButton1 from "./reactive_buttons/ReactiveButton1";
import ReactiveButton2 from "./reactive_buttons/ReactiveButton2";
import ReactiveButton3 from "./reactive_buttons/ReactiveButton3";
import ReactiveButton4 from "./reactive_buttons/ReactiveButton4";
import BlobSVG from "./blob_animation/LavaLamp";
import HeroSection from "./hero_section/HeroSection"
import "./MainPage.css";

interface MainPageProps {
    // Define props here
}

const MainPage: React.FC<MainPageProps> = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isRendered] =  useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollThreshold = 150;


            if (scrollY > scrollThreshold) {

                document.querySelectorAll('.menu-item').forEach(
                    menuItem => {
                        if(menuItem) {
                            (menuItem as HTMLElement).style.transitionDelay = '0s';
                        }
                    }
                );

                setIsScrolled(true);

            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        /*
        const intersectionObserver: IntersectionObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('enter-view');
                    }

                })
            })

        document.querySelectorAll('.menu-item').forEach(element => {
            element.classList.add('hidden')
            intersectionObserver.observe(element);
        });
        */

        return () => {
            window.removeEventListener("scroll", handleScroll);
            //intersectionObserver.disconnect();
        };
    }, []);

    return (

        <div>
            <div className="background"></div>

            <header>
                <HeroSection/>
            </header>

            <main>

                <div id="up"/>
                <div id="down"/>

                <ReactiveButton1 icon="src/assets/evaluating.png" text="Create a Marketing Page" isScrolled={isScrolled} />
                <ReactiveButton2 icon="src/assets/time-management.png" text="I Luksuz" isScrolled={isScrolled}/>
                <ReactiveButton3 icon="src/assets/filter.png" text="STa ti treba" isScrolled={isScrolled}/>
                <ReactiveButton4 icon="src/assets/timetable.png" text="Kaazi  " isScrolled={isScrolled}/>
                <SearchBar isScrolled={isScrolled}/>

                <ItemGrid isScrolled={isScrolled}/>

                <BlobSVG/>
            </main>

            <footer>
                <p> 2023 George Dragash LLC &copy;</p>
                <p>Contact us: <a href="mailto:contact@example.com">lil_nigas@gmail.com</a></p>
            </footer>
        </div>
    );
};

export default MainPage;
