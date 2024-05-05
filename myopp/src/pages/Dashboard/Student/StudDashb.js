import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../context/UserContext";

const StudentDashboard = () => {
  const { user } = useUser();

  return (
    <>
      <div>
        <nav className="navbar">
          <p className="welcome-message">
            Welcome, {user ? user.name : "Unknown Student"}
          </p>
        </nav>
      </div>
      <div>
        <Link to="/CodeEditor">
        <button type="submit" className="btn btn-submit">Code Practice</button>
        </Link>
        <Link to="/Compitive-exam">
        <button type="submit" className="btn btn-submit">Compitive Exam</button>
        </Link>
      </div>
    </>
  );
};

export default StudentDashboard;
