import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/student/login/register";
import Login from "./pages/student/login/login";
import Navbar from "./pages/student/login/navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
