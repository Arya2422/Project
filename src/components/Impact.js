import React from "react";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        color: "#e0e0e0",
        backgroundColor: "#1b1b1b",
        backgroundImage: "url('path-to-your-background-image.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "left",
      }}
    >
      {/* Main Title */}
      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ letterSpacing: "2px", color: "#a0a0a0" }}>APPROACH</h3>
        <h1 style={{ fontSize: "28px", fontWeight: "normal", color: "#d0d0d0" }}>
          To actuate Earth One’s theory of change we work in the following ways:
        </h1>
      </div>

      {/* Sections Container */}
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%", maxWidth: "1200px" }}>
        {/* Section 1 */}
        <div style={{ textAlign: "left", width: "30%", maxWidth: "300px" }}>
          <div style={{ fontSize: "40px", color: "#c0a06b", marginBottom: "20px" }}>👥</div>
          <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>Resourcing Rising Stars</h2>
          <hr/>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#a0a0a0" }}>
            Individual leaders have the potential to change the world — if properly woven
            together with peers and mentors.
            <br /><br />
            Our Fellowship finds and supports the world’s most inspiring
            builders in the regenerative movement.
          </p>
        </div>

        {/* Section 2 */}
        <div style={{ textAlign: "left", width: "30%", maxWidth: "300px" }}>
          <div style={{ fontSize: "40px", color: "#c0a06b", marginBottom: "20px" }}>📍</div>
          <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>Connecting the Connectors</h2>
          <hr/>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#a0a0a0" }}>
            Effective global coordination and collaboration comes down to both
             awareness and trust.
            <br /><br />
            Through Gatherings and our Global Alliance, we
            super-connect the superconnectors.
          </p>
        </div>

        {/* Section 3 */}
        <div style={{ textAlign: "left", width: "30%", maxWidth: "300px" }}>
          <div style={{ fontSize: "40px", color: "#c0a06b", marginBottom: "20px" }}>🌍</div>
          <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>Amplifying Lighthouse Projects</h2>
          <hr/>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#a0a0a0" }}>
            Singular initiatives, once socialized, have the power to inspire entire
            civilizations.
            <br /><br />
            Through Storytelling, we bring the paradigm-shifting ideas of
            lesser-known projects into the mainstream.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
