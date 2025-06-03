import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Navbar from "./components/Navbar";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";

function App() {
  const [user, setUser] = useState(null);

  // On mount, get user from localStorage (simulate login session)
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("bookmartUser"));
    if (savedUser) setUser(savedUser);
  }, []);

  // Login function sets user
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("bookheavenUser", JSON.stringify(userData));
  };

  // Logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("bookheavenUser");
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />

        {/* Protected routes */}
        <Route
          path="/buyerdashboard"
          element={user && user.role === "buyer" ? <BuyerDashboard user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/sellerdashboard"
          element={user && user.role === "seller" ? <SellerDashboard user={user} /> : <Navigate to="/login" />}
        />

        {/* Catch all */}
        <Route path="*" element={<h2 style={{textAlign:"center", marginTop:"2rem"}}>404: Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;


