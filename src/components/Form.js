import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    feedback: "",
    getNewsletter: false,
    gender: "",
    employmentStatus: "",
  });

  // console.log(formData);

  function handleChange(event) {
    // console.log(event.target);
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }

  return (
    <form>
      <h1>Sample Form</h1>
      <br />
      <label htmlFor="first-name">First Name: </label>
      <input
        id="first-name"
        type="text"
        placeholder="First Name"
        minLength={1}
        aria-label="Enter your first name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <label htmlFor="middle-name">Middle Name: </label>
      <input
        id="middle-name"
        type="text"
        placeholder="Middle Name"
        minLength={1}
        aria-label="Enter your middle name"
        onChange={handleChange}
        name="middleName"
        value={formData.middleName}
      />
      <label htmlFor="last-name">Last Name: </label>
      <input
        id="last-name"
        type="text"
        placeholder="Last Name"
        minLength={1}
        aria-label="Enter your last name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        placeholder="Email address"
        minLength={11}
        aria-label="Enter your email address"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <br />
      <label htmlFor="feedback">Comments: </label>
      <textarea
        id="feedback"
        placeholder="Your feedback here..."
        aria-label="Enter your comments here"
        onChange={handleChange}
        name="feedback"
        rows={5}
        cols={20}
        value={formData.feedback}
      />
      <br />

      <input
        type="checkbox"
        id="getNewsletter"
        aria-label="Agree to newsletter"
        onChange={handleChange}
        name="getNewsletter"
        checked={formData.getNewsletter}
      />
      <label htmlFor="getNewsletter">
        {" "}
        Sign me up for the weekly newsletter
      </label>
      <br />
      <fieldset>
        <legend>Select the gender you identify with</legend>

        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange="handleChange"
        />
        <label htmlFor="male"> Male</label>
        <br />

        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        <label htmlFor="female"> Female</label>
        <br />

        <input
          type="radio"
          id="other"
          name="gender"
          value="Prefer not to say"
          checked={formData.gender === "Prefer not to say"}
          onChange={handleChange}
        />
        <label htmlFor="other"> Prefer not to say</label>
      </fieldset>
      <fieldset>
        <legend>What is your employment status?</legend>
        <select
          value={formData.employmentStatus}
          name="employmentStatus"
          onChange={handleChange}
        >
          <option value="">-- Choose one --</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </fieldset>
    </form>
  );
}
