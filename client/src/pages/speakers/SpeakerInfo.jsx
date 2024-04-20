import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Base_url } from '../../config';
import axios from 'axios'
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
        {user.name}
      </div>
    </div>
  )
}

export default SpeakerInfo
