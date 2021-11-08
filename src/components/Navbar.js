import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
 
    // backgroundImage: 'linear-gradient(to bottom right, #3C5155 , #000000)',
  },
  heading: {
    
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <nav style={styles.card}>
      <span style={styles.heading}>Home</span>
      <span style={styles.heading}>Portfolio</span>
      <span style={styles.heading}>Resume</span>
    </nav>
  );
}

export default Navbar;
