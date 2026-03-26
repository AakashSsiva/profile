function PersonalDetails({ name, phone, age, bloodGroup, linkedin, github }) {
  return (
    <div className="card">
      <h2>Personal Details</h2>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Age: {age}</p>
      <p>Blood Group: {bloodGroup}</p>
      <p>
        LinkedIn:{" "}
        <a href={linkedin} target="_blank" rel="noreferrer">
          linkedin.com/in/aakash-s-5819b8297
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href={github} target="_blank" rel="noreferrer">
          github.com/AakashSsiva
        </a>
      </p>
    </div>
  );
}

export default PersonalDetails;