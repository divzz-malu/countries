import React, { useContext, useState } from "react";
import SearchBar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useTheme } from "../hooks/useTheme";

const Home = () => {
    const [isDark, setIsDark] = useTheme();
    const [query, setQuery] = useState("");
    // const windowSize = useWindowSize()
    return (
        <main className={`${isDark ? "dark" : ""}`}>
            <div className="search-filter-container">
                <SearchBar setQuery={setQuery} />
                <SelectMenu setQuery={setQuery} />
            </div>
            {/*  <h1>{windowSize.width} X {windowSize.height}</h1> */}
            <CountriesList query={query} />
        </main>
    );
};

export default Home;
