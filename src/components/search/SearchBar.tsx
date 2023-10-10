import React, {useEffect, useState} from "react";
import "./style/SearchBar.css";

interface SearchBarProps {
    isScrolled: boolean; // Prop to indicate scroll state
}

const SearchBar: React.FC<SearchBarProps> = ({isScrolled}) => {

    {

        const [isRendered, setIsRendered] = useState(false);

        useEffect(
            () => {

                const element = document.querySelector('.search-bar') as HTMLElement;

                if (element) {
                    if (!isRendered) {
                        element.style.transitionDelay = '1s';
                        setTimeout(() => {
                            setIsRendered(true);
                        }, 10);
                    }
                    if (isScrolled && isRendered && getComputedStyle(element).transitionDelay !== '0s') {
                        element.style.transitionDelay = '0s';
                    }
                }

            }, [isScrolled]
        );

        const renderedStateClass = isRendered ? '' : ' hidden ';


        return (
            <div className={renderedStateClass + `search-bar ' ${isScrolled ? 'scrolled' : ''}`}>
                <input type="text" placeholder="Search..."/>
                <button type="submit" className="search-button">
                    Search
                </button>
            </div>
        );
    }
};

export default SearchBar;
