// import React, { useState } from "react";
// import email_icon from "../../../assets/mail.png";
// import password_icon from "../../../assets/password.png";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     setError("");
//     if (!email || !password) {
//       setError("Please fill all fields");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:8080/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Login failed");
//       } else {
//         localStorage.setItem("token", data.token);
//         navigate("/navbar");
//       }
//     } catch (err) {
//       setError("Server error. Try again.");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">Log In</div>
//         <div className="underline"></div>

//         <div className="inputs">
//           <div className="input-group">
//             <img src={email_icon} alt="Email" className="icon" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="input-group">
//             <img src={password_icon} alt="Password" className="icon" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
//         </div>

//         <div className="forgot-password">
//           Doesn't have an account? <a href="/">Sign Up</a>
//         </div>

//         <div className="submit-container">
//           <button className="submit" onClick={handleLogin}>Log In</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import email_icon from "../../../assets/mail.png";
import password_icon from "../../../assets/password.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }



    
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
      } else {
        localStorage.setItem("token", data.token);
        navigate("/navbar");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Log In</div>
        <div className="underline"></div>

        <form className="inputs" onSubmit={handleLogin}>
          <div className="input-group">
            <img src={email_icon} alt="Email" className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <img src={password_icon} alt="Password" className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

          <div className="forgot-password">
            Doesn't have an account? <a href="/">Sign Up</a>
          </div>

          <div className="submit-container">
            <button type="submit" className="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
