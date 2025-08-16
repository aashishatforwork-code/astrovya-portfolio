// src/App.js
import { useEffect } from 'react';
import { CssBaseline, Box } from '@mui/material';
import './App.css'; // Add this import
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';
import StarryBackground from './component/StarryBackground'; // Add this import

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <CssBaseline />
      <Box
        className="App" // Add className to apply App.css styles
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, rgba(0, 4, 40, 0.9), rgba(0, 78, 146, 0.9))', // Made slightly transparent
          color: 'white',
          position: 'relative', // Add this for proper layering
        }}
      >
        <StarryBackground /> {/* Add this component here */}
        <Navbar />
        <Hero />
        <Contact />
        <Footer />
      </Box>
    </>
  );
}

export default App;