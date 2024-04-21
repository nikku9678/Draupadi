import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <div className="home-cont1">
        <img src="images/homepage/homepage-slider1.jpg" alt="" />
      </div>
      {/* session 1 */}
      <div className="home-session">
        <div className="home-session-img">
          <img className="" src="images/homepage/1.webp" alt="Speaker" />
        </div>
        <div className="home-session-text">
          <h2 className="home-session-title">Take the Stage</h2>
          <p className="home-session-p">
            If you're a speaker, panellist, thought leader or knowledge expert
            in your field, sign up to help event organisers find and invite you
            to leadership-level panels and conferences.
          </p>
          <button className="home-session-button">Sign-up</button>
        </div>
      </div>

      {/* session 2 */}
      <div className="home-session">
        <div className="home-session-text">
          <h2 className="home-session-title">Take the Stage</h2>
          <p className="home-session-p">
            If you’re a speaker, panellist, thought leader or knowledge expert
            in your field, sign up to help event organisers find and invite you
            to leadership-level panels and conferences.
          </p>
          <button className="home-session-button">Recommend now</button>
        </div>
        <div className="home-session-img">
          <img className="" src="images/homepage/2.webp" alt="Speaker" />
        </div>
      </div>

      {/* session 3 */}
      <div className="home-session">
        <div className="home-session-img">
          <img className="" src="images/homepage/3.webp" alt="Speaker" />
        </div>
        <div className="home-session-text">
          <h2 className="home-session-title">Take the Stage</h2>
          <p className="home-session-p">
            If you’re a speaker, panellist, thought leader or knowledge expert
            in your field, sign up to help event organisers find and invite you
            to leadership-level panels and conferences.
          </p>
          <button className="home-session-button">
            A no-spam WhatsApp group
          </button>
        </div>
      </div>

      {/* session 4 */}
      <div className="home-mission">
        <h2 className="home-session-title">Our Mission</h2>
        <p className="home-mission-p">
          2022 may be a better year for women and we may be seeing more action
          and revolution compared to any era before, but there continue to be
          areas that were left behind in this fight. Active participation of
          women in leadership-level panels and conferences is one of those
          areas.
        </p>
        <button className="home-session-button">Read More</button>
      </div>

      {/* session 5 */}

      <div className="home-session-5">
        <h2>
          Join the Draupadi ecosystem as we build spaces for women to thrive in.
        </h2>
        <div className="home-session-emailbox">
          <input type="text" placeholder="Email Address*" />
          <button className="home-session-button">Subscribe</button>
        </div>
      </div>
      {/* session 6 */}

      <div className="home-session-6">
        <div className="home-session-6-f">
          <div className="home-session6-img">
            <img className="" src="images/logo.webp" alt="Speaker" />
          </div>
          <div>
            <p>
              Making your stage, your panels, and your conferences diverse,
              inclusive and representative. Tap into a large network of women
              experts and speakers across industries.
            </p>
            <p>
              An initiative by <Link to="/">Decoding Draupadi</Link>.
            </p>
            <p>
              <Link to="/">Supported by C4E</Link>
            </p>
          </div>
        </div>
        <div className="home-session-6-s">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Why the Dais?</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/support">Help</Link>
            </li>
          </ul>
        </div>
        <div className="home-session-6-t">
          <ul>
            <li>
              <Link to="/">Find An Expert</Link>
            </li>
            <li>
              <Link to="/speaker-register">Register As An Speaker</Link>
            </li>
            <li>
              <Link to="/org-register">Register As An Organization</Link>
            </li>
            <li>
              <Link to="/recomend-speaker">Recommended An Speaker</Link>
            </li>
            <li>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-square-instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Homepage;