// src/component/Footer.js
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 4,
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Typography variant="body2">
        © 2025 Astrovya. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;