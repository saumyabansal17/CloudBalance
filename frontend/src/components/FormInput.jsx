import React from 'react'

const FormInput = ({
  label,
  name,
  value,
  onChange,
  required = false
}) => {
  return (
    <div>
      <label className="text-sm text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 border border-gray-300 rounded px-3 py-2 text-sm"
        required={required}
      />
    </div>
  );
};

export default FormInput