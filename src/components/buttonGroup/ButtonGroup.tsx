import React, { useState } from "react";

interface ButtonGroupProps {
  title: string;
  options?: string[];
  onChange: (value: string) => void;
}

const ButtonGroupQuestion: React.FC<ButtonGroupProps> = ({ title, options = [], onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div>
      <label className="block font-medium mb-2 text-white">{title}</label>
      <div className="flex flex-col gap-2">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleButtonClick(opt)}
            className={`border px-4 py-2 rounded text-left text-white ${
              selectedOption === opt ? "bg-blue-500 text-white" : "hover:bg-blue-100"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroupQuestion;
