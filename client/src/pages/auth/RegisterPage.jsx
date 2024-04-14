import React, { useState } from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    
    email: "",
    password:"",
    phoneNumber: "",
    gender: "",
    qualifications: "",
    expertise: "",
    experience: "",
    aboutYourself: "",
    organization: "",
    designation: "",
    role: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };
  return (
    <div className="login-container">
      <div className="form-Box">
        <header>
          <h1 id="title">Register</h1>
        </header>
        <form>
        
        {/* <label >Register As :</label><br/> */}
        <select id="options" name="role" value={selectedOption}  onChange={handleOptionChange}>
          <option value="">Select Role</option>
          <option value="Expert">Expert</option>
          <option value="Event Organizers">Event Organizers</option>
          <option value="Audience">Audience</option>
        </select>
          <input type="text" name="fullName"placeholder="Full Name" onChange={handleChange}/>
          
          <input type="email" name="email" placeholder="Enter email" onChange={handleChange}/>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter phone number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={handleChange}/>
          <input type="password" name="password"placeholder="Password" onChange={handleChange}/>

          {/* <input type="text" placeholder="Tell me about yourself" onChange={handleChange}/>
          <input type="text" placeholder="Qualification" onChange={handleChange}/>
          <input type="text" placeholder="expertise" onChange={handleChange}/>
          <input type="text" placeholder="organisation or company name" onChange={handleChange}/>
          <input type="text" placeholder="your designation in organisation" onChange={handleChange}/> */}
          {/* <input type="number" placeholder="Experience(in years)" onChange={handleChange}/> */}
          <input type="button" value="Sign Up" id="signinbtn" onClick={handleSubmit}/>

          <p className="signup">
            Already Registered? <Link to="/login">Log in</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
