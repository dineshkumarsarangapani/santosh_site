import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { dentistryContent } from '../../content/dentistryContent';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import BusinessIcon from '@mui/icons-material/Business';

function Dentistry() {
    const theme = useTheme();

    // Helper function to render HTML content
    const renderHTML = (text) => {
        return <span dangerouslySetInnerHTML={{ __html: text }} />;
    };

    // Map specialization icons
    const specializationIcons = {
        'spec-preventive': LocalHospitalIcon,
        'spec-surgery': MedicalServicesIcon,
        'spec-pediatric': ChildCareIcon,
        'spec-management': BusinessIcon
    };

    return (
        <Box id="dentistry" sx={{ backgroundColor: theme.palette.background.default, py: 12 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 2, fontWeight: 700 }}>
                    {dentistryContent.pageTitle}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: theme.palette.text.secondary, mb: 8, maxWidth: '600px', mx: 'auto' }}>
                    {dentistryContent.pageDescription}
                </Typography>

                {/* Professional Summary */}
                <Paper elevation={3} sx={{ p: 5, mb: 6, borderRadius: 3, backgroundColor: theme.palette.background.paper }}>
                    <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 3, color: theme.palette.primary.main }}>
                        {dentistryContent.professionalSummary.title}
                    </Typography>
                    {dentistryContent.professionalSummary.paragraphs.map((paragraph, index) => (
                        <Typography
                            key={index}
                            variant="body1"
                            sx={{
                                lineHeight: 1.8,
                                mb: 3,
                                color: theme.palette.text.primary
                            }}
                        >
                            {paragraph}
                        </Typography>
                    ))}

                    {/* Skills Chips */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 4 }}>
                        {dentistryContent.professionalSummary.skills.map((skill) => (
                            <Chip
                                key={skill}
                                label={skill}
                                color="primary"
                                size="small"
                                sx={{ fontSize: '0.8rem' }}
                            />
                        ))}
                    </Box>
                </Paper>

                {/* Clinical Specializations */}
                <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 4, textAlign: 'center', color: theme.palette.primary.main }}>
                    {dentistryContent.clinicalSpecializations.title}
                </Typography>

                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {dentistryContent.clinicalSpecializations.specializations.map((spec) => {
                        const IconComponent = specializationIcons[spec.id];
                        return (
                            <Grid item xs={12} md={6} key={spec.id}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        backgroundColor: theme.palette.background.paper,
                                        borderRadius: 3,
                                        border: `1px solid ${theme.palette.divider}`,
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            transition: 'transform 0.3s ease-in-out',
                                            boxShadow: `0 6px 24px rgba(76, 175, 80, 0.15)`,
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        {IconComponent && <IconComponent color="primary" sx={{ mr: 2, fontSize: '2rem' }} />}
                                        <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                                            {spec.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                                        {spec.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>

            </Container>
        </Box>
    );
}

export default Dentistry;
