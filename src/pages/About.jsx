import React, { useEffect, useState } from "react";

const features = [
  {
    icon: "📚",
    title: "Wide Book Selection",
    desc: "Find books from various genres and authors all in one place.",
  },
  {
    icon: "🛒",
    title: "Easy Buying & Selling",
    desc: "Seamlessly list your books or buy from trusted sellers.",
  },
  {
    icon: "💬",
    title: "Community Support",
    desc: "Connect with fellow readers and share your thoughts.",
  },
];

export default function About() {
  const [visible, setVisible] = useState(false);

  // Fade in after component mounts
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        padding: "1rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "1rem",
          color: "#34495e",
        }}
      >
        Welcome to BookHeaven 📚
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          textAlign: "center",
          marginBottom: "2rem",
          lineHeight: "1.6",
          color: "#57606f",
        }}
      >
        Your one-stop platform to buy and sell books effortlessly, connect with
        fellow readers, and explore a world of knowledge.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {features.map(({ icon, title, desc }) => (
          <div
            key={title}
            style={{
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              borderRadius: "12px",
              padding: "1.5rem",
              width: "260px",
              textAlign: "center",
              transition: "transform 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              {icon}
            </div>
            <h3 style={{ marginBottom: "0.5rem", color: "#2c3e50" }}>{title}</h3>
            <p style={{ color: "#57606f", fontSize: "1rem" }}>{desc}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <button
          onClick={() => alert("Thanks for showing interest!")}
          style={{
            backgroundColor: "#27ae60",
            color: "white",
            border: "none",
            padding: "0.8rem 2rem",
            borderRadius: "30px",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(39, 174, 96, 0.5)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#219150")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#27ae60")}
        >
          Get Started Now
        </button>
      </div>
    </div>
  );
}
