import React, { useState } from "react";
import CreateIAMRole from "./CreateIAMRole/CreateIAMRole";
import AddCustomerPolicies from "./AddCustomerPolicies";
import CreateCUR from "./CreateCUR";
import StepFooter from "../../../components/StepFooter";
import { toast } from "react-toastify";
import { addAccount } from "../../../api/api";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    awsArn: "",
    accountName: "",
    accountId: "",
  });

  const [step, setStep] = useState(1);

  const isStepOneValid = () => {
    return (
      formData.awsArn.trim() !== "" &&
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      accountId: parseInt(formData.accountId),
    };
    try {
      const accounts = await addAccount(payload);
      console.log("payload", payload);
      console.log("Account created:", accounts.data);
      toast.success("Account onboarded successfully!");
    } catch (error) {
      console.log(error);
    }
    console.log("Form Submiited", payload);
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
