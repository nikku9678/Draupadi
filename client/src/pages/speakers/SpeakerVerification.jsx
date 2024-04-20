import React, { useState } from 'react';
import './SpeakerVerification.css';

const SpeakerVerification = () => {
    const {user} = JSON.parse(localStorage.getItem("user")) || ""
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    address: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    previousCompany: '',
    experience: '',
    expertise: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <section className="verify">
        <header>Apply for Speaker</header>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="Enter full name" onChange={handleChange} />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" required onChange={handleChange} />
          </div>

          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input type="tel" name="phoneNumber" placeholder="Enter phone number" onChange={handleChange} />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input type="date" name="birthDate" placeholder="Enter birth date" required onChange={handleChange} />
            </div>
          </div>

          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" id="check-male" name="gender" value="Male" onChange={handleChange} />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-female" name="gender" value="Female" onChange={handleChange} />
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-others" name="gender" value="Prefer not to say" onChange={handleChange} />
                <label htmlFor="check-others">Prefer not to say</label>
              </div>
            </div>
          </div>

          <div className="input-box address">
            <label>Address</label>
            <input type="text" name="address" placeholder="Enter Street address" required onChange={handleChange} />
            <input type="text" name="address2" placeholder="Enter Street address line 2" onChange={handleChange} />
            <div className="column">
              <div className="select-box">
                <select name="country" onChange={handleChange}>
                  <option>Country</option>
                  <option>America</option>
                  <option>India</option>
                  <option>Pakistan</option>
                  <option>Australia</option>
                  <option>Bankok</option>
                  <option>Nepal</option>
                </select>
              </div>
              <input type="text" name="state" placeholder="Enter Your State" required onChange={handleChange} />
            </div>
            <div className="column">
              <input type="text" name="city" placeholder="Enter Your City" required onChange={handleChange} />
              <input type="text" name="postalCode" placeholder="Enter Your Postal code" required onChange={handleChange} />
            </div>
            <div className="column">
              <input type="text" name="previousCompany" placeholder="Your Previous Company" required onChange={handleChange} />
              <input type="text" name="experience" placeholder="Your Experience" required onChange={handleChange} />
            </div>
            <div className="input-box">
              <label>Your Expertise</label>
              <input type="text" name="expertise" placeholder="Enter your Area of expertise" required onChange={handleChange} />
            </div>
            <div className="input-box">
              <label>Bio</label>
              <input type="text" name="bio" placeholder="Enter About Yourself" required onChange={handleChange} />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default SpeakerVerification;
