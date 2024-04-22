import React, { useEffect, useState } from 'react';
import './Admin.css';
import axios from 'axios';
import { Base_url } from '../../config';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import toast from 'react-hot-toast';

const SpeakerDash = () => {
  const [speakerList, setSpeakerList] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios
      .get(`${Base_url}/admin/all-speaker`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.user);
        setSpeakerList(res.data.user);
      })
      .catch((e) => {
        console.log("Error fetching speaker list:", e.response.data.message);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/admin/spk/del/${id}`);
      toast.success("Speaker deleted successfully");
      // Refresh the page or update the state to remove the deleted speaker
      setSpeakerList(speakerList.filter((speaker) => speaker._id !== id));
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

  return (
    <div className='table-data'>
      <div>
        <div className="user-table">
          <table id="customers">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Verified</th>
                <th>Actions</th>
                <th>Info</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {speakerList.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.verified ? 'Success' : 'Pending'}</td>
                  <td>
                    {!user.verified && (
                      <button onClick={() => handleVerified(user._id)}>Verify</button>
                    )}
                  </td>
                  <td>
                    <Link to={`/speaker/info/${user._id}`}>
                      <i className="fa-solid fa-circle-info"></i>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SpeakerDash;
