import { useState } from "react";

function GeneralInfo({ genInfo, setGenInfo }) {
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSubmit({
      ...genInfo,
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
      <h2>General Information</h2>
      {!submit ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={genInfo.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={genInfo.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={genInfo.phone}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>{genInfo.name}</h3>
          <p>Email: {genInfo.email}</p>
          <p>Phone: {genInfo.phone}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}

export default GeneralInfo;
