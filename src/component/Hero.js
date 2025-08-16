// src/component/Hero.js
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 4,
            p: 6,
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}
        >
          <Typography variant="h2" gutterBottom>
            Discover Your Destiny with Astrovya
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Book a personalized session with expert astrologers
          </Typography>
          <Button variant="contained" color="primary" size="large" component="a" href="#contact">
            Book Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;