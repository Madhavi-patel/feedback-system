import { useState } from 'react';
import Register from './pages/student/login/register';
import './pages/student/login/register.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Register />
    </>
  )
}

export default App
