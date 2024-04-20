import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import axios from "axios";
import { Base_url } from "../../config";
import SpeakerList from "../../pages/speakers/SpeakerList";
const Organization = () => {
  const [userList,setUserList]  =useState([])
  const [user, setUser] = useState("");
  const [speaker, setSpeakerList] = useState([]);
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(activeTab);
  };


  useEffect(() => {
    axios
      .get(`${Base_url}/user/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.user);
        setUser(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
console.log(user)
  return (
    <div>
      <div className="dashboard">
        <div className="user-left">
          <ul>
            <li onClick={() => handleTabClick("profile")}>Profile</li>
            <li onClick={() => handleTabClick("All-Speaker")}>All Speaker</li>

            <li onClick={() => handleTabClick("All-user")}>All-user</li>
          </ul>
        </div>
        <div className="user-right">
          {activeTab === "profile" && (
            <>
              <div className="info-left">
                <img
                  src="https://www.img-int.org/sites/default/files/img-logo.png"
                  alt=""
                />
                <h2>
                  {user.name}{" "}
                  {!user.verified && (
                    <>
                      <i
                        class="fa-solid fa-check-double"
                        style={{ color: "blue" }}
                      ></i>
                    </>
                  )}
                </h2>
                <h3>{user.email}</h3>
              </div>
            </>
          )}
          {activeTab === "All-Speaker" && <> <div>
      <div className="user-table">
        <table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  {speaker.map((sp)=><><tr>
    <td>{sp.name}</td>
    <td>{sp.email}</td>
    <td>{sp.phone}</td>
  </tr></>)}

</table>
        </div>
    </div></>}
          {activeTab === "All-user" && <><div>
      <div className="user-table">
        <table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  {userList.map((u)=><><tr>
    <td>{u.name}</td>
    <td>{u.email}</td>
    <td>{u.phone}</td>
  </tr></>)}

</table>
        </div>
    </div></>}
        </div>
      </div>
    </div>
  );
};

export default Organization;
