import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";

const baseUrl = "https://disease.sh/v3/covid-19";
const Home = () => {
    const [val, setVal] = useState("");
    const [continentVal, setContinentVal] = useState("Africa");
    const [continent, setContinent] = useState(false);
    const [countries, setCountries] = useState(false);
    const [usaStates, setUsaStates] = useState(false);
    const [country, setCountry] = useState(false);
    const [url, setUrl] = useState(`${baseUrl}/all`);
  
    const fetchGlobalUpdates = async () => {
      const response = await fetch(`${baseUrl}/all`);
      const jsonResponse = await response.json();
      return jsonResponse;
    };
    const fetchUpdates = async (context1, context2) => {
      const response = await fetch(`${baseUrl}/context1`)
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    const fetchContinentUpdates = async () => {
      const response = await fetch(`${baseUrl}/continents/${continentVal}`);
      const jsonResponse = await response.json();
      return jsonResponse;
    };
    const fetchCountries = async () => {
      const response = await fetch(`${baseUrl}/countries`);
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    const { isLoading, isError, data, error } = useQuery(
      ["globalUpdate"],
      fetchGlobalUpdates
    );
    const {
      isLoading: isLoadingContinet,
      isError: isContinentError,
      data: continentData,
      error: continentError,
    } = useQuery(["continentUpdate"], fetchContinentUpdates);
    console.log(val, continentData, `${continentVal} continent data`);
  
    const { isLoading: isLoadingCountries, isError: isCountriesError, data: countriesData, error: countriesError } = useQuery(
      ["countries"],
      fetchCountries
    );
    console.log(countriesData, 'countries data')
    console.log(data, "data is data");
    const buttonValue = (e) => {
      console.log("label", e.target.innerHTML);
      setVal(e.target.innerHTML);
    };
    const continentButtonValue = (e) => setContinentVal(e.target.innerHTML);
  
    useEffect(() => {
      fetchContinentUpdates();
    }, [continentVal]);
  return (
    <div>
        <div className="flex gap-4">
            <button
              type="button"
              value="all"
              onClick={buttonValue}
              className="border border-slate-200 rounded-lg px-6 py-3"
            >
              Worldwide
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={() => setContinent(!continent)}
                className="flex items-center gap-6 border border-slate-200 rounded-lg px-6 py-3"
              >
                Continents
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7L0 1.16667L1.2 0L6 4.66667L10.8 0L12 1.16667L6 7Z"
                    fill="black"
                  />
                </svg>
              </button>
              {continent && (
                <div className="absolute">
                  <button
                    type="button"
                    className="block"
                    onClick={continentButtonValue}
                  >
                    Africa
                  </button>
                  <button
                    type="button"
                    className="block"
                    onClick={continentButtonValue}
                  >
                    Asia
                  </button>
                  <button
                    type="button"
                    className="block"
                    onClick={continentButtonValue}
                  >
                    Europe
                  </button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setCountries(!countries)}
                className="flex items-center gap-6 border border-slate-200 rounded-lg px-6 py-3"
              >
                Countries
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7L0 1.16667L1.2 0L6 4.66667L10.8 0L12 1.16667L6 7Z"
                    fill="black"
                  />
                </svg>
              </button>
              {countries && (
                <div className="absolute h-[300px] border border-slate-200 bg-white overflow-y-scroll w-[300px] rounded-lg mt-3">
                  {countriesData && countriesData.map((country) => (
                     <button
                     type="button"
                     className="w-full flex gap-3 py-4 px-4 items-center hover:bg-gray-100 text-sm"
                     onClick={continentButtonValue}
                   >
                    <img className="w-8 h-5 rounded object-cover" src={country.countryInfo?.flag} alt={country} />
                     {country.country}
                   </button>
                  ))}
          
                </div>
              )}
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setUsaStates(!usaStates)}
                className="flex items-center gap-6 border border-slate-200 rounded-lg px-6 py-3"
              >
                USA
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7L0 1.16667L1.2 0L6 4.66667L10.8 0L12 1.16667L6 7Z"
                    fill="black"
                  />
                </svg>
              </button>
              {usaStates && (
                <div className="absolute">
                  <button
                    type="button"
                    className="block"
                    onClick={continentButtonValue}
                  >
                    Africa
                  </button>
                  <button
                    type="button"
                    className="block"
                    onClick={continentButtonValue}
                  >
                    Asia
                  </button>
                  <button
                    type="button"
                    className="block"
                    onClick={continentButtonValue}
                  >
                    Europe
                  </button>
                </div>
              )}
            </div>
          </div>
    </div>
  )
}

export default Home