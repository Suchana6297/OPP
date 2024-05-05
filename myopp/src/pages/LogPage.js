import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
// import { toast, ToastContainer } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify
import StudLogForm from "../components/Log_Reg_Form/Log_Form/StudLogForm";
import TeachLogForm from "../components/Log_Reg_Form/Log_Form/TeachLogForm";
import "../../src/Style/LoginPage/Loginpage.css";
// import "../../src/Style/toastify-notification.css";


const LogPage = () => {

  const navigate = useNavigate();
  const [loginType, setLoginType] = useState('student');
  const { updateUser } = useUser();


    const handleStudentLogin = async (data) => {
        try {
          const response = await axios.post('http://localhost:5000/login', {
            ...data,
            role: 'student',
          });
    
          updateUser(response.data.user);
          // Redirect to the student dashboard with the student's name
          navigate({
          pathname: '/student-dashboard',
          state: { name: response.data.user.name },
         });

        //  toast.success("Login Successfull");
        } catch (error) {
          console.error('Student login error:', error.response.data.message);
        }
      };

      const handleTeacherLogin = async (data) => {
        try {
          const response = await axios.post('http://localhost:5000/login', {
            ...data,
            role: 'teacher',
          });
    
          updateUser(response.data.user);
          navigate({
            pathname: '/teacher-dashboard',
            state: { name: response.data.user.name },
          });

          // toast.success("Login Successfull");
        } catch (error) {
          console.error('Teacher login error:', error.response.data.message);
        }
      };

  return (
    <div className="cont">
      <h2>Login Page</h2>
      <div>
        <label>
          Choose login type:
          <select value={loginType} onChange={(e) => setLoginType(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>
      </div>

      {loginType === 'student' ? (
        <StudLogForm onLogin={handleStudentLogin} />
      ) : (
        <TeachLogForm onLogin={handleTeacherLogin} />
      )}
    </div>
  );
};

export default LogPage;