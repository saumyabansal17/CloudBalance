import React from "react";
const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "px-3 py-1 rounded-sm border text-sm font-medium transition cursor-pointer ";

  const variants = {
    primary: "bg-[#0a3ca2] text-white border-[#0a3ca2] hover:bg-[#08338a]",
    secondary: "bg-white text-[#0a3ca2] border-[#0a3ca2] hover:bg-[#eef6fe]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
