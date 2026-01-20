import React from "react";

const StepNumber = ({ number }) => {
  return (
    <>
      <div className="flex bg-gray-400 rounded-full w-7 h-7 mr-2 items-center justify-center">
        <div className="text-white">{number}</div>
      </div>
    </>
  );
};

export default StepNumber;
