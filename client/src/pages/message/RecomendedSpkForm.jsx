import React, { useState } from 'react';
import './Message.css'
import axios from 'axios'
import { Base_url } from '../../config';
import toast from 'react-hot-toast';
const RecomendedSpkForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    speaker_name: '',
    speaker_email: '',
    speaker_phone: '',
    speaker_id: ''
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
        `${Base_url}/recomended/info`,
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
        <header>Recomended Speaker</header>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            <label>Enter your full Name</label>
            <input type="text" name="name" required onChange={handleChange} />
          </div>

          <div className="input-box">
            <label>Name of the person you're recommending</label>
            <input type="text" name="speaker_name" required onChange={handleChange} />
          </div>
          <div className="input-box">
            <label>Name of the person you're recommending</label>
            <input type="email" name="speaker_email" required onChange={handleChange} />
          </div>
          <div className="input-box">
            <label>Social media contact of the person you are recommending</label>
            <input type="text" name="speaker_id" required onChange={handleChange} />
          </div>
          <div className="input-box">
            <label>E-mail/Phone number of the person you are recommending</label>
            <input type="text" name="speaker_phone" required onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default RecomendedSpkForm;
