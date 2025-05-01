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

function DentistryPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <MedicalServicesIcon color="primary" fontSize="large" sx={{ mr: 2 }} />
            <Typography variant="h3" component="h1">
              Dentistry
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            My education and professional experience in the field of dentistry.
          </Typography>
        </Paper>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SchoolIcon color="primary" sx={{ mr: 2 }} />
              <Typography variant="h4" component="h2">
                Education
              </Typography>
            </Box>

            <Paper elevation={1} sx={{ p: 3, mb: 2, bgcolor: 'background.default' }}>
              <Typography variant="h6" component="h3" gutterBottom>
                TAMIL NADU GOVERNMENT DENTAL COLLEGE AND HOSPITAL
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                (Inst. Code - 020), CHENNAI
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Bachelor of Dental Surgery (BDS), Dentistry · (2008 - 2013)
              </Typography>
            </Paper>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <WorkIcon color="primary" sx={{ mr: 2 }} />
              <Typography variant="h4" component="h2">
                Professional Experience
              </Typography>
            </Box>

            <Timeline position="right">

            <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h3">
                    Santosh Dental Clinic
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Founder & Principal Dentist
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aug 2015 - July 2016 (1 year)
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h3">
                    Malligai Dental Hospital - India
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Consultant
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    June 2015 - July 2015 (2 months)
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
                  <Typography variant="body2" color="text.secondary">
                    December 2014 - June 2015 (7 months)
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