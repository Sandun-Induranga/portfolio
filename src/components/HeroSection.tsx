import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="4rem 2rem"
      style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}
    >
      <Container maxWidth="lg" style={{ textAlign: 'left' }}>
        <Typography variant="h2" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          Hello, I'm <span style={{ color: '#FFC107' }}>Sandun Induranga</span>
        </Typography>
        <Typography variant="h5" style={{ marginBottom: '2rem' }}>
          Software Engineer
        </Typography>
        <Button variant="contained" style={{ backgroundColor: '#FFC107', color: '#121212' }}>
          Contact Me
        </Button>
      </Container>
      <Box>
        <img
          src="https://via.placeholder.com/400"
          alt="Sandun Induranga"
          style={{ borderRadius: '8px', width: '400px' }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
