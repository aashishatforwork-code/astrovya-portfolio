// src/component/Navbar.js
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="a" href="#home" sx={{ textDecoration: 'none', color: 'inherit' }}>
          Astrovya
        </Typography>
        <Button color="inherit" component="a" href="#contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;