import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer"
import Register from "./pages/student/login/register";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          {/* Add more routes here for Faculty, Admin, etc. */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
