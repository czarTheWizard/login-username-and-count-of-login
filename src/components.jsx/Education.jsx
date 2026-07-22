import { useState } from "react";

function Education({ EducInfo, setEducInfo }) {
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEducInfo({
      ...EducInfo,
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
      <h2>Education</h2>

      {!submit ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="school"
            placeholder="School"
            value={EducInfo.school}
            onChange={handleChange}
          />

          <input
            type="text"
            name="study"
            placeholder="Field of Study"
            value={EducInfo.study}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={EducInfo.date}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>{EducInfo.school}</h3>
          <p>{EducInfo.study}</p>
          <p>{EducInfo.date}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}
export default Education;
