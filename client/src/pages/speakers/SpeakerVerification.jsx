import React, { useState } from "react";
import "./SpeakerVerification.css";
import { Base_url } from "../../config";
import axios from "axios";
import toast from "react-hot-toast";
const SpeakerVerification = () => {
  const { user } = JSON.parse(localStorage.getItem("user")) || "";
  const [formData, setFormData] = useState({
    name: "nkk",
    email: "sssss",
    phone: "62365",
    dob: "hbasdk",
    address: "basvkdjv",
    country: "kjbsadvkj",
    state: "Bihar",
    city: "asdsavd",
    company: "asdsavd",
    postalCode: "847101",
    industry: "hbavc as",
    experience: "10",
    experties: "sadvsa",
    qualification: "basdvchj",
    image: "jnsdkv",
    bio: "asdfvas",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${Base_url}/speaker/post/info`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      if (data.success) {
        toast.success("Info sent Successfully");
        // Redirect or show success message as needed
      }
    } catch (error) {
      console.log(error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      {user && user.verified===true ? <div className="verified">You are already verified</div>:<section className="verify">
        <header>Apply for Speaker</header>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input
                type="text"
                name="dob"
                placeholder="Enter birth date"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          {/* <div className="gender-box">
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
          </div> */}

          <div className="input-box address">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              required
              onChange={handleChange}
            />

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
              <input
                type="text"
                name="state"
                placeholder="Enter Your State"
                required
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <input
                type="text"
                name="city"
                placeholder="Enter Your City"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Enter Your Postal code"
                required
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                required
                onChange={handleChange}
              />
              <input
                type="number"
                name="experience"
                placeholder="Your Experience"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label>Your industry</label>
              <input
                type="text"
                name="industry"
                placeholder="Enter your industry"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label>Your experience</label>
              <input
                type="text"
                name="experience"
                placeholder="Enter experience"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label>Your experties</label>
              <input
                type="text"
                name="experties"
                placeholder="Enter your Area of experties"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label>Your Bio</label>
              <input
                type="text"
                name="bio"
                placeholder="Enter bio"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label>qualification</label>
              <input
                type="text"
                name="qualification"
                placeholder="Enter qualification"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>}
    </div>
  );
};

export default SpeakerVerification;
