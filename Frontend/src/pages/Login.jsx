import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { motion } from "framer-motion";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Please enter your name and email.");
    login({ name, email });
    nav("/");
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "420px",
          padding: "2.5rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "1rem",
            color: "#4B0082",
            fontSize: "2rem",
            fontWeight: "700",
          }}
        >
          Welcome to Local Service Finder
        </h2>
        <p style={{ color: "#555", marginBottom: "2rem" }}>
          Connect with trusted local professionals — login or sign up to continue.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ marginBottom: "1.2rem" }}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "1.2rem" }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            style={{
              background: "linear-gradient(90deg, #667eea, #764ba2)",
              color: "#fff",
              border: "none",
              padding: "0.8rem 1.5rem",
              fontSize: "1.1rem",
              borderRadius: "30px",
              cursor: "pointer",
              fontWeight: "600",
              width: "100%",
            }}
          >
            Continue
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#666" }}
        >
          <p>
            By continuing, you agree to our{" "}
            <a href="#" style={{ color: "#764ba2", textDecoration: "none" }}>
              Terms & Conditions
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.9rem",
  borderRadius: "10px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "1rem",
  transition: "all 0.3s ease",
};
