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
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import { useThemeContext } from '../contexts/ThemeContext';
import Divider from '@mui/material/Divider';
import VerifiedIcon from '@mui/icons-material/Verified';
// Import the content object
import { homeContent } from '../content/homeContent';

function HomePage() {
  // Get current theme mode
  const { mode } = useThemeContext();

  // Style for achievement items
  const achievementStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    mb: 1.5,
    pl: 1,
  };

  return (
    <Container maxWidth="lg">
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
                src={homeContent.profile.profileImagePath}
                alt={homeContent.profile.name}
                sx={{
                  bgcolor: 'primary.main',
                  width: 180,
                  height: 180,
                  fontSize: '3.5rem',
                  margin: { xs: 'auto', md: 0 },
                  border: mode === 'light' 
                    ? '4px solid #F8F9FA' 
                    : '4px solid #2684FF', // Match primary color in dark mode
                  boxShadow: mode === 'light'
                    ? '0 4px 20px rgba(0,0,0,0.08)'
                    : '0 4px 20px rgba(38,132,255,0.2)', // Subtle blue glow in dark mode
                }}
              >
                {homeContent.profile.avatarLetters}
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
                {homeContent.profile.name}
              </Typography>
              <Typography 
                variant="h5" 
                component="p" 
                color="text.secondary" 
                gutterBottom
                sx={{ mb: 2 }}
              >
                {homeContent.profile.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1" color="text.secondary">
                  {homeContent.profile.location}
                </Typography>
              </Box>
              <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {homeContent.profile.tags.map((tag) => (
                  <Chip key={tag} label={tag} color="primary" size="small" />
                ))}
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
            {homeContent.summary.title}
          </Typography>
          <Divider sx={{ mb: 3 }} />
          {homeContent.summary.paragraphs.map((paragraph, index) => (
             <Typography 
              key={index}
              variant="body1" 
              paragraph
              sx={{ lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: paragraph }} // Use dangerouslySetInnerHTML for HTML tags like <strong>
            />
          ))}

          <Typography 
            variant="body1" 
            sx={{ mb: 2, fontWeight: 500 }}
          >
            {homeContent.summary.keyAchievementsTitle}
          </Typography>

          {homeContent.summary.achievements.map((achievement) => (
            <Box key={achievement.id} sx={achievementStyle}>
              <VerifiedIcon color="primary" sx={{ mr: 1.5, mt: 0.3, fontSize: '1rem' }} />
              <Typography variant="body1" dangerouslySetInnerHTML={{ __html: achievement.text }} />
            </Box>
          ))}

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
            {homeContent.contact.title}
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1 }}>
                <EmailIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                <Typography variant="body1">
                  <Link 
                    href={`mailto:${homeContent.contact.email}`}
                    sx={{ 
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' } 
                    }}
                  >
                    {homeContent.contact.email}
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1 }}>
                <LinkedInIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                <Typography variant="body1">
                  <Link 
                    href={homeContent.contact.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' } 
                    }}
                  >
                    {homeContent.contact.linkedinText}
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