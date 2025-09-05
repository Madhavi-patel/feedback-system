import React, { useState } from "react";
import "./register.css";
import email_icon from "../../../assets/mail.png";
import password_icon from "../../../assets/password.png";
import person3_icon from "../../../assets/person3.png";
import adduser_icon from "../../../assets/add-user.png";
import onlinelearning_icon from "../../../assets/online-learning.png";
import semister_icon from "../../../assets/semister.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    enrollmentNumber: "",
    course: "",
    semester: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form before submit
  const validateForm = () => {
    const { firstName, lastName, enrollmentNumber, course, semester, email, password } = formData;

    if (!firstName || !lastName || !enrollmentNumber || !course || !semester || !email || !password) {
      return "All fields are required.";
    }
    if (!/^[a-zA-Z]+$/.test(firstName)) return "First Name must contain only letters.";
    if (!/^[a-zA-Z]+$/.test(lastName)) return "Last Name must contain only letters.";
    if (!/^[0-9]+$/.test(enrollmentNumber)) return "Enrollment number must be numeric.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email format.";
    if (password.length < 6) return "Password must be at least 6 characters long.";

    return null;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed.");
      } else {
        setSuccess("✅ Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000); // redirect after 2s
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>

        <form onSubmit={handleSubmit} className="inputs">
          <div className="input-group">
            <img src={person3_icon} alt="First Name" className="icon" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <img src={person3_icon} alt="Last Name" className="icon" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <img src={adduser_icon} alt="Enrollment Number" className="icon" />
            <input
              type="number"
              name="enrollmentNumber"
              placeholder="Enrollment Number"
              value={formData.enrollmentNumber}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <img src={onlinelearning_icon} alt="Course" className="icon" />
            <select
              className="select-group"
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Choose course</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          <div className="input-group">
            <img src={semister_icon} alt="Semester" className="icon" />
            <select
              className="select-group"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
            >
              <option value="">Choose SEM</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="input-group">
            <img src={email_icon} alt="Email" className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <img src={password_icon} alt="Password" className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Error / Success Message */}
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
          {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}

          <div className="forgot-password">
            Already have an account? <a href="/login">Log in</a>
          </div>

          <div className="submit-container">
            <button type="submit" className="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
