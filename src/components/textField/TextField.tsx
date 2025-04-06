import React, { useState } from "react";

interface TextProps {
  title: string;
  maxLength?: number;
  info?: string;
  onChange: (value: string) => void;
}

const TextField: React.FC<TextProps> = ({ title, maxLength = 250, info, onChange }) => {
  const [text, setText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText); 
    onChange(newText); 
  };

  return (
    <div>
      <label className="block font-medium mb-1 text-white">{title}</label>
      {info && <p className="text-sm text-gray-500 mb-1 text-white">{info}</p>}
      <textarea
        className="w-full border p-2 rounded"
        value={text}
        onChange={handleTextChange}
        maxLength={maxLength}
        rows={4}
      />
      <p className="text-right text-sm text-gray-500">
        {text.length}/{maxLength}
      </p>
    </div>
  );
};

export default TextField;
