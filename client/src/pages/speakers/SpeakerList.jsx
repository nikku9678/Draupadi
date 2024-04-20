import React, { useEffect,useState } from 'react'
import { Base_url } from '../../config';
import axios from 'axios'
const SpeakerList = () => {
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
    <div>
       <div className="event" style={{marginTop:'50px'}}>
       {speaker.map((speaker)=><>
        <div className="event-card">
          <div>
            <img
              src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt=""
            />
          </div>
          <div className="event-detail">
            <h2>Name : {speaker.name}</h2>
            <p>
              <h4>Industry</h4> : Dropati
            </p>
            <p>
              <h4>Date & Time</h4> : April 28,2024, 7PM
            </p>
            <p>
              <h4>Location</h4> : Delhi
            </p>
            <p>
              <h4>Organizer</h4> : Flatmate
            </p>
            <p>
              <h4>Description </h4>: Lorem ipsum dolor sit.
            </p>
          </div>
        </div>
       
       </>)}
       
      </div>
    </div>
  )
}

export default SpeakerList
