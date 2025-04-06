import React, { useState } from "react";

interface DOBProps {
  title: string;
  info?: string;
  onChange: (dob: { dd: string; mm: string; yyyy: string }) => void;
}

const DateOfBirthQuestion: React.FC<DOBProps> = ({ title, info, onChange }) => {
  const [dob, setDob] = useState({ dd: "", mm: "", yyyy: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedDob = { ...dob, [name]: value };
    setDob(updatedDob);
    onChange(updatedDob);
  };

  return (
    <div>
      <label className="block font-medium mb-1 text-white">{title}</label>
      {info && <p className="text-sm text-gray-500 mb-1 text-white">{info}</p>}
      <div className="flex gap-2">
        <input
          name="dd"
          type="number"
          min="1"
          max="31"
          placeholder="DD"
          className="w-20 border p-2 rounded"
          value={dob.dd}
          onChange={handleChange}
        />
        <input
          name="mm"
          type="number"
          min="1"
          max="12"
          placeholder="MM"
          className="w-20 border p-2 rounded"
          value={dob.mm}
          onChange={handleChange}
        />
        <input
          name="yyyy"
          type="number"
          min="1920"
          max="2006"
          placeholder="YYYY"
          className="w-28 border p-2 rounded"
          value={dob.yyyy}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default DateOfBirthQuestion;
