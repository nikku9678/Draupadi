import React, { useState } from 'react';
import './Message.css'
import axios from 'axios'
import { Base_url } from '../../config';
import toast from 'react-hot-toast';
const HelpMessage = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
    const { data } = await axios.post(
        `${Base_url}/help/message`,
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
       
        toast.success("Message send Successfully");
        // navigate("/");
      }
    } catch (error) {
        console.log(error)
    }
    console.log(formData);
  };

  return (
    <div>
      <section className="msg">
        <header>Message</header>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            <label>Enter your full Name</label>
            <input type="text" name="name" required onChange={handleChange} />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" required onChange={handleChange} />
          </div>
          <div className="input-box">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter phone number" onChange={handleChange} />
          </div>
          <div className="input-box">
            <label>Message</label>
            <textarea name="message" onChange={handleChange}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default HelpMessage;
