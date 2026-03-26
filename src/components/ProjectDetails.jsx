function ProjectDetails({ projects }) {
  return (
    <div className="card">
      <h2>Project Details</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong>
            <br />
            Frontend: {project.frontend} &nbsp;|&nbsp; Backend: {project.backend}
          </li>
        ))}
      </ul>
      <p style={{ marginTop: "12px" }}>
        GitHub:{" "}
        <a
          href="https://github.com/AakashSsiva"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/AakashSsiva
        </a>
      </p>
    </div>
  );
}

export default ProjectDetails;