import React,{useEffect, useState} from "react";
import "./User.css";
import UserAction from "./UserAction";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import axios from 'axios'
import { Base_url } from "../../config";
import SpeakerEvent from "./SpekearEvent";
const User = () => {
  const [user,setUser] =useState('')
  const [post,setPost] =useState([])
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(activeTab);
  };

  console.log(user,"user")
  const updateNoteHandler = async (id) => {
    console.log("id")
    try {
      const { data } = await axios.put(`${Base_url}/user/update/${id}`,{}, {
        withCredentials: true,
      });

    alert("update succcess")
    window.location.reload();
    if(data.success){
      setUser(data.user)
    }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{

    axios
      .get(`${Base_url}/user/profile`, {
        withCredentials: true,
      })
      .then((res) => {
       console.log(res.data.user)
       setUser(res.data.user)
      })
      .catch((error) => {
        console.log(error);
      });
},[])
  useEffect(()=>{

     axios
      .get(`${Base_url}/user/speaker-post`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.speaker_post);
        setPost(res.data.speaker_post);
      })
      .catch((e) => {
        console.log("e.response.message");
      });
},[])

console.log(post)
  return (
    <div className="dashboard">
      <div className="user-left">
        <ul>
          <li onClick={() => handleTabClick("profile")}>
            
Profile
          </li>
          <li onClick={() => handleTabClick("action")}>
           My Events
          </li>
          <li  onClick={() => handleTabClick("edit-profile")}>
            Edit Profile
          </li>
        
        </ul>
      </div>
      <div className="user-right">
       
        {activeTab === "profile" && <UserInfo user={user} id={user._id}
        key={user._id} updateNoteHandle={updateNoteHandler}/>}
        {activeTab === "action" && <SpeakerEvent post={post} />}
        {activeTab === "edit-profile" && <>edit profile</>}

        
      </div>
    </div>
  );
};

export default User;
