import React from 'react';

const SelectCustom = ({
  label,
  name,
  handleChange,
  value,
  options,
  labelColor = 'text-black',
  error,
  touched,
}) => {
  return (
    <div className="flex flex-col">
      <label className={`mb-2 ${labelColor}`}>{label}</label>
      <select
        name={name}
        onChange={handleChange}
        value={value}
        className="border border-gray-300 rounded p-2"
      >
        <option value="" label="Chọn loại người dùng" />
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && touched && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default SelectCustom;
