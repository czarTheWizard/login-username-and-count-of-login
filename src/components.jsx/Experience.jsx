import { useState } from "react";

function Experience({ ExpInfo, setExInfo }) {
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSubmit({
      ...ExpInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleEdit = () => {
    setSubmit(false);
  };
  return (
    <section>
      <h2>Practical Experience</h2>

      {!submit ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={ExpInfo.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="position"
            placeholder="Position"
            value={ExpInfo.position}
            onChange={handleChange}
          />

          <textarea
            name="responsibilities"
            placeholder="Responsibilities"
            value={ExpInfo.responsibilities}
            onChange={handleChange}
          />

          <input
            type="date"
            name="from"
            value={ExpInfo.from}
            onChange={handleChange}
          />

          <input
            type="date"
            name="to"
            value={ExpInfo.to}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>{ExpInfo.company}</h3>
          <p>Position: {ExpInfo.position}</p>
          <p>Responsibilities: {ExpInfo.responsibilities}</p>
          <p>
            {ExpInfo.from} - {ExpInfo.to}
          </p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}
export default Experience;
