import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import '../../styles/HeaderStyles.css';
import logo from "./logo.jpg";
import bck from "./bck.jpeg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <Avatar src={logo} sx={{ height: 70, width: 200 }} />
        <Typography variant='h4'>MediBridge</Typography>
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/diseases"}>Disease</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "purple", height: 80 }}>
        <Toolbar sx={{ height: "100%" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 1, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            color='gold'
            fontFamily='sans-serif'
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, ml: 'auto' }}
          >
            MediBridge
          </Typography>

          <Avatar src={logo} sx={{ color: 'gold', height: 60, width: 70, marginRight: '25%' }} />

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/diseases"}>Disease</NavLink></li>
              <li><NavLink to={"/about"}>About</NavLink></li>
              <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundImage: `url(${bck})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* This Toolbar is to offset the fixed AppBar height */}
      <Toolbar />
    </Box>
  );
};

export default Navbar;
