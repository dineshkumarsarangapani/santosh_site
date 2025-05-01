import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import { useThemeContext } from '../contexts/ThemeContext';
import Divider from '@mui/material/Divider';

function HomePage() {
  // Fallback to initials if image doesn't load
  const avatarLetters = 'DS';
  // Reference image from public directory
  const profileImagePath = '/santosh.png';
  
  // Get current theme mode
  const { mode } = useThemeContext();

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 5 }}>
        {/* Profile Section */}
        <Paper 
          elevation={2} 
          sx={{ 
            p: { xs: 3, md: 4 }, 
            mb: 4, 
            borderRadius: '4px',
            border: mode === 'light' ? '1px solid #E9EBEE' : 'none',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Avatar
                src={profileImagePath}
                alt="Dr. Santosh Kumar S"
                sx={{
                  bgcolor: 'primary.main',
                  width: 180,
                  height: 180,
                  fontSize: '3.5rem',
                  margin: { xs: 'auto', md: 0 },
                  border: mode === 'light' 
                    ? '4px solid #F8F9FA' 
                    : '4px solid #2684FF',
                  boxShadow: mode === 'light'
                    ? '0 4px 20px rgba(0,0,0,0.08)'
                    : '0 4px 20px rgba(38,132,255,0.2)',
                }}
              >
                {avatarLetters}
              </Avatar>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: '2rem', md: '2.5rem' } 
                }}
              >
                Dr. Santosh Kumar S
              </Typography>
              <Typography 
                variant="h5" 
                component="p" 
                color="text.secondary" 
                gutterBottom
                sx={{ mb: 2 }}
              >
                BDS, MBA, FIII.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1" color="text.secondary">
                  Chennai, Tamil Nadu, India
                </Typography>
              </Box>
              <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="Health Insurance" color="primary" size="small" />
                <Chip label="Healthcare Management" color="primary" size="small" />
                <Chip label="Dentistry" color="primary" size="small" />
                <Chip label="Fraud Mitigation" color="primary" size="small" />
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Summary Section */}
        <Paper 
          elevation={2} 
          sx={{ 
            p: { xs: 3, md: 4 }, 
            mb: 4, 
            borderRadius: '4px',
            border: mode === 'light' ? '1px solid #E9EBEE' : 'none'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              fontWeight: 600,
              mb: 3,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Executive Summary
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7 }}
          >
            MBA graduate and specialized in health systems strategic management and administration. Proficient in health insurance claims, networking of hospitals, pricing for hospitals and insurance IT solutions. Managed AI based claims processing and networking of hospitals.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7 }}
          >
            Health, accident and travel claims verification and investigation, Fraud analysis and analytics. Aspiring Actuary.
          </Typography>
        </Paper>

        {/* Contact Section */}
        <Paper 
          elevation={2} 
          sx={{ 
            p: { xs: 3, md: 4 }, 
            borderRadius: '4px',
            border: mode === 'light' ? '1px solid #E9EBEE' : 'none'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              fontWeight: 600,
              mb: 3,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Contact Information
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1 }}>
                <EmailIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                <Typography variant="body1">
                  <Link 
                    href="mailto:santosh.sarangan@gmail.com"
                    sx={{ 
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' } 
                    }}
                  >
                    santosh.sarangan@gmail.com
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1 }}>
                <LinkedInIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                <Typography variant="body1">
                  <Link 
                    href="https://www.linkedin.com/in/dr-santosh-kumar-s-229898159" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' } 
                    }}
                  >
                    LinkedIn Profile
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default HomePage; 