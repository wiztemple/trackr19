import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Modal from "../components/modal";

const baseUrl = "https://disease.sh/v3/covid-19";
const Countries = () => {
    const [showModal, setShowModal] = useState(false);
    const [country, setCountry] = useState({});
    const [countryIndex, setCountryIndex] = useState(0)

    const fetchCountries = async () => {
    const response = await fetch(`${baseUrl}/countries`);
    const jsonResponse = await response.json();
    return jsonResponse;
  };

  const {
    isLoading: isLoadingCountries,
    isError: isCountriesError,
    data,
    error: countriesError,
  } = useQuery(["countries"], fetchCountries);

const showCountryDetails = (showModal, countryIndex) => {
    setCountryIndex(data[countryIndex])
    setCountry(data[countryIndex])
    setShowModal(true)
  }
  console.log(countryIndex, "country index");
    console.log(country, "country");
//   console.log(data, "countries from the countries page baby");

  return (
    <div>
      <h1 className="text-3xl font-semibold">All Countries</h1>
      <div class="overflow-x-hidden overflow-y-auto rounded-lg border border-slate-200 my-5 h-[80vh]">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 uppercase"
              >
                Country
              </th>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 uppercase"
              >
                Total Cases
              </th>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 uppercase"
              >
                Active Cases
              </th>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 uppercase"
              >
                Recovered
              </th>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 uppercase"
              >
                Deaths
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {data?.map((country, idx) => {
              return (
                <tr className="hover:bg-gray-50" key={country?.country}>
                  <th className="flex gap-3 px-6 py-2 font-normal text-gray-900">
                    <div className="relative h-10 w-10">
                      <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src={country.countryInfo?.flag}
                        alt={country?.country}
                      />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        {country?.country}
                      </div>
                      <div className="text-gray-400">{country?.continent}</div>
                    </div>
                  </th>
                  <td className="px-6 py-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      {country?.cases?.toLocaleString("en-US")}
                    </span>
                  </td>
                  <td className="px-6 py-2">
                    {country?.active?.toLocaleString("en-US")}
                  </td>
                  <td className="px-6 py-2">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        {country?.recovered?.toLocaleString("en-US")}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                      {country?.deaths?.toLocaleString("en-US")}
                    </span>
                  </td>
                  <td className="px-6 py-2">
                    <div className="flex justify-end gap-4">
                      <button onClick={() => {
                           showCountryDetails(true, idx)
                      }} className="border border-slate-300 rounded-full bg-white px-5 py-2 font-medium text-sm">
                        View Details
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {
            showModal && (
                <Modal 
                setShowModal={setShowModal} 
                countryName={country?.country} 
                countryFlag={country?.countryInfo?.flag} 
                totalCases={country?.cases?.toLocaleString("en-US")}
                totalDeaths={country?.deaths?.toLocaleString("en-US")}
                activeCases={country?.active?.toLocaleString("en-US")}
                recoveredCases={country?.recovered?.toLocaleString("en-US")}
                criticalCases={country?.critical?.toLocaleString("en-US")}
                testCases={country?.tests?.toLocaleString("en-US")}
                casesPerOneMillion={country?.casesPerOneMillion?.toLocaleString("en-US")}
                deathsPerOneMillion={country?.deathsPerOneMillion?.toLocaleString("en-US")}
                recoveredPerOneMillion={country?.recoveredPerOneMillion?.toLocaleString("en-US")}
                activePerOneMillion={country?.activePerOneMillion?.toLocaleString("en-US")}
                criticalPerOneMillion={country?.criticalPerOneMillion?.toLocaleString("en-US")}
                testsPerOneMillion={country?.testsPerOneMillion?.toLocaleString("en-US")}
                population={country?.population?.toLocaleString("en-US")}
                continent={country?.continent}
                />
            )
        }
      </div>
    </div>
  );
};

export default Countries;
