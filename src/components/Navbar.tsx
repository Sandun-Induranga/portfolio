import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#121212" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Sandu
        </Typography>
        <Box display="flex" gap="1rem">
          {["Home", "About", "Portfolio", "Blog", "Contact"].map((item) => (
            <Button key={item} color="inherit">
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
