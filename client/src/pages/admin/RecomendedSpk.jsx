import React, { useEffect, useState } from 'react'
import './Admin.css'
import axios from 'axios'
import { Base_url } from '../../config'
import { Link } from 'react-router-dom'
const RecommendedSpk = () => {
    const [recomList,setRecomList] =useState([])
    useEffect(()=>{

        axios
         .get(`${Base_url}/admin/get-recomended-spk`, {
           withCredentials: true,
         })
         .then((res) => {
           console.log(res.data.spk);
           setRecomList(res.data.spk);
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
    recomList.map((user)=>{
       return (
        <><tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.speaker_email}</td>
        <td>{user.speaker_phone}</td>
      
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

export default RecommendedSpk;
