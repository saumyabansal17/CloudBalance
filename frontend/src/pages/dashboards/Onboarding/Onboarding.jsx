import React, { useState } from "react";
import CreateIAMRole from "./CreateIAMRole/CreateIAMRole";
import AddCustomerPolicies from "./AddCustomerPolicies";
import CreateCUR from "./CreateCUR";
import StepFooter from "../../../components/StepFooter";
import { toast } from "react-toastify";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    roleArn: "",
    accountName: "",
    accountId: "",
  });

  const [step, setStep] = useState(1);

  const isStepOneValid = () => {
    return (
      formData.roleArn.trim() !== "" &&
      formData.accountName.trim() !== "" &&
      formData.accountId.trim() !== ""
    );
  };

  const handleNext = () => {
    if (step === 1 && !isStepOneValid()) {
      toast.warn("Please fill all required fields before continuing.");
      return;
    }
    setStep((s) => s + 1);
  };

  const handlePrev = () => setStep((s) => s - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {};
  
  const handleSubmit = () => {
    console.log("Form Submiited", formData);
  };

  return (
    <>
      <div className="px-8 py-6">
        {step === 1 && (
          <CreateIAMRole formData={formData} handleChange={handleChange} />
        )}

        {step === 2 && <AddCustomerPolicies />}

        {step === 3 && <CreateCUR />}

        <StepFooter
          step={step}
          onNext={handleNext}
          onPrev={handlePrev}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          disableNext={step === 1 && !isStepOneValid()}
        />
      </div>
    </>
  );
};

export default Onboarding;
