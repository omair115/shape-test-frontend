import React, { useState } from "react";

interface ScaleProps {
  title: string;
  subtitle?: string;
  scale?: number;
  onChange: (value: number) => void; // onChange prop to pass data up
}

const Scale: React.FC<ScaleProps> = ({ title, subtitle, scale = 10, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleScaleClick = (value: number) => {
    setSelectedValue(value); // Set the selected value to highlight the button
    onChange(value); // Pass the selected scale value to the parent
  };

  return (
    <div>
      <label className="block font-medium mb-1 text-white">{title}</label>
      {subtitle && <p className="text-sm text-gray-500 mb-2 text-white">{subtitle}</p>}
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: scale }, (_, i) => (
          <button
            key={i + 1}
            className={`border px-4 py-2 rounded hover:bg-blue-100 ${
              selectedValue === i + 1 ? "bg-blue-500 text-white" : "" // Highlight selected button
            }`}
            onClick={() => handleScaleClick(i + 1)} // Handle click and pass value
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Scale;
