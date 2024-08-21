import React, { useEffect, useState } from "react";
// import CountriesData from "../CountriesData";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";

const CountriesList = ({ query }) => {
    const [countriesData, setCountriesData] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountriesData(data));
    }, []);
    return (
      <>
        {!countriesData.length ? <CountryListShimmer /> :<div className="countries-container">
            {countriesData
                .filter((country) =>
                    country.name.common.toLocaleLowerCase().includes(query) || country.region.toLocaleLowerCase().includes(query)
                )
                .map((country, index) => (
                    <CountryCard
                        key={index}
                        flag={country.flags.svg}
                        name={country.name.common}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        data={country}
                    />
                ))}
        </div>}
        </>
    );
};

export default CountriesList;
