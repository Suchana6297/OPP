import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from "../../../context/UserContext";
import "../../Dashboard/Teacher/TeachDashboard.css";
import PreviousYearQuestions from '../../../components/PreviousYearQuestions';
import QuestionList from '../../../components/QuestionList';

const TeacherDashboard = () => {
  const { user } = useUser();

  const [students, setStudents] = useState([]);
  const [showStudentInfo, setShowStudentInfo] = useState(false);
  const [scores, setScores] = useState([]);
  const [showStudentScores, setShowStudentScores] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    
    const fetchStudentScores = async () => {
      try {
        const response = await axios.get('http://localhost:5000/student-scores');
        setScores(response.data);
      } catch (error) {
        console.error('Error fetching student scores:', error);
      }
    };

    fetchStudents();
    fetchStudentScores();
  }, []);

  const toggleStudentInfo = () => {
    setShowStudentInfo(!showStudentInfo);
  };

  const toggleStudentScores = () => {
    setShowStudentScores(!showStudentScores);
  };

  return (
    <div>
      <nav className='navbar'>
        <p className="welcome-message">Welcome, {user ? user.name : 'Unknown Student'}</p>
      </nav>

      <h2>Teacher Dashboard</h2>

      <h5 onClick={toggleStudentInfo} style={{ cursor: 'pointer' }} className="button-like" >
        Student Info
      </h5>
      {showStudentInfo && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>University</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.university}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h5 onClick={toggleStudentScores} className="button-like">
        Student Scores
      </h5>
      {showStudentScores && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index}>
                  <td>{score.studentName}</td>
                  <td>{score.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Render PreviousYearQuestions component */}
      <PreviousYearQuestions />
      <QuestionList/>
    </div>
  );
};

export default TeacherDashboard;