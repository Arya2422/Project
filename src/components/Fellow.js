import React from 'react';

function Fellow() {
  const styles = {
    section: {
      backgroundColor: '#1f1f26', // Dark background color
      color: '#e0e0e0', // Light text color
      padding: '2rem',
      textAlign: 'left',
    },
    content: {
      maxWidth: '600px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem',
    },
    logo: {
      width: '40px',
      height: '40px',
    },
    title: {
      fontFamily: '"YourSerifFontName", serif', // Replace with your chosen serif font
      fontSize: '2rem',
      fontWeight: 400,
      color: '#e0e0e0',
    },
    subtitle: {
      fontFamily: '"YourSerifFontName", serif', // Replace with your chosen serif font
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#c0c0c0',
      marginTop: '1rem',
      marginBottom: '1rem',
    },
    description: {
      fontFamily: '"YourSansSerifFontName", sans-serif', // Replace with your chosen sans-serif font
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#b0b0b0',
      marginBottom: '2rem',
    },
    button: {
      backgroundColor: '#ffffff',
      color: '#1f1f26',
      border: 'none',
      borderRadius: '20px',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    buttonHover: {
      backgroundColor: '#e0e0e0',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <div style={styles.header}>
          <img src="https://framerusercontent.com/images/RaetGqZhzDIMjxuE5Hylcr7oIc.png" alt="Fellowship Logo" style={styles.logo} />
          <h1 style={styles.title}>The Fellowship</h1>
        </div>
        <p style={styles.subtitle}>
          A cohort of remarkable, previously undiscovered future leaders, with
          extraordinary potential to affect planetary change.
        </p>
        <p style={styles.description}>
          To empower these leaders, we’ve launched a Fellowship – backed by a
          501c3 non-profit – devoted to finding and funding a diverse spectrum of
          leaders from across the planet to join Earth One’s voyages and
          gatherings, at no cost.
        </p>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Apply for the Fellowship
        </button>
      </div>
    </section>
  );
}

export default Fellow;
