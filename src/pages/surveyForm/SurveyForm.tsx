import React, { useState } from "react";
import DropdownQuestion from "../../components/dropDown/DropDown";
import { data } from "../../data/json/jsonData";
import DateOfBirthQuestion from "../../components/dob/DateofBirth";
import ScaleQuestion from "../../components/scale/Scale";
import TextQuestion from "../../components/textField/TextField";
import ButtonGroupQuestion from "../../components/buttonGroup/ButtonGroup";
import { useDispatch } from "react-redux";
import { setSurveyForm } from "../../data/redux/actions";

interface Question {
  id: number;
  title: string;
  subtitle?: string;
  type: string;
  options?: string[];
  info?: string;
  scale?: number;
  maxLength?: number;
}

const SurveyPage: React.FC = () => {
  const [questions] = useState<Question[]>(data);
  const [responses, setResponses] = useState<Record<number, any>>({});
  const [errors, setErrors] = useState<Record<number, string>>({});
  const dispatch = useDispatch();

  // Handle input change to store responses
  const handleInputChange = (questionId: number, value: any) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  // Simple validation to check if all fields are filled
  const validateFields = () => {
    let isValid = true;
    const validationErrors: Record<number, string> = {};

    questions.forEach((question) => {
      const response = responses[question.id];

      // Check if response exists and is a non-empty string
      if (
        response === undefined ||
        response === null ||
        (typeof response === "string" && response.trim() === "") ||
        (Array.isArray(response) && response.length === 0) ||
        (typeof response === "number" && isNaN(response))
      ) {
        validationErrors[question.id] = "This field is required";
        isValid = false;
      }
    });

    setErrors(validationErrors);
    return isValid;
  };

  // Handle submit and show responses in JSON format
  const handleSubmit = () => {
    if (validateFields()) {
      dispatch(setSurveyForm(responses));
      alert("response is saved in local storage");
    }
  };

  const renderQuestion = (question: Question) => {
    const errorMessage = errors[question.id];

    switch (question.type) {
      case "dropdown":
        return (
          <div key={question.id}>
            <DropdownQuestion
              title={question.title}
              options={question.options}
              onChange={(value) => handleInputChange(question.id, value)}
            />
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
          </div>
        );

      case "dob":
        return (
          <div key={question.id}>
            <DateOfBirthQuestion
              {...question}
              onChange={(value) => handleInputChange(question.id, value)}
            />
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
          </div>
        );

      case "scale":
        return (
          <div key={question.id}>
            <ScaleQuestion
              {...question}
              onChange={(value) => handleInputChange(question.id, value)}
            />
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
          </div>
        );

      case "text":
        return (
          <div key={question.id}>
            <TextQuestion
              {...question}
              onChange={(value) => handleInputChange(question.id, value)}
            />
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
          </div>
        );

      case "buttonGroup":
        return (
          <div key={question.id}>
            <ButtonGroupQuestion
              {...question}
              onChange={(value) => handleInputChange(question.id, value)}
            />
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Survey Form</h1>
      {questions.map(renderQuestion)}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default SurveyPage;
