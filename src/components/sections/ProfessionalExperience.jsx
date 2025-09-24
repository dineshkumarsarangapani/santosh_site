import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { professionalExperience } from '../../content/professionalExperience';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

function ProfessionalExperience() {
    const theme = useTheme();

    // Helper function to render HTML content
    const renderHTML = (text) => {
        return <span dangerouslySetInnerHTML={{ __html: text }} />;
    };

    return (
        <Box id="professional-experience" sx={{ backgroundColor: theme.palette.background.default, py: 12 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 2, fontWeight: 700 }}>
                    {professionalExperience.title}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: theme.palette.text.secondary, mb: 8, maxWidth: '600px', mx: 'auto' }}>
                    {professionalExperience.description}
                </Typography>

                {/* Insurance & Healthcare Management */}
                <Box sx={{ mb: 8 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                        <BusinessCenterIcon color="primary" sx={{ mr: 2, fontSize: '2.5rem' }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                            {professionalExperience.insurance.title}
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ textAlign: 'center', color: theme.palette.text.secondary, mb: 6, maxWidth: '500px', mx: 'auto' }}>
                        {professionalExperience.insurance.subtitle}
                    </Typography>

                    <Grid container spacing={4}>
                        {professionalExperience.insurance.experiences.map((exp) => (
                            <Grid item xs={12} key={exp.id}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 4,
                                        backgroundColor: theme.palette.background.paper,
                                        borderRadius: 3,
                                        border: `1px solid ${theme.palette.divider}`,
                                        position: 'relative',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            width: '4px',
                                            backgroundColor: theme.palette.primary.main,
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="h5" component="h4" sx={{ fontWeight: 600, mr: 2 }}>
                                            {exp.company}
                                        </Typography>
                                        {exp.type && (
                                            <Chip label={exp.type} color="primary" size="small" />
                                        )}
                                    </Box>

                                    {exp.role && (
                                        <Typography variant="h6" component="p" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                                            {exp.role}
                                        </Typography>
                                    )}

                                    {exp.duration && (
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                            {exp.duration}
                                        </Typography>
                                    )}

                                    {exp.location && (
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                            📍 {exp.location}
                                        </Typography>
                                    )}

                                    {/* Handle roles array for Star Health */}
                                    {exp.roles ? (
                                        <Box>
                                            {exp.roles.map((role) => (
                                                <Box key={role.id} sx={{ mb: 4, p: 3, backgroundColor: theme.palette.background.default, borderRadius: 2 }}>
                                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                                        {role.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                        {role.duration}
                                                    </Typography>
                                                    <Box>
                                                        {role.responsibilities.map((responsibility, idx) => (
                                                            <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
                                                                <Box sx={{
                                                                    width: '6px',
                                                                    height: '6px',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: theme.palette.primary.main,
                                                                    mr: 2,
                                                                    mt: 1,
                                                                    flexShrink: 0
                                                                }} />
                                                                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                                                    {renderHTML(responsibility)}
                                                                </Typography>
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Box>
                                            ))}
                                        </Box>
                                    ) : (
                                        /* Handle direct responsibilities array */
                                        <Box>
                                            {exp.responsibilities.map((responsibility, idx) => (
                                                <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
                                                    <Box sx={{
                                                        width: '6px',
                                                        height: '6px',
                                                        borderRadius: '50%',
                                                        backgroundColor: theme.palette.primary.main,
                                                        mr: 2,
                                                        mt: 1,
                                                        flexShrink: 0
                                                    }} />
                                                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                                        {renderHTML(responsibility)}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    )}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Dental Practice Experience */}
                <Box sx={{ mb: 8 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                        <LocalHospitalIcon color="primary" sx={{ mr: 2, fontSize: '2.5rem' }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                            {professionalExperience.dental.title}
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ textAlign: 'center', color: theme.palette.text.secondary, mb: 6, maxWidth: '500px', mx: 'auto' }}>
                        {professionalExperience.dental.subtitle}
                    </Typography>

                    <Grid container spacing={4}>
                        {professionalExperience.dental.timeline.map((exp) => (
                            <Grid item xs={12} key={exp.id}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 4,
                                        backgroundColor: theme.palette.background.paper,
                                        borderRadius: 3,
                                        border: `1px solid ${theme.palette.divider}`,
                                        position: 'relative',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            width: '4px',
                                            backgroundColor: theme.palette.primary.main,
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="h5" component="h4" sx={{ fontWeight: 600, mr: 2 }}>
                                            {exp.company}
                                        </Typography>
                                        {exp.type && (
                                            <Chip label={exp.type} color="primary" size="small" />
                                        )}
                                    </Box>

                                    <Typography variant="h6" component="p" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                                        {exp.role}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                        {exp.duration}
                                    </Typography>

                                    <Box>
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
                                                <Box sx={{
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.primary.main,
                                                    mr: 2,
                                                    mt: 1,
                                                    flexShrink: 0
                                                }} />
                                                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                                    {responsibility}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default ProfessionalExperience;
