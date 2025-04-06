export const data = [
  {
    id: 1,
    title: "Title",
    type: "dropdown",
    options: ["Mr", "Ms", "Mrs", "Miss", "Dr", "NA"],
  },
  {
    id: 2,
    title: "Date of birth",
    type: "dob",
    info: "Your Date of birth is required to accurately calculate your health age.",
  },
  {
    id: 3,
    title:
      "On a scale of 1-10, with 10 being the highest, would you rate the following?",
    subtitle:
      "The usual performance of most other workers in a job similar to yours",
    type: "scale",
    scale: 10,
  },
  {
    id: 4,
    title:
      "Are there any other sources of stress not mentioned here that affect you?",
    type: "text",
    maxLength: 250,
    info: "Knowing other work or nonwork drivers of stress may help your organization implement practices to counter these factors.",
  },
  {
    id: 5,
    title:
      "How would you describe the balance between your work and nonwork activities?",
    type: "buttonGroup",
    options: [
      "A. Ideal",
      "B. Satisfactory",
      "C. Challenging",
      "D. Extremely Challenging",
      "E. Unmanageable",
    ],
  },
];
