import { Box, Typography, Button, Grid, Avatar } from '@mui/material';

const AboutSection = () => {
  return (
    <Box
      padding="4rem 2rem"
      style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        borderRadius: '8px',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section: Image */}
        <Grid item xs={12} md={4}>
          <Avatar
            src="https://via.placeholder.com/300"
            alt="Profile"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
            }}
          />
        </Grid>

        {/* Right Section: Text Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" style={{ marginBottom: '1rem' }}>
            About Me
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '1rem', lineHeight: 1.8 }}>
            <strong>Name:</strong> Sandun Induranga<br />
            <strong>Age:</strong> 23<br />
            <strong>Degree:</strong> BEng(Hons). in Software Engineering<br />
            <strong>Email:</strong> sanduninduranga2001@gmail.com<br />
            <strong>City:</strong> Galle, Sri Lanka.<br />
            <strong>Phone Number:</strong> +94 740098523
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
            I am a talented, ambitious, and hardworking individual with broad skills. 
            I am adept at handling multiple tasks competently and at working well under 
            pressure. Furthermore, I use a creative approach to problem-solving and am 
            always energetic and eager to learn new skills. I am always on time for organized 
            events, work-related or otherwise.
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#FFC107',
              color: '#121212',
              padding: '0.5rem 1.5rem',
            }}
          >
            Download CV
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
