import React from "react";

interface DropdownProps {
  title: string;
  options?: string[];
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, options, onChange }) => {
  // Handle change event for the dropdown
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue); 
  };

  return (
    <div>
      <label className="block font-medium mb-1 text-white">{title}</label>
      <select className="w-full border p-2 rounded" onChange={handleChange}>
        {options && options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
