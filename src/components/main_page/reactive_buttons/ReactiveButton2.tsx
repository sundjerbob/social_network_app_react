// ReactiveButton2.tsx

import React, {useEffect, useState} from "react";
import "./style/ReactiveButton.css";
import "./style/ReactiveButton2.css";


interface ReactiveButton2Props {
    icon: string; // Icon URL or class
    text: string; // Menu item text
    isScrolled: boolean; // Prop to indicate scroll state
}

const ReactiveButton2: React.FC<ReactiveButton2Props> = ({icon, text, isScrolled}) => {

    const [isRendered, setIsRendered] = useState(false);

    useEffect(
        () => {

            const element = document.querySelector('.item2') as HTMLElement;

            if (element) {
                if (!isRendered) {
                    element.style.transitionDelay = '0.4s';
                    setIsRendered(true);
                }

            }

        }, [isScrolled]
    );

    const scrollStateClass = isScrolled ? ' scrolled ' : '';
    const renderedStateClass = isRendered ? '' : ' hidden ';


    return (
        <div className={scrollStateClass + renderedStateClass + 'menu-item item2'}>
            <img src={icon} alt="Menu Icon" className="menu-icon"/>
            <span className="menu-text">{text}</span>
        </div>
    );
};

export default ReactiveButton2;
