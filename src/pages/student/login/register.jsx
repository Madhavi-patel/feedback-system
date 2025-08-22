import React, { useState } from 'react'
import './register.css';
import email_icon from "../../../assets/mail.png";
import password_icon from "../../../assets/password.png";
import person3_icon from "../../../assets/person3.png";
import adduser_icon from "../../../assets/add-user.png";
import onlinelearning_icon from "../../../assets/online-learning.png";
import semister_icon from "../../../assets/semister.png";

const Register = () => {

  const [action, setAction] = useState("Sign Up");
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>
          {action}
        </div>
        <div className='underline'></div>
        <div className='inputs'>
          {action==="Log In"?<div></div>:
          <>
            <div className='input-group'>
              <img src={person3_icon} alt="Name" className='icon' />
              <input type="text" placeholder="First Name" />
            </div>
            <div className='input-group'>
              <img src={person3_icon} alt="Name" className='icon' />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className='input-group'>
              <img src={adduser_icon} alt="Name" className='icon' />
              <input type="number" placeholder="Enrollment Number" />
            </div>
            <div className='input-group'>
              <img src={onlinelearning_icon} alt="Name" className='icon' />
              <select className='select-group'>
                <option value="">Choose course</option>
                <option value="MCA">MCA</option>
              </select>
            </div>
            <div className='input-group'>
              <img src={semister_icon} alt="Name" className='icon' />
              <select className='select-group'>
                <option value="">Choose SEM</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </>}
          <div className='input-group'>
            <img src={email_icon} alt="Email"  className='icon'  />
            <input type="email" placeholder="Email" />
          </div>
          <div className='input-group'>
            <img src={password_icon} alt="Password" className='icon' />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action==="Log In"?<div></div>:
          <>
        <div className='forgot-password'>
            Already have an account? <a href="/Log In">Log in</a>
        </div>
        </>}
        <div className='submit-container'>
          <button className={action === "Log In" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
          <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Log In")}}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Register