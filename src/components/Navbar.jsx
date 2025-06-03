import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        <strong>BookHeaven</strong>
      </Link>
      <div>
        <Link to="/about" style={linkStyle}>About</Link>

        {!user && (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        )}

        {user && user.role === "buyer" && (
          <Link to="/buyerdashboard" style={linkStyle}>Buyer Dashboard</Link>
        )}

        {user && user.role === "seller" && (
          <Link to="/sellerdashboard" style={linkStyle}>Seller Dashboard</Link>
        )}

        {user && (
          <button onClick={onLogout} style={btnStyle}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

const navStyle = {
  padding: "10px 20px",
  background: "#007BFF",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const linkStyle = {
  color: "#fff",
  marginRight: "15px",
  textDecoration: "none",
};

const btnStyle = {
  background: "red",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
};
