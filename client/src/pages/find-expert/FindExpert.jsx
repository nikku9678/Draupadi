import React, { useEffect,useState } from 'react'
import { Base_url } from '../../config';
import axios from 'axios'
import './FindExpert.css'
import { Link } from 'react-router-dom';
const FindExpert = () => {
  const [speaker,setSpeaker]  =useState([])
    useEffect(()=>{
    axios
      .get(`${Base_url}/user/verified-speaker`, {
        withCredentials: true,
      })
      .then((res) => {
       console.log(res.data.user)
       setSpeaker(res.data.user)
      })
      .catch((error) => {
        console.log(error);
      });
  },[])

  console.log(speaker)
  return (
    <div className='expert'>
      <div className='sec-1'>
        <h2>All verified Speaker</h2>
      </div>
       <div className="sec-2" style={{marginTop:'50px'}}>
       {speaker.map((speaker)=><div key={speaker._id} id={speaker._id}>
        <div className="exp-card">
          <div>
            <img
              src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt=""
            />
          </div>
          <div className="exp-detail">
            <span id='name'><b>{speaker.name}</b></span>
            <p id='company'>
              {speaker.company} Google
            </p>
           
            <p id='city'>
               {speaker.city} <i class="fa-solid fa-location-dot"></i> Mumbai
            </p>
            <p id='category'>
              Invite
            </p>
            <div id='visit-btn'>
              <Link to={`/spk-profile/${speaker._id}`}><i class="fa-solid fa-arrow-right"></i> </Link>
            </div>
          </div>
        </div>
       
       </div>)}
       
      </div>
    </div>
  )
}

export default FindExpert
