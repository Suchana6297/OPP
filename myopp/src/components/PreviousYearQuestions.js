import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const PreviousYearQuestions = () => {
  const [previousYearQuestions, setPreviousYearQuestions] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);

  // Use dummy data for now
  const dummyQuestions = [
    {
      id: 1,
      question: "Array Rotation:",
      description: "Given an array of integers and a rotation count, rotate the array to the right by the specified number of rotations.",
      testCases: [
        {
          input: [[1, 2, 3, 4, 5], 2],
          expectedOutput: [4, 5, 1, 2, 3],
        },
        {
          input: [[1, 2, 3, 4, 5], 3],
          expectedOutput: [3, 4, 5, 1, 2],
        },
      ],
    },
    {
      id: 2,
      question: "Palindrome Check:",
      description: "Given a string, determine if it is a palindrome. Ignore spaces, punctuation, and capitalization.",
      testCases: [
        {
          input: ["A man, a plan, a canal, Panama"],
          expectedOutput: true,
        },
        {
          input: ["race car"],
          expectedOutput: true,
        },
        {
          input: ["hello"],
          expectedOutput: false,
        },
      ],
    },
    {
      id: 3,
      question: "FizzBuzz:",
      description: "Write a program that prints the numbers from 1 to n. But for multiples of three, print 'Fizz' instead of the number, and for the multiples of five, print 'Buzz'. For numbers that are multiples of both three and five, print 'FizzBuzz'.",
      testCases: [
        {
          input: [15],
          expectedOutput: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"],
        },
        {
          input: [10],
          expectedOutput: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz"],
        },
      ],
    },
    // Add more questions as needed
  ];
  

  useEffect(() => {
    // Use dummy data for now
    setPreviousYearQuestions(dummyQuestions);
  }, []);

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  return (
    <div>
      <h5 className="button-like" onClick={toggleQuestions}>Previous Year's Questions</h5>
      {showQuestions && (
        <div>
          {previousYearQuestions.map((question) => (
            <div key={question.id}>
              <h6>{question.question}</h6>
              <p>{question.description}</p>
              {/* <p><strong>Code:</strong> {question.code}</p>
              <p><strong>Answer:</strong> {question.answer}</p> */}
              <h5>Test Cases:</h5>
              <ul>
                {question.testCases.map((testCase, index) => (
                  <li key={index}>
                    <p><strong>Input:</strong> {JSON.stringify(testCase.input)}</p>
                    <p><strong>Expected Output:</strong> {JSON.stringify(testCase.expectedOutput)}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PreviousYearQuestions;
