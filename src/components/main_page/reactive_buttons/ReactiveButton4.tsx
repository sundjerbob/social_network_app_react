// ReactiveButton4.txs

import React, {useEffect, useState} from "react";
import "./style/ReactiveButton.css";
import "./style/ReactiveButton4.css";


interface ReactiveButton4Props {
    icon: string; // Icon URL or class
    text: string; // Menu item text
    isScrolled: boolean; // Prop to indicate scroll state
}

const ReactiveButton4: React.FC<ReactiveButton4Props> = ({icon, text, isScrolled}) => {

    const [isRendered, setRendered] = useState(false);

    useEffect(
        () => {

            const element = document.querySelector('.item4') as HTMLElement;

            if (element) {
                if (!isRendered) {
                    element.style.transitionDelay = '0.8s';
                    setTimeout(() => {
                        setRendered(true);
                    }, 50);
                }

            }

        }, [isScrolled]
    );

    const scrollStateClass = isScrolled ? ' scrolled ' : '';
    const renderedStateClass = isRendered ? '' : ' hidden ';


    return (
        <div className={scrollStateClass + renderedStateClass + 'menu-item item4'}>
            <img src={icon} alt="Menu Icon" className="menu-icon"/>
            <span className="menu-text">{text}</span>
        </div>
    );
};

export default ReactiveButton4;
