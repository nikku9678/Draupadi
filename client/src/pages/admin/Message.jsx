import React, { useEffect, useState } from 'react'
import './Admin.css'
import axios from 'axios'
import { Base_url } from '../../config'
const Message = () => {
    const [msg,setMsg] =useState([])
    useEffect(()=>{

        axios
         .get(`${Base_url}/admin/all-msg`, {
           withCredentials: true,
         })
         .then((res) => {
           console.log(res.data.msg);
           setMsg(res.data.msg);
         })
         .catch((e) => {
           console.log("e.response.message");
         });
   },[])

   console.log(msg)
  return (
    <div className='table-data'>
      <div>
      <div className="user-table">
        <table id="customers">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Message</th>
  </tr>
 {
    msg.map((msg)=>{
       return (
        <><tr key={msg._id}>
        <td>{msg._id}</td>
        <td>{msg.name}</td>
        <td>{msg.email}</td>
        <td>{msg.phone}</td>
        <td>{msg.message}</td>
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

export default Message
