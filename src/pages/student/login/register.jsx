import React from 'react'
import './register.css';
import email_icon from "../../../assets/mail.png";
import password_icon from "../../../assets/password.png";
import person_icon from "../../../assets/person.jpg";

'../Assets/password.png'

const Register = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>
          Sign Up
        </div>
        <div className='underline'></div>
        <div className='inputs'>
          <div className='input-group'>
            <img src={email_icon} alt="Email"  className='icon'  />
            <input type="email" placeholder="Email" />
          </div>
          <div className='input-group'>
            <img src={password_icon} alt="Password" className='icon' />
            <input type="password" placeholder="Password" />
          </div>
          <div className='input-group'>
            <img src={person_icon} alt="Name" className='icon' />
            <input type="text" placeholder="Name" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register