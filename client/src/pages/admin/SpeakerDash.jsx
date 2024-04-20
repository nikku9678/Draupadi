import React, { useEffect, useState } from 'react'
import './Admin.css'
import axios from 'axios'
import { Base_url } from '../../config'
import { Link } from 'react-router-dom'
const SpeakerDash = () => {
    const [speakerList,setSpeakerList] =useState([])
    useEffect(()=>{

        axios
         .get(`${Base_url}/admin/all-speaker`, {
           withCredentials: true,
         })
         .then((res) => {
           console.log(res.data.user);
           setSpeakerList(res.data.user);
         })
         .catch((e) => {
           console.log("e.response.message");
         });
   },[])

  return (
    <div className='table-data'>
      <div>
      <div className="user-table">
        <table id="customers">
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>info</th>
    <th>Delete</th>
  </tr>
 {
    speakerList.map((user)=>{
       return (
        <><tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td><Link to={`/speaker/info/${user._id}`}><i className="fa-solid fa-circle-info"></i></Link></td>
        <td><Link to={`/speaker/del/${user._id}`}><i className="fa-solid fa-trash"></i></Link></td>
      </tr></>
       )
    })
 }
 
</table>
        </div>
    </div>
    </div>
  )
}

export default SpeakerDash
