import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import BusinessIcon from '@mui/icons-material/Business';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Avatar from '@mui/material/Avatar';
import ArticleIcon from '@mui/icons-material/Article';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useThemeContext } from '../contexts/ThemeContext';
// Import the content object
import { businessContent } from '../content/businessContent';

function BusinessPage() {
  const { mode } = useThemeContext();

  // Conditional styles based on theme mode
  const innerPaperStyle = {
    p: 3, 
    mb: mode === 'light' ? 3 : 2.5, 
    borderRadius: '4px',
    bgcolor: mode === 'light' ? 'background.default' : 'rgba(38, 132, 255, 0.04)',
    border: mode === 'light' ? 'none' : '1px solid rgba(38, 132, 255, 0.1)',
    boxShadow: mode === 'light' ? 1 : 'none'
  };

  const cardStyle = {
    mb: 4,
    bgcolor: mode === 'light' ? 'background.paper' : '#121212',
    borderRadius: '4px',
    border: mode === 'light' ? '1px solid #E9EBEE' : 'none'
  };

  const listItemStyle = {
    mb: 1,
    borderRadius: '4px',
    bgcolor: mode === 'light' ? 'transparent' : 'rgba(38, 132, 255, 0.02)',
    border: mode === 'light' ? 'none' : '1px solid rgba(38, 132, 255, 0.05)',
    '&:hover': {
      bgcolor: mode === 'light' ? 'rgba(0, 0, 0, 0.02)' : 'rgba(38, 132, 255, 0.08)',
    }
  };

  const chipStyle = {
    m: '2px',
    border: mode === 'dark' ? '1px solid rgba(38, 132, 255, 0.3)' : 'none',
  };

  // Helper function to render bullet points
  const renderBulletPoints = (items) => {
    return items.map((item, index) => (
      <React.Fragment key={index}>
        • {item}
        {index < items.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Paper elevation={2} sx={{ 
          p: 4, 
          mb: 4, 
          borderRadius: '4px',
          border: mode === 'light' ? '1px solid #E9EBEE' : 'none',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <BusinessIcon color="primary" fontSize="large" sx={{ mr: 2 }} />
            <Typography variant="h3" component="h1">
              {businessContent.pageTitle}
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {businessContent.pageDescription}
          </Typography>
        </Paper>

        {/* Professional Summary Section */}
        <Card sx={cardStyle}>
          <CardHeader 
            title={businessContent.executiveProfile.title}
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <ArticleIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
             {businessContent.executiveProfile.paragraphs.map((para, index) => (
              <Typography key={index} variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                {para}
              </Typography>
             ))}
          </CardContent>
        </Card>

        {/* Key Business Achievements Section */}
        <Card sx={cardStyle}>
          <CardHeader 
            title={businessContent.keyAchievements.title}
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <ShowChartIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Grid container spacing={3}>
              {businessContent.keyAchievements.achievements.map((achieve) => (
                <Grid item xs={12} md={6} key={achieve.id}>
                  <Paper elevation={0} sx={{...innerPaperStyle, height: '100%'}}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {achieve.title}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                      {achieve.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* Core Competencies */}
        <Card sx={cardStyle}>
          <CardHeader 
            title={businessContent.coreCompetencies.title}
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <WorkspacePremiumIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {businessContent.coreCompetencies.skills.map((skill) => (
                <Chip 
                  key={skill} 
                  label={skill} 
                  color="primary" 
                  sx={chipStyle} 
                />
              ))}
            </Stack>
          </CardContent>
        </Card>

        {/* Leadership Approach Section */}
        <Card sx={cardStyle}>
          <CardHeader 
            title={businessContent.leadershipApproach.title}
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <TimelineIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            {businessContent.leadershipApproach.paragraphs.map((para, index) => (
              <Typography key={index} variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                {para}
              </Typography>
            ))}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {businessContent.leadershipApproach.tags.map((tag) => (
                <Chip key={tag.id} label={tag.label} color="primary" size="small" sx={chipStyle} />
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* Professional Experience */}
        <Card sx={cardStyle}>
          <CardHeader 
            title={businessContent.professionalExperience.title}
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <WorkHistoryIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Grid container spacing={3}>
              {businessContent.professionalExperience.experiences.map((exp) => (
                <Grid item xs={12} key={exp.id}>
                  <Paper elevation={0} sx={exp.id === 'exp-vidal' ? {...innerPaperStyle, mb: 0} : innerPaperStyle}>
                    <Typography variant="h6" component="h3">
                      {exp.company}
                    </Typography>
                    {exp.role && (
                      <Typography variant="body1" gutterBottom>
                        {exp.role}
                      </Typography>
                    )}
                    {exp.duration && (
                       <Typography variant="body2" color="text.secondary" gutterBottom>
                        {exp.duration}
                      </Typography>
                    )}
                    {exp.responsibilities && (
                      <Typography component="div" variant="body2" sx={{ mt: 2 }}>
                        {renderBulletPoints(exp.responsibilities)}
                      </Typography>
                    )}
                    {exp.roles && (
                      <List dense sx={{ pl: 2, mt: 2 }}>
                        {exp.roles.map((role) => (
                          <ListItem key={role.id} sx={listItemStyle}>
                            <ListItemText 
                              primary={role.title} 
                              primaryTypographyProps={{ fontWeight: 'medium' }}
                              secondaryTypographyProps={{ gutterBottom: true }}
                              secondary={
                                <>
                                  {role.duration}
                                  <Box sx={{ mt: 1 }}>
                                    {renderBulletPoints(role.responsibilities)}
                                  </Box>
                                </>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    )}
                    {exp.location && (
                       <Typography variant="body2" color="text.secondary" sx={{ pl: 2, mt: 1 }}>
                        {exp.location}
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* Industry Certifications Section */}
        <Card sx={cardStyle}>
          <CardHeader 
            title={businessContent.industryCertifications.title}
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <SecurityIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Grid container spacing={3}>
               {businessContent.industryCertifications.certs.map((cert) => (
                <Grid item xs={12} md={6} key={cert.id}>
                  <Paper elevation={0} sx={{...innerPaperStyle, height: '100%'}}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {cert.institution} • {cert.year}
                    </Typography>
                    <Typography variant="body2">
                      {cert.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* Strategic Vision Section */}
        <Card sx={cardStyle}>
          <CardHeader 
            title={businessContent.strategicVision.title}
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <AnalyticsIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            {businessContent.strategicVision.paragraphs.map((para, index) => (
               <Typography key={index} variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                 {para}
              </Typography>
            ))}
          </CardContent>
        </Card>

        {/* Education & Certifications */} 
        <Card sx={{...cardStyle, mb: 0}}>
          <CardHeader 
            title={businessContent.education.title}
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <SchoolIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Grid container spacing={3}>
               {businessContent.education.credentials.map((cred, index) => (
                <Grid item xs={12} md={6} key={cred.id}>
                  <Paper elevation={0} sx={{...innerPaperStyle, height: '100%', mb: (index >= businessContent.education.credentials.length - 2 && index % 2 === 0) ? 0 : { xs: 3, md: 0 } }}>
                     <Typography variant="h6" component="h3">
                       {cred.institution}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                      {cred.detail} · {cred.years}
                    </Typography>
                     <Typography component="div" variant="body2" sx={{ mt: 2 }}>
                       {renderBulletPoints(cred.description)}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default BusinessPage; 