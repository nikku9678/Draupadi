import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // Assuming you're using react-toastify for notifications
import axios from 'axios';
import { Base_url } from '../../config';

const UserInfo = ({ user, id }) => {
  const [isEditing,setIsEditing] =useState(false);
  const [bio, setBio] = useState(user.bio || ''); // Initialize state with user's bio
  const [phone, setPhone] = useState(user.phone || ''); // Initialize state with user's phone
  const [company, setCompany] = useState(user.company || ''); 
  const [industry, setIndustry] = useState(user.industry || ''); 
  const [experties, setExperties] = useState(user.experties || ''); 
  const [qualification, setQualification] = useState(user.qualification || ''); 
  const [city, setCity] = useState(user.city || ''); 
  const [country, setCountry] = useState(user.country || ''); 
  const [state, setState] = useState(user.state || ''); 
  const [experience, setExperience] = useState(user.experience || ''); 

  const handleEditUser = () => {
    console.log("edit")
    console.log(id)
    const data = {
        industry,qualification,experties,bio ,phone,country,city,state ,experience

    };

     axios
      .put(`http://localhost:8080/api/v1/user/update/${id}`, data,{
        headers: {
            "Content-Type": "application/json",
          },
        withCredentials: true,
      })
      .then(() => {
        toast.success("User information updated successfully"); // 
        setIsEditing(!isEditing);
        window.location.reload()
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again later."); // 
        console.log(error);
      });
  };

  return (
    <div>
      <div className="user-info">
        <div className="info-left">
          <img
            src="https://www.img-int.org/sites/default/files/img-logo.png"
            alt=""
          />
          <h2>{user.name} {!user.verified && <><i class="fa-solid fa-check-double" style={{color:'blue'}}></i></>}</h2>
          <h3>{user.email}</h3>
         
        </div>
        <div className="user-basic-info">
          <div className='top'>
          <h2>Basic info</h2>
          <button onClick={()=>setIsEditing(!isEditing)}>Edit profile</button>
          </div>

          {
            !isEditing ? <><div className="user-detail">
            <ul>
              <li>Name: {user.name}</li>
              <li>Bio : {user.bio}</li>
              <li>Phone no: {user.phone}</li>
              <li>Company : {user.company}</li>
              <li>Industry: {user.industry}</li>
              <li>Experties: {user.experties}</li>
              <li>Qualification: {user.qualification}</li>
              <li>Experience: {user.experience}</li>
              <li>Country: {user.country}</li>
              <li>State: {user.state}</li>
              <li>City: {user.city}</li>
             
            </ul>
        </div></>:<> <div className="edit-info">
          <div>
            <label>Bio</label>
            <textarea
              type="text"
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div>
            <label>Experience</label>
            <input
              type="number"
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div>
            <label>Industry</label>
            <input
              type="text"
              name="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>
          <div>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="btn">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
              onClick={handleEditUser}
            >
              Save
            </button>
          </div>
          </div></>
          }
         
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
