import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [role, setRole] = useState("buyer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake "registration" - in real app, send to backend
    const userData = { name, email, role };
    localStorage.setItem("bookheavenUser", JSON.stringify(userData));

    alert(`Registered as ${role}! Redirecting to login.`);
    navigate("/login");
  };

  return (
    <div style={container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>Name:</label>
        <input
          required
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
        />

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
          placeholder="Choose password"
        />

        <label>Register as:</label>
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>

        <button type="submit" style={btnStyle}>Register</button>
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
