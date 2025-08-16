import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, MenuItem, Fade } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // WhatsApp icon

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    code: '+977',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prefilledMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.code} ${formData.phone}\nMessage: ${formData.message}`;
    const phoneNumber = '+9779840059015'; // Replace with your actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;
    window.open(url, '_blank');
    setFormData({ name: '', email: '', code: '+977', phone: '', message: '' });
  };

  const countryCodes = [
    { code: '+1', label: 'USA (+1)' },
    { code: '+44', label: 'UK (+44)' },
    { code: '+91', label: 'India (+91)' },
    { code: '+61', label: 'Australia (+61)' },
    { code:'+977', label:'Nepal (+977)'}
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        display: 'flex',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, rgba(0, 4, 40, 0.8), rgba(0, 78, 146, 0.8))',
      }}
    >
      <Container maxWidth="sm">
        <Fade in timeout={1000}>
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: 16,
              p: { xs: 4, sm: 6 },
              boxShadow: '0 10px 40px rgba(31, 38, 135, 0.4)',
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 4,
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.7)' }}>
             
            </Box>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: 8,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
                        '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: 8,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
                        '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                    }}
                  />
                </Grid>
                <Grid item>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TextField
                      select
                      name="code"
                      value={formData.code}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        width: '50%',
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: 8,
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                          '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
                          '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                        },
                        '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      }}
                    >
                      {countryCodes.map((option) => (
                        <MenuItem key={option.code} value={option.code}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleChange}
                      sx={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: 8,
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                          '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
                          '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                        },
                        '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                        '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: 8,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
                        '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                    }}
                  />
                </Grid>
                <Grid item sx={{ textAlign: 'center', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      backgroundColor: '#25D366',
                      color: 'white',
                      borderRadius: 8,
                      padding: '10px 20px',
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#128C7E',
                        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
                      },
                    }}
                  >
                    Send via WhatsApp
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Contact;