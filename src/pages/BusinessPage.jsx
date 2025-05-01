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

function BusinessPage() {
  const skills = ['Cost Savings', 'Dispute Resolution', 'Management'];

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <BusinessIcon color="primary" fontSize="large" sx={{ mr: 2 }} />
            <Typography variant="h3" component="h1">
              Business & Health Administration
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            My professional experience and qualifications in healthcare management and business administration.
          </Typography>
        </Paper>

        <Card sx={{ mb: 4 }}>
          <CardHeader 
            title="Top Skills"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <WorkspacePremiumIcon />
              </Avatar>
            }
          />
          <CardContent>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill) => (
                <Chip key={skill} label={skill} color="primary" sx={{ m: '2px' }} />
              ))}
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4 }}>
          <CardHeader 
            title="Professional Experience"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <WorkHistoryIcon />
              </Avatar>
            }
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={1} sx={{ p: 3, mb: 3, bgcolor: 'background.default' }}>
                  <Typography variant="h6" component="h3">
                    Cholamandalam MS General Insurance Co. Ltd.
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    National head- Investigation and fraud mitigation. Health accident and travel
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    March 2023 - Present (2 years 3 months) | Chennai, Tamil Nadu, India
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Paper elevation={1} sx={{ p: 3, mb: 3, bgcolor: 'background.default' }}>
                  <Typography variant="h6" component="h3">
                    Star Health and Allied Insurance Co. Ltd (3 years 11 months)
                  </Typography>
                  <List dense sx={{ bgcolor: 'background.default', pl: 2 }}>
                    <ListItem>
                      <ListItemText 
                        primary="Division Head" 
                        secondary="June 2022 - February 2023 (9 months)" 
                        primaryTypographyProps={{ fontWeight: 'medium' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="Deputy Head Of Department" 
                        secondary="October 2020 - June 2022 (1 year 9 months)" 
                        primaryTypographyProps={{ fontWeight: 'medium' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="Manager" 
                        secondary="April 2019 - September 2020 (1 year 6 months)" 
                        primaryTypographyProps={{ fontWeight: 'medium' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="Management intern and claims processing" 
                        secondary="September 2018 - February 2019 (6 months)" 
                        primaryTypographyProps={{ fontWeight: 'medium' }}
                      />
                    </ListItem>
                  </List>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    Head office / Chennai Area, India
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={1} sx={{ p: 3, bgcolor: 'background.default' }}>
                  <Typography variant="h6" component="h3">
                    Vidal Healthcare
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Senior Medical Advisor
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    September 2017 - August 2018 (1 year)
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card>
          <CardHeader 
            title="Education & Certifications"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <SchoolIcon />
              </Avatar>
            }
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, mb: 3, height: '100%', bgcolor: 'background.default' }}>
                  <Typography variant="h6" component="h3">
                    Institute and Faculty of Actuaries
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Business Finance and Business Economics · (July 2024 - July 2024)
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, mb: 3, height: '100%', bgcolor: 'background.default' }}>
                  <Typography variant="h6" component="h3">
                    Insurance Institute of India
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Fellowship, Health and General insurance · (July 2023 - June 2024)
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, mb: { xs: 3, md: 0 }, height: '100%', bgcolor: 'background.default' }}>
                  <Typography variant="h6" component="h3">
                    Birla Institute of Technology and Science, Pilani
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Master of Business Administration (MBA), Hospital and Health Care Facilities Administration/Management · (2017 - 2019)
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, height: '100%', bgcolor: 'background.default' }}>
                  <Typography variant="h6" component="h3">
                    James Lind institute
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Advanced Post-graduate Diploma in Clinical Research and Pharmacovigilance · (2017 - 2018)
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default BusinessPage; 