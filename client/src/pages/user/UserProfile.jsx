import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Base_url } from "../../config";
import axios from "axios";

const UserProfile = () => {
  let {user} = JSON.parse(localStorage.getItem("user"))
  
  return (
    <div>
      <div className="s-info">
        <div className="s-info-left">
          <div className="img">
            <img
              src="https://www.img-int.org/sites/default/files/img-logo.png"
              alt=""
            />
            <h2>Name : {user.name}</h2>
          </div>

          <div className="spk-info">
            <ul>
              <li>
                <b>Email: </b>{user.email}
              </li>
              <li>
                <b>Phone: </b>{user.phone}
              </li>
              <li>
                <b>Age: </b>{user.age} 25
              </li>
            </ul>
          </div>
        </div>
        <div className="s-basic-info">
          <div className="bio">
            <label htmlFor="">Bio</label>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
              mollitia. Placeat, repudiandae voluptas id minima doloribus
              molestiae quia deserunt odio architecto, nam ullam temporibus
              veniam aliquid earum eum quos adipisci.
            </p>
          </div>
          <div className="bio">
            <label htmlFor="">Professional Detail</label>
            <ul>
              <li><b>Company: </b>Google</li>
              <li><b>Industry: </b>Google</li>
              <li><b>Company: </b>Google</li>
              <li><b>Company: </b>Google</li>
            </ul>
          </div>
          <div className="bio">
            <label htmlFor="">Social media</label>
            <ul>
              <li><b>Linkedin: </b>Google</li>
              <li><b>Instagram: </b>Google</li>
              <li><b>Facebook: </b>Google</li>
          
            </ul>
          </div>
          <div className="bio">
            <label htmlFor="">Location</label>
            <ul>
              <li><b>Country: </b>{user.country}</li>
              <li><b>State: </b>{user.state}</li>
              <li><b>City: </b>{user.city}</li>
          
            </ul>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
