import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/dashboard'
import List from './pages/List'

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-container">
        <Sidebar screenWidth={screenWidth} />
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/list" element={<List />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
