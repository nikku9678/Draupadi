import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Base_url } from '../../config';
import axios from 'axios'
import './SpeakerInfo.css'
const SpeakerInfo = () => {
    const {id} =useParams();
    const [user,setUser] =useState('')
    useEffect(() => {
        // setLoading(true);
        axios
          .get(`${Base_url}/speaker/info/${id}`)
          .then((response) => {
            setUser(response.data.speaker);
            // setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            // setLoading(false);
          });
      }, []);
      console.log(user)
  return (
    <div>
      <div className="s-info">
        <div className="s-info-left">
          <img
            src="https://www.img-int.org/sites/default/files/img-logo.png"
            alt=""
          />
          {/* <h2>{user.name} {!user.verified && <><i class="fa-solid fa-check-double" style={{color:'blue'}}></i></>}</h2>
          <h3>{user.email}</h3> */}
         
        </div>
        <div className="s-basic-info">
          <div className='top'>
          <h1>Speaker Info</h1>
          {/* <button onClick={()=>setIsEditing(!isEditing)}>Edit profile</button> */}
          </div>

        <><div className="s-detail">
            <ul>
              <li>Name: {user.name}</li>
              <li>Email: {user.email}</li>
              <li>Phone no: {user.phone}</li>
              <li>Bio : {user.bio}</li>
              <li>Company :{user.company}</li>
              <li>Industry: {user.industry}</li>
              <li>Experties: {user.experties}</li>
              <li>Qualification: {user.qualification}</li>
              <li>Experience: {user.experience}</li>
              <li>Country: {user.country} </li>
              <li>State: {user.state}</li>
              <li>City: {user.city}</li>
            </ul>
        </div></>      
        </div>
      

      </div>
    </div>
  )
}

export default SpeakerInfo
