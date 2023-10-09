// ReactiveButton1.tsx

import React, {useEffect, useState} from "react";
import "./style/ReactiveButton.css";
import "./style/ReactiveButton1.css";


interface ReactiveButton1Props {
    icon: string; // Icon URL or class
    text: string; // Menu item text
    isScrolled: boolean; // Prop to indicate scroll state
}

const ReactiveButton1: React.FC<ReactiveButton1Props> = ({icon, text, isScrolled}) => {

    const [isRendered, setIsRendered] = useState(false);

    useEffect(
        () => {

            const element = document.querySelector('.item1') as HTMLElement;

            if (element) {
                if (!isRendered) {
                    element.style.transitionDelay = '0.2s';
                    setTimeout(() => {
                        setIsRendered(true);
                    }, 100);
                }

            }

        }, [isScrolled]
    );

    const scrollStateClass = isScrolled ? ' scrolled ' : '';
    const renderedStateClass = isRendered ? '' : ' hidden ';


    return (
        <div className={scrollStateClass + renderedStateClass + 'menu-item item1'}>
            <img src={icon} alt="Menu Icon" className="menu-icon"/>
            <span className="menu-text">{text}</span>
        </div>
    );
};

export default ReactiveButton1;
