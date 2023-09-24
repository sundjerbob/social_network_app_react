import React from "react";
import ItemGrid from "../grid_layout/ItemGrid";
import SearchBar from "../search/SearchBar";
import LeftMenu from "../main_menu/LeftMenu";
interface MainPageProps {
    //Define props here
}

const MainPage: React.FC<MainPageProps> = () => {
    return(

        <div className="main-page">
            <LeftMenu />
            <div className="content">
                <SearchBar />
                <main>
                    <ItemGrid />
                    {/* Add other content here */}
                </main>
            </div>
        </div>
    )
}

export default MainPage;
