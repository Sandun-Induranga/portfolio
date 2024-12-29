import { Box, Typography } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem 2rem"
      style={{ backgroundColor: "#121212", color: "#FFFFFF" }}
    >
      <Typography variant="body1">
        &copy; 2024 Sandun Induranga. All rights reserved.
      </Typography>
      <Box display="flex" gap="1rem">
        <Facebook style={{ cursor: "pointer" }} />
        <Twitter style={{ cursor: "pointer" }} />
        <LinkedIn style={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default Footer;
