import React from "react";

const CountCard = ({ caseName, count, headerBg, caseNameColor, countColor }) => {
  return (
    <div className="border border-slate-200 rounded-lg">
      <div className={`flex justify-between items-center ${headerBg} px-3 py-2 rounded-tl-lg rounded-tr-lg`}>
        <span className={`${caseNameColor} text-sm font-medium`}>{caseName}</span>
      </div>
      <span className={`block text-2xl font-semibold pl-3 py-3 ${countColor}`}>{count}</span>
    </div>
  );
};

export default CountCard;
