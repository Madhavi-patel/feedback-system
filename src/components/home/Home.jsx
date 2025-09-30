
import React from "react";
import "./Home.css";
import feedbackImg from "../../assets/p3-removebg-preview.png";




const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Collect Feedback. Improve Performance.</h1>
        <p>Your feedback matters! Please share your thoughts.</p>
        <p>
          A secure, fast, and user-friendly platform to collect and analyze
          student feedback in real-time.
        </p>
      </div>

      <div className="home-image">
        <img src={feedbackImg} alt="Feedback illustration" />
      </div>
    </div>
  );
};

export default Home;
