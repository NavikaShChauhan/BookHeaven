import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("buyer"); // Simpler login with role selection
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // In real app, verify credentials here

    const userData = { email, role };
    onLogin(userData);

    if (role === "buyer") navigate("/buyerdashboard");
    else if (role === "seller") navigate("/sellerdashboard");
  };

  return (
    <div style={container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>Email:</label>
        <input
          required
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
        />

        <label>Password:</label>
        <input
          required
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />

        <label>Login as:</label>
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>

        <button type="submit" style={btnStyle}>Login</button>
      </form>
    </div>
  );
}

const container = {
  maxWidth: "400px",
  margin: "2rem auto",
  padding: "1rem",
  border: "1px solid #ddd",
  borderRadius: "6px",
  boxShadow: "0 0 10px #ccc",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const btnStyle = {
  marginTop: "10px",
  padding: "10px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  cursor: "pointer",
};
