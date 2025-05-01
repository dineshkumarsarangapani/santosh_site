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

function DentistryPage() {
  const { mode } = useThemeContext();
  const dentalSkills = ['General Dentistry', 'Oral Surgery', 'Dental Management', 'Preventive Care', 'Patient Education', 'Prosthodontics', 'Pediatric Dentistry'];

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
              Dentistry
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            My education, professional experience, and expertise in the field of dentistry.
          </Typography>
        </Paper>

        <Card sx={cardStyle}>
          <CardHeader 
            title="Professional Summary"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <ArticleIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              Experienced dental professional with a Bachelor of Dental Surgery (BDS) from Tamil Nadu Government Dental College and Hospital, one of India's premier dental education institutions. Founded and operated Santosh Dental Clinic with a focus on preventive care and patient education, providing comprehensive dental services to over 500 patients from diverse socioeconomic backgrounds.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              During my clinical practice, I specialized in preventive dentistry and patient education, with a particular focus on pediatric oral health. My approach emphasized early intervention and education to prevent serious dental issues, leading to improved long-term outcomes for patients.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              My dental expertise has proven invaluable in my current role in health insurance, where I combine clinical knowledge with business acumen to effectively evaluate dental claims, develop appropriate coverage policies, and optimize provider networks. This unique combination of dental and administrative experience allows me to bridge the gap between clinical practice and insurance operations.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {dentalSkills.map((skill) => (
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

        <Card sx={cardStyle}>
          <CardHeader 
            title="Clinical Specializations"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <FolderSpecialIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Preventive Dentistry
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    Developed personalized preventive care plans for patients focusing on long-term oral health. Implemented comprehensive patient education protocols that resulted in improved home care compliance and reduced need for invasive treatments.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Oral Surgery
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    Assisted in complex surgical procedures including impacted wisdom teeth extractions and minor oral surgeries. Developed post-operative care protocols to minimize complications and improve recovery outcomes.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Pediatric Dentistry
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    Specialized in creating positive dental experiences for pediatric patients to establish lifelong oral health habits. Developed child-friendly patient education materials that significantly improved treatment compliance.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Dental Practice Management
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    Applied business principles to dental practice operations, including staff management, patient scheduling, and financial planning. Implemented digital record systems that improved operational efficiency and patient care coordination.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={cardStyle}>
          <CardHeader 
            title="Education"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <SchoolIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Paper elevation={0} sx={innerPaperStyle}>
              <Typography variant="h6" component="h3" gutterBottom>
                TAMIL NADU GOVERNMENT DENTAL COLLEGE AND HOSPITAL
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                (Inst. Code - 020), CHENNAI
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Bachelor of Dental Surgery (BDS), Dentistry · (2008 - 2013)
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                • Comprehensive training in all aspects of dental medicine and surgical procedures
                <br />
                • Clinical rotations in Oral Surgery, Prosthodontics, Periodontics, and Pediatric Dentistry
                <br />
                • Additional coursework in Practice Management and Dental Public Health
              </Typography>
            </Paper>
          </CardContent>
        </Card>

        <Card sx={cardStyle}>
          <CardHeader 
            title="Academic Achievements"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <EmojiEventsIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Typography variant="body2" paragraph sx={{ lineHeight: 1.7 }}>
              During my dental education at Tamil Nadu Government Dental College and Hospital, I distinguished myself through academic excellence and clinical proficiency. My final year project on "Preventive Dental Practices in Rural South India" earned recognition for its practical approach to public health dentistry.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              <Chip label="Dean's List 2011-2012" color="primary" size="small" sx={chipStyle} />
              <Chip label="Clinical Excellence Award" color="primary" size="small" sx={chipStyle} />
              <Chip label="Community Dentistry Recognition" color="primary" size="small" sx={chipStyle} />
            </Box>
          </CardContent>
        </Card>

        <Card sx={cardStyle}>
          <CardHeader 
            title="Continuing Education"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <HealthAndSafetyIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Advanced Preventive Dentistry Workshop
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Indian Dental Association • 2015
                  </Typography>
                  <Typography variant="body2">
                    Comprehensive training on the latest preventive techniques and patient education methodologies.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Dental Practice Management Certificate
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Dental Management Academy • 2014
                  </Typography>
                  <Typography variant="body2">
                    Focused on efficient clinic operations, patient scheduling systems, and financial management for dental practices.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{...cardStyle, mb: 0}}>
          <CardHeader 
            title="Professional Experience"
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
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector sx={{ 
                    bgcolor: mode === 'light' ? 'primary.main' : 'rgba(38, 132, 255, 0.3)'
                  }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h3">
                    Santosh Dental Clinic
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Founder & Practitioner
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    July 2015 - September 2017 (2 years 3 months)
                  </Typography>
                  <Typography variant="body2">
                    • Established and operated a private dental practice serving over 500 patients from diverse backgrounds
                    <br />
                    • Specialized in preventive dentistry and patient education with focus on long-term oral health
                    <br />
                    • Developed community outreach programs targeting underserved populations
                    <br />
                    • Implemented digital record keeping and appointment scheduling systems to improve operational efficiency
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector sx={{ 
                    bgcolor: mode === 'light' ? 'primary.main' : 'rgba(38, 132, 255, 0.3)'
                  }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h3">
                    Malligai Dental Hospital - India
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Consultant
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    June 2015 - July 2015 (2 months)
                  </Typography>
                  <Typography variant="body2">
                    • Provided specialized dental consultations and treatment procedures for complex cases
                    <br />
                    • Assisted in complex oral surgery cases with the senior medical team
                    <br />
                    • Participated in multi-disciplinary treatment planning for comprehensive patient care
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h3">
                    My Dentist Orthodontic Centre
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Medical Administrator
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    December 2014 - June 2015 (7 months)
                  </Typography>
                  <Typography variant="body2">
                    • Managed clinic operations and coordinated patient scheduling for a busy orthodontic practice
                    <br />
                    • Implemented efficient workflow procedures to improve patient care and reduce wait times
                    <br />
                    • Developed patient follow-up protocols that improved treatment compliance by 35%
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default DentistryPage; 