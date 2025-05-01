import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ThemeToggle from './ThemeToggle';
import { useThemeContext } from '../contexts/ThemeContext';

function Navbar() {
  const { mode } = useThemeContext();
  
  const navLinkStyles = {
    textDecoration: 'none',
    color: 'inherit',
    margin: '0 8px',
    padding: '6px 8px',
    borderRadius: '4px',
  };

  const activeNavLinkStyles = {
    ...navLinkStyles,
    backgroundColor: mode === 'light' 
      ? 'rgba(10, 25, 47, 0.08)' // Very subtle highlight for light mode
      : 'rgba(38, 132, 255, 0.15)', // Subtle blue highlight for dark mode
  };

  return (
    <AppBar 
      position="sticky"
      sx={{
        bgcolor: mode === 'light' ? 'white' : '#000000', // Pure black in dark mode
        color: mode === 'light' ? 'text.primary' : 'white',
      }}
      elevation={1}
    >
      <Toolbar>
        {/* Brand/Name - Link to Home */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" style={{ ...navLinkStyles, marginLeft: 0, fontWeight: 'bold' }}>
            Dr. Santosh Kumar S
          </NavLink>
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavLink
            to="/dentistry"
            style={({ isActive }) => (isActive ? activeNavLinkStyles : navLinkStyles)}
          >
            <Button color="inherit">Dentistry</Button>
          </NavLink>
          <NavLink
            to="/business"
            style={({ isActive }) => (isActive ? activeNavLinkStyles : navLinkStyles)}
          >
            <Button color="inherit">Business</Button>
          </NavLink>
          {/* Theme Toggle */}
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 