import React from "react";
import StepNumber from "../../../components/StepNumber";
import CodeBlock from "../../../components/CodeBlock";
import ReportDetails from "../../../assets/ReportDetails.png";
import CUR2 from "../../../assets/CUR2.png";
import CUR3 from "../../../assets/CUR3.png";

const CreateCUR = () => {
  return (
    <>
      <div className="flex-row mb-2">
        <h3 className="text-2xl text-left font-bold text-gray-800">
          Create Cost & Usage Report
        </h3>
        <h5 className="text-[#555b6c]">
          Create a Cost & Usage Report by following these steps
        </h5>
      </div>
      <div className="bg-white rounded-md border border-[#E6E6E6] p-4 mb-4">
        <div className="flex my-4 px-2 items-center">
          <StepNumber number={1} />
          <span>Go to the newly create IAM Role and copy the Role ARN</span>
        </div>

        <div className="flex my-4 px-2 items-center">
          <StepNumber number={2} />
          <span>Go to the newly create IAM Role and copy the Role ARN</span>
        </div>
        <CodeBlock code={"ck-tuner-275595855473-hourly-cur"} className="w-[400px]"/>
        <div className="ml-11 my-8">
          <p className="font-light text-sm">
            Ensure that the following configuration is checked
          </p>
          <label>
            <div className="flex items-center gap-2 cursor-pointer ml-8 mt-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-[#E6E6E6] rounded-sm accent-gray-400"
                defaultChecked
              />

              <span className="text-md  font-medium ">
                Include Resource IDs
              </span>
            </div>
          </label>
        </div>
        <p className="ml-11 mb-4">Click on Next</p>
        <img src={ReportDetails} alt="Image Loading" className="pl-11" />

        <div className="flex my-4 px-2 items-center">
          <StepNumber number={3} />
          <span>Go to the newly create IAM Role and copy the Role ARN</span>
        </div>
        <div className="ml-11 my-8">
          <p className="font-light text-sm">
            Ensure that the following configuration is checked
          </p>
          <label>
            <div className="flex items-center gap-2 cursor-pointer ml-8 mt-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-[#E6E6E6] rounded-sm accent-gray-400"
                defaultChecked
              />

              <span className="text-md  font-medium ">
                Include Resource IDs
              </span>
            </div>
          </label>
        </div>
        <p className="ml-11 mb-4">Click on Save</p>
        <div className="">
        <img src={CUR2} alt="Image Loading" className="pl-11" />
        </div>
        <div className="flex my-4 px-2 items-center">
          <StepNumber number={4} />
          <span>Go to the newly create IAM Role and copy the Role ARN</span>
        </div>
        <p className="ml-11">Report path prefix: </p>

        <CodeBlock code={275595855473} className="w-[400px]" />

        <div className="text-sm text-gray-800 space-y-4 ml-11 my-4">
          <p>Additionally, ensure that the following checks are in place</p>

          <div>
            <p className="mb-2 font-medium">Time granularity:</p>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                defaultChecked
                className="accent-gray-700"
              />
              <span className="font-semibold">Hourly</span>
            </label>
          </div>

          <div>
            <p className="mb-2">
              Please make sure these checks are Enabled in{" "}
              <span className="font-medium">
                Enable report data integration for:
              </span>
              
            </p>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked
                className="accent-gray-200 ml-11"
              />
              <span className="font-semibold">Amazon Athena</span>
            </label>
          </div>
        </div>

        <img src={CUR3} alt="Image" className="pl-11 mt-2" />

        <div className="flex my-4 px-2 items-center">
          <StepNumber number={5} />
          <span>Go to the newly create IAM Role and copy the Role ARN</span>
        </div>

      </div>
    </>
  );
};

export default CreateCUR;
