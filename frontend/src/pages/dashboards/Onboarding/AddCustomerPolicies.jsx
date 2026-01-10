import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import RoleInfo from "../../../assets/RoleInfo.png";
import AttachPolicy from "../../../assets/AttachPolicy.png";
import AWSPolicy from "../../../assets/AWSPolicy.png";
import StepNumber from "../../../components/StepNumber";

const AddCustomerPolicies = () => {
  return (
    <>
      <div className="flex-row mb-2">
        <h3 className="text-2xl text-left font-bold text-gray-800">
          Add Customer Managed Policies
        </h3>
        <h5 className="text-[#555b6c]">
          Create an Inline policy for the role by following these steps
        </h5>
      </div>
      <div className="bg-white rounded-md border border-[#E6E6E6] p-4 mb-4">
        <div className="flex my-4 px-2 items-center">
          <StepNumber number={1} />
          <span>Go to the newly create IAM Role and copy the Role ARN</span>
        </div>
        <div className="ml-11 border border-[#E6E6E6] rounded-sm">
          <img src={RoleInfo} alt="Image Loading" />
        </div>

        <div className="flex my-4 px-2 items-center">
          <StepNumber number={2} />
          <span>Go to the newly create IAM Role and copy the Role ARN</span>
        </div>
        <div className="ml-11 border border-[#E6E6E6] rounded-sm">
          <img src={AttachPolicy} alt="Image Loading" />
        </div>

        <div className="flex my-4 px-2 items-center">
          <StepNumber number={3} />
          <span>Go to the newly create IAM Role and copy the Role ARN</span>
        </div>
        <div className="ml-11 border border-[#E6E6E6] rounded-sm">
          <img src={AWSPolicy} alt="Image Loading" />
        </div>

        <div className="flex my-4 px-2 items-center">
          <StepNumber number={4} />
          <span>Go to the newly create IAM Role and copy the Role ARN</span>
        </div>
      </div>
    </>
  );
};

export default AddCustomerPolicies;
