import React from "react";
import CountCard from "./count-card";
import SingleCaseCountCard from "./single-case-count-card";

const Modal = ({
  setShowModal,
  countryFlag,
  countryName,
  totalCases,
  totalDeaths,
  activeCases,
  recoveredCases,
  criticalCases,
  testCases,
  activePerOneMillion,
  casesPerOneMillion,
  criticalPerOneMillion,
  deathsPerOneMillion,
  recoveredPerOneMillion,
  testsPerOneMillion,
  population,
  continent
}) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="bg-gray-700 bg-opacity-60 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
      <div className="relative w-[600px] h-screen ml-auto max-w-3xl bg-white">
        <div className="flex justify-between items-center border-b border-b-slate-200 py-5 px-5">
          <span className="flex items-center gap-2">
            <img
              className="h-8 w-14 object-cover rounded"
              src={countryFlag}
              alt={countryName}
            />
            <span>{countryName}</span>
          </span>
          <button
            type="button"
            onClick={() => (setShowModal = setShowModal(false))}
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.211113 1.13939C0.149136 1.07741 0.0999727 1.00383 0.0664308 0.922856C0.0328889 0.841879 0.015625 0.755088 0.015625 0.667439C0.015625 0.579789 0.0328889 0.492998 0.0664308 0.412021C0.0999727 0.331044 0.149136 0.257465 0.211113 0.195488C0.27309 0.133511 0.346669 0.0843477 0.427646 0.0508058C0.508623 0.0172639 0.595414 -6.53038e-10 0.683064 0C0.770713 6.53038e-10 0.857504 0.0172639 0.938481 0.0508058C1.01946 0.0843477 1.09304 0.133511 1.15501 0.195488L8.01562 7.05743L14.8762 0.195488C14.9382 0.133511 15.0118 0.0843477 15.0928 0.0508058C15.1737 0.0172639 15.2605 0 15.3482 0C15.4358 0 15.5226 0.0172639 15.6036 0.0508058C15.6846 0.0843477 15.7582 0.133511 15.8201 0.195488C15.8821 0.257465 15.9313 0.331044 15.9648 0.412021C15.9984 0.492998 16.0156 0.579789 16.0156 0.667439C16.0156 0.755088 15.9984 0.841879 15.9648 0.922856C15.9313 1.00383 15.8821 1.07741 15.8201 1.13939L8.95819 8L15.8201 14.8606C15.8821 14.9226 15.9313 14.9962 15.9648 15.0771C15.9984 15.1581 16.0156 15.2449 16.0156 15.3326C16.0156 15.4202 15.9984 15.507 15.9648 15.588C15.9313 15.669 15.8821 15.7425 15.8201 15.8045C15.7582 15.8665 15.6846 15.9157 15.6036 15.9492C15.5226 15.9827 15.4358 16 15.3482 16C15.2605 16 15.1737 15.9827 15.0928 15.9492C15.0118 15.9157 14.9382 15.8665 14.8762 15.8045L8.01562 8.94257L1.15501 15.8045C1.09304 15.8665 1.01946 15.9157 0.938481 15.9492C0.857504 15.9827 0.770713 16 0.683064 16C0.595414 16 0.508623 15.9827 0.427646 15.9492C0.346669 15.9157 0.27309 15.8665 0.211113 15.8045C0.149136 15.7425 0.0999727 15.669 0.0664308 15.588C0.0328889 15.507 0.015625 15.4202 0.015625 15.3326C0.015625 15.2449 0.0328889 15.1581 0.0664308 15.0771C0.0999727 14.9962 0.149136 14.9226 0.211113 14.8606L7.07306 8L0.211113 1.13939Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center px-5 py-5">
          <h1 className="text-2xl font-semibold capitalize">
            Latest Updates
          </h1>
          <span className="block text-[#8289A6]">{date}</span>
        </div>
        <div className="grid grid-cols-3 gap-3 px-5">
          <CountCard
            count={totalCases}
            caseName="Total Cases"
            headerBg="bg-[#F9FBFC]"
            caseNameColor="text-[#7E7D88]"
          />
          <CountCard
            count={activeCases}
            caseName="Active Cases"
            headerBg="bg-[#FFF4EA]"
            caseNameColor="text-[#F59032]"
            countColor="text-[#F59032]"
          />
          <CountCard
            count={recoveredCases}
            caseName="Recovered"
            headerBg="bg-[#F3FDF6]"
            caseNameColor="text-[#16B442]"
            countColor="text-[#16B442]"
          />
          <CountCard
            caseName="Critical Cases"
            count={criticalCases}
            headerBg="bg-[#F9FBFC]"
            caseNameColor="text-[#7E7D88]"
          />
          <CountCard
            count={totalDeaths}
            caseName="Deaths"
            headerBg="bg-[#F5E8E8]"
            caseNameColor="text-[#DD1D1D]"
            countColor="text-[#DD1D1D]"
          />
          <CountCard
            caseName="Tests"
            count={testCases}
            headerBg="bg-[#EDECFF]"
            caseNameColor="text-[#4B3FDA]"
            countColor="text-[#4B3FDA]"
          />
        </div>
        <div className="px-5 mt-4">
          <div className="border border-slate-200 rounded-lg p-5">
            <div className="bg-slate-50 grid grid-cols-3 rounded-lg p-3">
              <SingleCaseCountCard caseTitle="Cases Per Million" caseCount={casesPerOneMillion} />
              <SingleCaseCountCard caseTitle="Active Per Million" caseCount={activePerOneMillion} />
              <SingleCaseCountCard caseTitle="Critical Per Million" caseCount={criticalPerOneMillion} idealEmoji="😭" />
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg p-5 mt-4">
            <div className="bg-slate-50 grid grid-cols-3 rounded-lg p-3">
              <SingleCaseCountCard caseTitle="Deaths Per Million" caseCount={deathsPerOneMillion}/>
              <SingleCaseCountCard caseTitle="Recovered Per Million" caseCount={recoveredPerOneMillion} />
              <SingleCaseCountCard caseTitle="Tests Per Million" caseCount={testsPerOneMillion}/>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 px-5 mt-8">
            <div className="flex gap-2 items-center">
                <span>Population</span>: <span className="bg-[#F1F4FA] rounded-3xl px-3 py-[2px]">{population}</span>
            </div>
            <div className="flex gap-2 items-center">
                <span>Continent</span>: <span className="bg-[#F1F4FA] rounded-3xl px-3 py-[2px]">{continent}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
