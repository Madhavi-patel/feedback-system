// import {useRef} from 'react'
// import './navbar.css'
// import {FaBars , FaTimes} from 'react-icons/fa'

// function Navbar() {
//   const navRef = useRef();
//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav")
//   }
//   return ( 
//     <header>
//       <h3>logo</h3>
//       <nav ref={navRef}>
//         <a href="/#">Home</a>
//         <a href="/#">About Us</a>
//         <a href="/">Logout</a>
//         <button className='nav-btn nav-close-btn' onClick={showNavbar}>
//           {/* Profile */}
//             <FaTimes/>
//         </button>
//       </nav>
//       <button className='nav-btn' onClick={showNavbar}>
//         {/* Add Feedback */}
//         <FaBars/>
//       </button>
//     </header>
//   )
// }

// export default Navbar;


import { useRef, useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import r1 from "../../../assets/fs2.png";

function Navbar() {
  const navRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
    <header>
      <h3>logo</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About Us</a>
        
        {/* Profile dropdown */}
        <div className="profile-container">
          <button 
            className="profile-btn" 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaUserCircle className="icon" size={25} />
            {/* Profile */}

          </button>

          {showDropdown && (
            <div className="profile-dropdown">
              <a href="/login">Logout</a>
            </div>
          )}
        </div>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
    <div> 

<h1 className="welcome-text">Student Feedback </h1>

      <img className="student-image" src={r1} alt="image" />

      <button className="feedback-btn" onClick={() => window.location.href='/feedback'}>Give Feedback</button>

    </div>
    </div>
  );
}

export default Navbar;





// import { useRef, useState, useEffect } from "react";
// import "./navbar.css";
// import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

// function Navbar() {
//   const navRef = useRef();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [userName, setUserName] = useState("");
  

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };

//   // Load logged-in user name from localStorage (or backend API if needed)
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user"); // user should be stored in localStorage after login
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUserName(parsedUser.name); // assuming user object has { name, email, ... }
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     window.location.href = "/login"; // redirect to login
//   };

//   return (
//     <header>
//       <h3>logo</h3>
//       <nav ref={navRef}>
//         <a href="/#">Home</a>
//         <a href="/#">About Us</a>

//         {/* Profile dropdown */}
//         <div className="profile-container">
//           <button
//             className="profile-btn"
//             onClick={() => setShowDropdown(!showDropdown)}
//           >
//             <FaUserCircle size={22} /> {userName}
//             {/* {userName ? userName : "Profile"} */}
//           </button>
//           {
//             isAuthenticated && <h1>{user.name}</h1>
//           }
//           {showDropdown && (
//             <div className="profile-dropdown">
//               <p className="profile-name">{userName}</p>
//               <a href="/" onClick={handleLogout}>Logout</a>
//             </div>
//           )}
//         </div>

//         <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//           <FaTimes />
//         </button>
//       </nav>
//       <button className="nav-btn" onClick={showNavbar}>
//         <FaBars />
//       </button>
//     </header>
//   );
// }

// export default Navbar;


