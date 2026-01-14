import React from "react";

const Button = ({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "px-3 py-1 rounded-sm border text-sm font-medium transition";

  const variants = {
    primary:
      "bg-[#0a3ca2] text-white border-[#0a3ca2] hover:bg-[#08338a]",
    secondary:
      "bg-white text-[#0a3ca2] border-[#0a3ca2] hover:bg-[#eef6fe]",
  };

  const disabledStyles =
    "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed hover:bg-gray-300";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={`
        ${baseStyles}
        ${disabled ? disabledStyles : variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
