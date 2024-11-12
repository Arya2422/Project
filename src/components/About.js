import React from "react";

const About = () => {
  return (
    <div
      style={{
        padding: "40px",
        color: "#e0e0e0",
        backgroundColor: "#1b1b1b",
        backgroundImage: "url('path-to-your-background-image.jpg')", // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "left",
        maxWidth: "800px",
        margin: "0 auto",
       borderRadius: "10px"
      }}
    >
      {/* Main Title */}
      <h1 style={{ fontSize: "36px", fontWeight: "normal", color: "#d0d0d0", marginBottom: "20px" }}>
        A regenerative future is possible within our lifetimes.
      </h1>

      {/* Paragraph Text */}
      <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#a0a0a0", marginBottom: "20px" }}>
        If you’re here, you already know we are at a critical juncture — a breaching of our planetary boundaries, a collapse of compassion, and ever increasing isolation.
      </p>
      <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#a0a0a0", marginBottom: "20px" }}>
        We each hold the seeds of change. Yet our collective potential has often remained unrealized for lack of awareness, poor coordination, and misaligned incentives.
      </p>
      <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#a0a0a0", marginBottom: "20px" }}>
        Earth One believes a regenerative future — a world where human activities contribute to the continuous renewal and flourishing of life on Earth — is possible within our lifetime.
      </p>
      <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#a0a0a0" }}>
        We exist to weave together the world’s most catalytic leaders in service of this future.
      </p>
    </div>
  );
};

export default About;
