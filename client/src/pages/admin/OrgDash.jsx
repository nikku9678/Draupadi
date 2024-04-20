import React, { useEffect, useState } from 'react'
import './Admin.css'
import axios from 'axios'
import { Base_url } from '../../config'
const SpeakerDash = () => {
    const [orgList,setOrgList] =useState([])
    useEffect(()=>{

        axios
         .get(`${Base_url}/admin/all-org`, {
           withCredentials: true,
         })
         .then((res) => {
           console.log(res.data.user);
           setOrgList(res.data.user);
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
    <th>Role</th>
  </tr>
 {
    orgList.map((user)=>{
       return (
        <><tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>Germany</td>
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
