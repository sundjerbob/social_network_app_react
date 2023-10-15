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

                    if (!isRendered) {
                        setTimeout(() => {
                            setIsRendered(true);
                        }, 200);
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
    }
;

export default SearchBar;
