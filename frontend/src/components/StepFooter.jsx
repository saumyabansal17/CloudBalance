import React from "react";
import Button from "./Button";

const StepFooter = ({ step, onNext, onPrev, onSubmit, onCancel ,disableNext}) => {
  return (
    <div className="flex justify-between">
      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>

      <div className="flex gap-1">
        {step > 1 && (
          <Button variant="secondary" onClick={onPrev}>
            {step === 2 && "Back - Create An IAM Role"}
            {step === 3 && "Back - Add Customer Managed Policies"}
          </Button>
        )}

        <div></div>

        {step < 3 ? (
          <Button variant="primary" onClick={onNext} disabled={disableNext}>
            {step === 1 && "Next - Add Customer Managed Policies"}
            {step === 2 && "Next - Create CUR"}
          </Button>
        ) : (
          <Button  type="submit" variant="primary" onClick={onSubmit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepFooter;
