import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { useThemeContext } from '../contexts/ThemeContext';
import { homeContent } from '../content/homeContent';
import CaseIcon from '@mui/icons-material/Assessment';
import TestimonialIcon from '@mui/icons-material/FormatQuote';
import WorkIcon from '@mui/icons-material/Work';
import ContactIcon from '@mui/icons-material/ContactMail';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AchievementIcon from '@mui/icons-material/EmojiEvents';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

function Navbar() {
  const { mode, toggleColorMode } = useThemeContext();

  const navLinkStyles = {
    textDecoration: 'none',
    color: 'inherit',
    margin: '0 8px',
    padding: '8px 16px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      color: 'primary.main',
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      textDecoration: 'none',
    },
  };

  const navigationItems = [
    { href: '#key-achievements', label: 'Key Achievements', icon: AchievementIcon },
    { href: '#dentistry', label: 'Dentistry', icon: LocalHospitalIcon },
    { href: '#education', label: 'Education', icon: SchoolIcon },
    { href: '#professional-experience', label: 'Professional Experience', icon: BusinessCenterIcon },
    { href: '#case-studies', label: 'Case Studies', icon: CaseIcon },
    { href: '#testimonials', label: 'Testimonials', icon: TestimonialIcon },
    { href: '#contact', label: 'Get In Touch', icon: ContactIcon },
  ];

  return (
    <AppBar position="sticky" elevation={1} sx={{ backdropFilter: 'blur(10px)' }}>
      <Toolbar sx={{ py: 1 }}>
        {/* Brand Section with Avatar */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Avatar
            src={homeContent.profile.profileImagePath}
            alt={homeContent.profile.name}
            sx={{
              width: 40,
              height: 40,
              mr: 2,
              border: `2px solid`,
              borderColor: 'primary.main',
            }}
          >
            {homeContent.profile.avatarLetters}
          </Avatar>
          <Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
              <Link href="#hero" sx={{
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': {
                  textDecoration: 'none',
                  color: 'primary.main'
                }
              }}>
                Dr. Santosh Kumar S
              </Link>
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1 }}>
              {homeContent.profile.title}
            </Typography>
          </Box>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {navigationItems.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} sx={navLinkStyles}>
              <Icon sx={{ fontSize: '1.2rem' }} />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {label}
              </Typography>
            </Link>
          ))}

          {/* Theme Toggle */}
          <IconButton
            onClick={toggleColorMode}
            color="inherit"
            sx={{
              ml: 2,
              border: '1px solid',
              borderColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
              },
            }}
          >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>

        {/* Mobile Menu Button - You can add this later if needed */}
        {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 