import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ArticleIcon from '@mui/icons-material/Article';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useThemeContext } from '../contexts/ThemeContext';
import { dentistryContent } from '../content/dentistryContent';

function DentistryPage() {
  const { mode } = useThemeContext();

  // Conditional styles based on theme mode
  const cardStyle = {
    mb: 4,
    bgcolor: mode === 'light' ? 'background.paper' : '#121212',
    borderRadius: '4px',
    border: mode === 'light' ? '1px solid #E9EBEE' : 'none'
  };

  const innerPaperStyle = {
    p: 3, 
    mb: 3, 
    height: '100%',
    borderRadius: '4px',
    bgcolor: mode === 'light' ? 'background.default' : 'rgba(38, 132, 255, 0.04)',
    border: mode === 'light' ? 'none' : '1px solid rgba(38, 132, 255, 0.1)',
    boxShadow: mode === 'light' ? 1 : 'none'
  };

  const chipStyle = {
    m: '2px',
    border: mode === 'dark' ? '1px solid rgba(38, 132, 255, 0.3)' : 'none',
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Paper 
          elevation={2} 
          sx={{ 
            p: 4, 
            mb: 4, 
            borderRadius: '4px',
            border: mode === 'light' ? '1px solid #E9EBEE' : 'none',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <MedicalServicesIcon color="primary" fontSize="large" sx={{ mr: 2 }} />
            <Typography variant="h3" component="h1">
              {dentistryContent.pageTitle}
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {dentistryContent.pageDescription}
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{...cardStyle, position: 'sticky', top: '80px'}}>
              <CardHeader 
                title={dentistryContent.professionalSummary.title}
                avatar={
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <ArticleIcon />
                  </Avatar>
                }
              />
              <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
              <CardContent>
                {dentistryContent.professionalSummary.paragraphs.map((para, index) => (
                  <Typography key={index} variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                    {para}
                  </Typography>
                ))}
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {dentistryContent.professionalSummary.skills.map((skill) => (
                    <Chip 
                      key={skill} 
                      label={skill} 
                      color="primary" 
                      size="small"
                      sx={chipStyle} 
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card sx={cardStyle}>
              <CardHeader 
                title={dentistryContent.clinicalSpecializations.title}
                avatar={
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <FolderSpecialIcon />
                  </Avatar>
                }
              />
              <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
              <CardContent>
                <Grid container spacing={3}>
                  {dentistryContent.clinicalSpecializations.specializations.map((spec) => (
                    <Grid item xs={12} md={6} key={spec.id}>
                      <Paper elevation={0} sx={{...innerPaperStyle, height: '100%'}}>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {spec.title}
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                          {spec.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            <Card sx={cardStyle}>
              <CardHeader 
                title={dentistryContent.education.title}
                avatar={
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <SchoolIcon />
                  </Avatar>
                }
              />
              <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
              <CardContent>
                <Paper elevation={0} sx={{...innerPaperStyle, mb: 0}}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {dentistryContent.education.institution}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {dentistryContent.education.location}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    {dentistryContent.education.degree} · {dentistryContent.education.years}
                  </Typography>
                  <Typography component="div" variant="body2" sx={{ mt: 2 }}>
                    {dentistryContent.education.details.map((detail, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 0.5 }}>
                         <Typography variant="body2" component="span" sx={{ mr: 1 }}>•</Typography>
                         <Typography variant="body2" component="span">{detail}</Typography>
                      </Box>
                    ))}
                  </Typography>
                </Paper>
              </CardContent>
            </Card>

            <Card sx={cardStyle}>
              <CardHeader 
                title={dentistryContent.academicAchievements.title}
                avatar={
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <EmojiEventsIcon />
                  </Avatar>
                }
              />
              <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
              <CardContent>
                <Typography variant="body2" paragraph sx={{ lineHeight: 1.7 }}>
                  {dentistryContent.academicAchievements.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {dentistryContent.academicAchievements.achievements.map((achieve) => (
                    <Chip key={achieve.id} label={achieve.label} color="primary" size="small" sx={chipStyle} />
                  ))}
                </Box>
              </CardContent>
            </Card>

            <Card sx={cardStyle}>
              <CardHeader 
                title={dentistryContent.continuingEducation.title}
                avatar={
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <HealthAndSafetyIcon />
                  </Avatar>
                }
              />
              <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
              <CardContent>
                <Grid container spacing={3}>
                  {dentistryContent.continuingEducation.courses.map((course) => (
                    <Grid item xs={12} md={6} key={course.id}>
                      <Paper elevation={0} sx={{...innerPaperStyle, height: '100%'}}>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {course.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {course.institution} • {course.year}
                        </Typography>
                        <Typography variant="body2">
                          {course.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{...cardStyle, mb: 0}}>
              <CardHeader 
                title={dentistryContent.professionalExperience.title}
                avatar={
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <WorkIcon />
                  </Avatar>
                }
              />
              <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
              <CardContent>
                <Timeline position="right" sx={{
                  p: 0,
                  m: 0,
                  '& .MuiTimelineItem-root': {
                    minHeight: 'auto',
                    mb: 2
                  },
                  '& .MuiTimelineContent-root': {
                    p: 2,
                    bgcolor: mode === 'light' ? 'background.default' : 'rgba(38, 132, 255, 0.04)',
                    border: mode === 'light' ? 'none' : '1px solid rgba(38, 132, 255, 0.1)',
                    borderRadius: '4px',
                  }
                }}>
                  {dentistryContent.professionalExperience.timeline.map((exp, index) => (
                    <TimelineItem key={exp.id}>
                      <TimelineSeparator>
                        <TimelineDot color="primary" />
                        {index < dentistryContent.professionalExperience.timeline.length - 1 && (
                          <TimelineConnector sx={{ 
                            bgcolor: mode === 'light' ? 'primary.main' : 'rgba(38, 132, 255, 0.3)'
                          }} />
                        )}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6" component="h3">
                          {exp.company}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          {exp.role}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {exp.duration}
                        </Typography>
                        <Typography component="div" variant="body2">
                           {exp.responsibilities.map((resp, respIndex) => (
                            <React.Fragment key={respIndex}>
                              • {resp}
                              {respIndex < exp.responsibilities.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default DentistryPage; 