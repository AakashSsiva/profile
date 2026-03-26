function EducationDetails({ degree, year, college, duration }) {
  return (
    <div className="card">
      <h2>Education Details</h2>
      <p>Degree: {degree}</p>
      <p>Year: {year}</p>
      <p>College: {college}</p>
      <p>Duration: {duration}</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/aakash-s-5819b8297/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/aakash-s-5819b8297
        </a>
      </p>
    </div>
  );
}

export default EducationDetails;