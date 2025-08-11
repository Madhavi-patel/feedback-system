import React, { useState } from "react";
import "./register.css";

const semesters = ["Sem-1", "Sem-2", "Sem-3", "Sem-4"];

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    enrollment: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    course: "MCA",
    semester: semesters[0],
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First Name required";
    if (!form.lastName.trim()) newErrors.lastName = "Last Name required";
    if (!form.enrollment.trim()) newErrors.enrollment = "Enrollment Number required";
    if (!form.phone.trim() || form.phone.length !== 10) newErrors.phone = "Valid 10-digit Phone Number required";
    if (
      !form.email.trim() ||
      !form.email.includes("@") ||
      !form.email.includes(".") ||
      !form.email.endsWith(".ac.in")
    )
      newErrors.email = "Valid .ac.in Email required";
    if (!form.password) newErrors.password = "Password required";
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit logic here
      alert("Registration Successful!");
    }
  };

  return (
    <div className="register-bg">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <div className="form-group">
          <label>First Name</label>
          <input name="firstName" type="text" value={form.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input name="lastName" type="text" value={form.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>Enrollment Number</label>
          <input name="enrollment" type="number" value={form.enrollment} onChange={handleChange} />
          {errors.enrollment && <span className="error">{errors.enrollment}</span>}
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input name="phone" type="number" value={form.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <div className="form-group">
          <label>Course</label>
          <select name="course" value={form.course} onChange={handleChange}>
            <option value="MCA">MCA</option>
          </select>
        </div>
        <div className="form-group">
          <label>Semester</label>
          <select name="semester" value={form.semester} onChange={handleChange}>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>
        <button className="register-btn" type="submit">Register</button>
      </form>
    </div>
  );
}