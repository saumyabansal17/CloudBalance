import React from "react";
import AWSImg from "../../../../assets/AWS.png";
import CodeBlock from "../../../../components/CodeBlock";
import StepNumber from "../../../../components/StepNumber";
import FormInput from "../../../../components/FormInput";
import {policy} from "./utils"

const CreateIAMRole = ({ formData, handleChange }) => {

  return (
    <>
      <div className="flex-row mb-4">
        <h3 className="text-2xl text-left font-bold text-gray-800">
          Create an IAM Role
        </h3>
        <h5 className="text-[#555b6c]">
          Create an IAM Role by following these steps
        </h5>
      </div>

      <div className="bg-white rounded-md border border-[#E6E6E6] p-4 mb-4">
        <div className="flex my-4 px-2">
          <StepNumber number={1} />
          <span>Log into AWS account &</span>
          <span className="text-[#0a3ca2] underline ml-1">
            Create an IAM Role.
          </span>
        </div>
        <div className="flex my-4 px-2">
          <StepNumber number={2} />
          <p className="flex flex-1 gap-2">
            <span className="">In the </span>
            <span className="italic">Trusted entity type</span>
            <span>section, select</span>
            <span className="font-semibold">Custom trust policy.</span>
            <span>
              Replace the prefilled policy with the policy provided below -
            </span>
          </p>
        </div>

        <CodeBlock code={policy} className="" />

        <div className="flex my-4 px-2">
          <StepNumber number={3} />
          <p className="flex-1">
            <span>Click on </span>
            <span className="font-semibold mr-1">Next</span>
            <span>to go to the</span>
            <span className="italic m-1">Add permissions page.</span>
            <span>
              We would not be adding any permissions for now because the
              permission policy content will be dependent on the AWS Account ID
              retrieved from the IAM Role. Click on
            </span>
            <span className="font-semibold mr-1">Next</span>
          </p>
        </div>

        <div className="flex my-4 px-2">
          <StepNumber number={4} />
          <p className="flex flex-1 gap-2 items-center">
            <span>In the </span>
            <span className="italic">Role name field,</span>
            <span>enter the below-mentioned role name,and click on </span>
            <span className="font-semibold">Create Role -</span>
          </p>
        </div>
        <CodeBlock code={"CK-Tuner-Role-dev2"} className="w-[300px]" />

        <div className="flex my-4 px-2">
          <StepNumber number={5} />
          <span>Go to the newly create IAM Role and copy the Role ARN</span>
        </div>
        <div className="ml-11 border border-[#E6E6E6] rounded-sm">
          <img src={AWSImg} alt="Image Loading" />
        </div>

        <div className="flex my-4 px-2 items-center">
          <StepNumber number={6} />
          <span>Paste the copied Role ARN below - </span>
        </div>
        <div className="flex pl-8 gap-2 items-center justify-between">
          <FormInput
            label="Enter the IAM Role ARN"
            name="roleArn"
            value={formData.roleArn}
            onChange={handleChange}
            required={true}
          />

          <FormInput
            label="Enter the Account Name"
            name="accountName"
            value={formData.accountName}
            onChange={handleChange}
            required={true}
          />

          <FormInput
            label="Enter the Account ID"
            name="accountId"
            value={formData.accountId}
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
    </>
  );
};

export default CreateIAMRole;
