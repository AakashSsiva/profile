import { useState, useEffect } from "react";
import PersonalDetails from "./components/PersonalDetails";
import EducationDetails from "./components/EducationDetails";
import ProjectDetails from "./components/ProjectDetails";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        title: "AI Resume Analyzer",
        frontend: "React",
        backend: "Python"
      },
      {
        title: "Business Dashboard",
        frontend: "React",
        backend: "Node.js"
      }
    ]);
  }, []);

  return (
    <div className="container">
      <h1>MY PROFILE</h1>

      <PersonalDetails
        name="Aakash S"
        phone="Your Number"
        age="21"
        bloodGroup="O+"
        linkedin="https://www.linkedin.com/in/aakash-s-5819b8297/"
        github="https://github.com/AakashSsiva"
      />

      <EducationDetails
        degree="MCA"
        year="1st Year"
        college="Your College Name"
        duration="2025-2027"
      />

      <ProjectDetails projects={projects} />
    </div>
  );
}

export default App;