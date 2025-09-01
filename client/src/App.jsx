import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/student/login/signup";
import Login from "./pages/student/login/login";
import Navbar from "./pages/student/login/navbar";

function App() {
  return (
    <>
      <Signup />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/navbar" element={<Navbar />} />
    //   </Routes>
    // </BrowserRouter>
   
  );
}

export default App;
