import React, { useEffect, useState } from 'react';
import './Admin.css';
import axios from 'axios';
import { Base_url } from '../../config';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const SpeakerDash = () => {
  const [speakerList, setSpeakerList] = useState([]);

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
      // Show success message
      toast.success("Speaker verified successfully");
      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.log("Error updating verification status:", error);
      // Show error message
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
                    <Link to={`/speaker/del/${user._id}`}>
                      <i className="fa-solid fa-trash"></i>
                    </Link>
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
