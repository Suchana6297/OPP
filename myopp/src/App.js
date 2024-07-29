import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogPage from "./pages/LogPage";
import RegisPage from "./pages/RegisPage";
import HomePage from "./pages/Home";
import StudentDashboard from "./pages/Dashboard/Student/StudDashb";
import TeacherDashboard from "./pages/Dashboard/Teacher/TeachDashb";
import CodeEditor from "./pages/Dashboard/Student/CodeEditor";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<HomePage />}>{/* Home or landing page */}</Route>
        <Route path="/register" element={<RegisPage />}></Route>
        <Route path="/login" element={<LogPage />}></Route>
        <Route path="/teacher-dashboard"element={<TeacherDashboard />}></Route>
        <Route path="/student-dashboard"element={<StudentDashboard />}></Route>
        <Route path="/CodeEditor" element={<CodeEditor />}></Route>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
