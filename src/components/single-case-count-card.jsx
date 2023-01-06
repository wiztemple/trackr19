import React from "react";

const SingleCaseCountCard = ({ caseTitle, caseCount, idealEmoji }) => {
  return (
    <div>
      <span className="flex gap-3">
        <span className="text-[#777F8D]">{caseTitle}</span>
        {idealEmoji}
      </span>
      <span className="block pt-2 pb-4 text-2xl font-semibold">{caseCount}</span>
    </div>
  );
};

export default SingleCaseCountCard;
