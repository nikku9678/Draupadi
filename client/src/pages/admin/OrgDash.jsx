import React, { useEffect, useState } from 'react'
import './Admin.css'
import axios from 'axios'
import { Base_url } from '../../config'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/admin/spk/del/${id}`);
      toast.success("Speaker deleted successfully");
      // Refresh the page or update the state to remove the deleted speaker
      setOrgList(orgList.filter((speaker) => speaker._id !== id));
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.log("Server responded with error:", error.response.data.message);
        toast.error(`Server responded with error: ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received:", error.request);
        toast.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error setting up request:", error.message);
        toast.error(`Error setting up request: ${error.message}`);
      }
    }
  };
  

  const handleVerified = async (id) => {
    try {
      const { data } = await axios.put(
        `${Base_url}/user/update/verify/${id}`,
        { verified: true },
        {
          withCredentials: true,
        }
      );
      console.log("Verification status updated successfully:", data);
      toast.success("Speaker verified successfully");
    
      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.log("Error updating verification status:", error);
      toast.error("Failed to verify speaker");
    }
  };
  const notHandleVerified = async (id) => {
    try {
      const { data } = await axios.put(
        `${Base_url}/user/update/verify/${id}`,
        { verified: false },
        {
          withCredentials: true,
        }
      );
      console.log("Verification status updated successfully:", data);
      toast.success("Speaker verified successfully");
    
      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.log("Error updating verification status:", error);
      toast.error("Failed to verify speaker");
    }
  };

  return (
    <div className='table-data'>
      <div>
      <div className="user-table">
        <table id="customers">
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Verified</th>
    <th>Action</th>
    <th>info</th>
    <th>Delete</th>
  </tr>
 {
    orgList.map((user)=>{
       return (
        <><tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
   
        <td>{user.verified ? 'Success' : 'Pending'}</td>
                  <td>
                      {user.verified ? <><button style={{backgroundColor:user.verified?'red':'green'}} className='verify-btn' onClick={() => notHandleVerified(user._id)}>Not verified</button></>:<><button style={{backgroundColor:user.verified?'red':'green'}} className='verify-btn' onClick={() => handleVerified(user._id)}>Verify</button></>}
                      
                      
                
                  </td>
                  <td>
                    <Link to={`/speaker/info/${user._id}`}>
                      <i className="fa-solid fa-circle-info"></i>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user._id)}><i class="fa-solid fa-trash"></i></button>
                  </td>
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
