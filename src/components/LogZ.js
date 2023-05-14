import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div
      style={{
        backgroundImage: "url('/path/to/beach-image.jpg')",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "2rem",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Sign Up/Sign In</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          style={{
            backgroundColor: "#3cbcc7",
            border: "none",
            padding: "0.5rem",
            margin: "1rem 0",
            borderRadius: "5px",
            color: "#fff",
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          style={{
            backgroundColor: "#dfc39d",
            border: "none",
            padding: "0.5rem",
            margin: "1rem 0",
            borderRadius: "5px",
            color: "#fff",
          }}
        />
        <button
          type="submit"
          style={{
            background: "linear-gradient(to right, #3cbcc7, #dfc39d)",
            border: "none",
            padding: "1rem",
            margin: "1rem 0",
            borderRadius: "5px",
            color: "#fff",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          Sign Up/Sign In
        </button>
      </form>
    </div>
  );
}

export default Signup;