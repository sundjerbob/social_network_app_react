// MainPage.tsx

import React, {useEffect, useState} from "react";
import ItemGrid from "../../components/grid_layout/ItemGrid";
import SearchBar from "./search/SearchBar";
import ReactiveButton1 from "./reactive_buttons/ReactiveButton1";
import ReactiveButton2 from "./reactive_buttons/ReactiveButton2";
import ReactiveButton3 from "./reactive_buttons/ReactiveButton3";
import ReactiveButton4 from "./reactive_buttons/ReactiveButton4";
import LavaLamp from "./lava_lamp/LavaLamp";
import "./style/MainPage.css";

interface MainPageProps {
    // Define props here
}

const MainPage: React.FC<MainPageProps> = () => {

    const [isRendered, setIsRendered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLavaLampOn, lavaLampOn] = useState(false);

    useEffect(() => {

        const handleScroll = async () => {
            const scrollY = window.scrollY;
            const scrollThreshold = 150;

            if (scrollY > scrollThreshold) {


                setIsScrolled(true);

            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        setTimeout(() => {

            setIsRendered(true);
        }, 150);


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
    }, [document.onload]);

    setTimeout(() => {
        lavaLampOn(true);
    }, 1750);


    return (

        <div>
            <div className="background"></div>

            <header>
            </header>

            <main>

                <div id="up" className={isRendered ? '' : ' hidden '}/>
                <div id="down" className={isRendered ? '' : ' hidden '}/>

                {isLavaLampOn && <LavaLamp/>}
                <ReactiveButton1 icon="src/assets/evaluating.png" text="Create a Marketing Page" isScrolled={isScrolled}/>
                <ReactiveButton2 icon="src/assets/time-management.png" text="book stuf" isScrolled={isScrolled}/>
                <ReactiveButton3 icon="src/assets/filter.png" text="explore" isScrolled={isScrolled}/>
                <ReactiveButton4 icon="src/assets/timetable.png" text="xxxxx" isScrolled={isScrolled}/>
                <SearchBar isScrolled={isScrolled}/>

                <ItemGrid isScrolled={isScrolled}/>

            </main>

            <footer>
                <p> 2023 MAJERS Limited LLC &copy;</p>
                <p>Contact us: <a href="mailto:contact@example.com">example@gmail.com</a></p>
            </footer>
        </div>
    );
};


export default MainPage;
