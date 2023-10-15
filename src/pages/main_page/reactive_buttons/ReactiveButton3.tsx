// ReactiveButton3.tsx

import React, {useEffect, useState} from "react";
import "./style/ReactiveButton.css";
import "./style/ReactiveButton3.css";


interface ReactiveButton3Props {
    icon: string; // Icon URL or class
    text: string; // Menu item text
    isScrolled: boolean; // Prop to indicate scroll state
}

const ReactiveButton3: React.FC<ReactiveButton3Props> = ({icon, text, isScrolled}) => {

    const [isRendered, setRendered] = useState(false);

    useEffect(
        () => {


            if (!isRendered) {
                setTimeout(() => {
                    setRendered(true);
                }, 200);


            }

        }, [isScrolled]
    );

    const scrollStateClass = isScrolled ? ' scrolled ' : '';
    const renderedStateClass = isRendered ? '' : ' hidden ';


    return (
        <div className={scrollStateClass + renderedStateClass + 'menu-item item3'}>
            <img src={icon} alt="Menu Icon" className="menu-icon"/>
            <span className="menu-text">{text}</span>
        </div>
    );
};

export default ReactiveButton3;
