import React, { useState } from 'react';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify
import StudRegForm from "../components/Log_Reg_Form/Reg_Form/StudRegForm";
import TeachRegForm from "../components/Log_Reg_Form/Reg_Form/TeachRegForm";
import "../../src/Style/RegistrationPage/RegisPage.css";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// import "../../src/Style/toastify-notification.css";


const RegisPage = () => {

  const [registrationType, setRegistrationType] = useState('student');
  const navigate = useNavigate();



    const handleStudentRegistration = async (data) => {
      try {
        const response = await axios.post('http://localhost:5000/register', {
          ...data,
          role: 'student',
        });

          
          navigate({
          pathname: '/login',
          state: { name: response.data.user.name },
         });
         toast.success("Done",{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
         });
        // alert("Done");

      } catch (error) {
        console.error('Student registration error:', error.response.data.message);
      }
      };

      const handleTeacherRegistration = async (data) => {
        try {
          const response = await axios.post('http://localhost:5000/register', {
            ...data,
            role: 'teacher',
          });

          navigate({
            pathname: '/login',
            state: { name: response.data.user.name },
           });
    
           toast.success("Done");
        } catch (error) {
          console.error('Teacher registration error:', error.response.data.message);
        }
      };
    

  return (
    <div className="container"> 
     {/* <ToastContainer
        className="toastify-custom" // Apply custom styles to ToastContainer
        toastClassName="toastify-custom__toast" // Apply custom styles to individual toast notifications
      /> */}
      <h2>Registration Page</h2>
      <div>
        <label>
          Choose registration type:
          <select value={registrationType} onChange={(e) => setRegistrationType(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>
      </div>

      {registrationType === 'student' ? (
        <StudRegForm onSubmit={handleStudentRegistration} />
      ) : (
        <TeachRegForm onSubmit={handleTeacherRegistration} />
      )}
    </div>
  );
};

export default RegisPage;