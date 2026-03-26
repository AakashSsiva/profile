import { useState, useEffect } from "react";
import PersonalDetails from "./components/PersonalDetails";
import EducationDetails from "./components/EducationDetails";
import ProjectDetails from "./components/ProjectDetails";
import "./App.css";

interface Project {
  title: string;
  frontend: string;
  backend: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects([
      {
        title: "AI-Crop-Disease-Detection-System",
        frontend: "React",
        backend: "Python",
      },
      {
        title: "Heart-Beat-Classification-Using-Deep-Learning",
        frontend: "React",
        backend: "Python",
      },
      {
        title: "Stock Price Prediction",
        frontend: "HTML",
        backend: "Python",
      },
    ]);
  }, []);

  return (
    <div className="container">
      <h1>PROFILE</h1>

      {/* Personal (left) + Education (right) */}
      <div className="top-row">
        <PersonalDetails
          name="Aakash S"
          phone="Your Number"
          age="22"
          bloodGroup="O+"
          linkedin="https://www.linkedin.com/in/aakash-s-5819b8297/"
          github="https://github.com/AakashSsiva"
        />

        <EducationDetails
          degree="1st MCA"
          year="1st Year"
          college="Adhiyamaan College of Engineering, Hosur"
          duration="2025-2027"
        />
      </div>

      {/* Project Details — centred below */}
      <div className="project-row">
        <ProjectDetails projects={projects} />
      </div>
    </div>
  );
}

export default App;
