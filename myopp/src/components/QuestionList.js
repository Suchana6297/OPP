import React, { useState } from 'react';

const dummyQuestions = [
  {
    id: 1,
    question: "Array Rotation",
    marks: 10,
    difficulty: "Medium"
  },
  {
    id: 2,
    question: "Palindrome Check",
    marks: 5,
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "FizzBuzz",
    marks: 3,
    difficulty: "Easy"
  },
  {
    id: 4,
    question: "Maximum Subarray Sum",
    marks: 15,
    difficulty: "Hard"
  },
  {
    id: 5,
    question: "Linked List Cycle Detection",
    marks: 8,
    difficulty: "Medium"
  }
];

const QuestionList = () => {
  const [showQuestions, setShowQuestions] = useState(false);

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  return (
    <div>
      <h5 className="button-like" onClick={toggleQuestions} style={{ cursor: 'pointer' }}>Question List</h5>
      {showQuestions && (
        <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Marks</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {dummyQuestions.map((question, index) => (
              <tr key={question.id}>
                <td>{index + 1}</td>
                <td>{question.question}</td>
                <td>{question.marks}</td>
                <td>{question.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default QuestionList;
