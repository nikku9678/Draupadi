import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <div className="login-container">
      <div className="form-Box">
        <header>
          <h1 id="title">Login</h1>
        </header>
        <form>
          <input type="email" name="email" placeholder="Username or Email address" onChange={handleChange}/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
          <input type="button" value="Login" id="signinbtn" onClick={handleSubmit}/>

          <div className="links">
            <img src="images/auth/FB-ICON.webp" alt="" />
            <img src="/images/auth/google.png" alt="" />
            <img src="/images/auth/linkedIn_PNG26.png" alt="" />
          </div>
          <p className="signup">
            Not a member?<Link to="/register"> Sign Up</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
