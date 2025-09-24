import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { education } from '../../content/education';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Education() {
    const theme = useTheme();

    // Helper function to render HTML content
    const renderHTML = (text) => {
        return <span dangerouslySetInnerHTML={{ __html: text }} />;
    };

    return (
        <Box id="education" sx={{ backgroundColor: theme.palette.background.paper, py: 12 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 2, fontWeight: 700 }}>
                    {education.title}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: theme.palette.text.secondary, mb: 8, maxWidth: '600px', mx: 'auto' }}>
                    {education.description}
                </Typography>

                {/* Current Academic Pursuit */}
                <Paper elevation={3} sx={{ p: 5, mb: 6, borderRadius: 3, backgroundColor: theme.palette.background.default, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: theme.palette.primary.main } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <SchoolIcon color="primary" sx={{ mr: 2, fontSize: '2.5rem' }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                            {education.current.title}
                        </Typography>
                    </Box>

                    <Typography variant="h5" component="h4" sx={{ fontWeight: 600, mb: 1 }}>
                        {education.current.program.institution}
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ fontWeight: 500, mb: 2, color: theme.palette.primary.main }}>
                        {education.current.program.detail}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {education.current.program.years}
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                        {education.current.program.description.map((detail, index) => (
                            <Typography key={index} variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                                {detail}
                            </Typography>
                        ))}
                    </Box>
                </Paper>

                {/* Professional Qualifications */}
                <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 4, textAlign: 'center', color: theme.palette.primary.main }}>
                    {education.professional.title}
                </Typography>

                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {education.professional.credentials.map((cred) => (
                        <Grid item xs={12} md={6} key={cred.id}>
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    backgroundColor: theme.palette.background.default,
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
                                    <WorkspacePremiumIcon color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                                    <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                                        {cred.institution}
                                    </Typography>
                                </Box>
                                <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                                    {cred.detail}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                    {cred.years}
                                </Typography>
                                <Box>
                                    {cred.description.map((desc, index) => (
                                        <Typography key={index} variant="body2" sx={{ lineHeight: 1.6, mb: 1.5 }}>
                                            • {desc}
                                        </Typography>
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Graduate Education */}
                <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 4, textAlign: 'center', color: theme.palette.primary.main }}>
                    {education.graduate.title}
                </Typography>

                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {education.graduate.degrees.map((degree) => (
                        <Grid item xs={12} key={degree.id}>
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 4,
                                    backgroundColor: theme.palette.background.default,
                                    borderRadius: 3,
                                    border: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <MenuBookIcon color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                                    <Typography variant="h5" component="h4" sx={{ fontWeight: 600 }}>
                                        {degree.institution}
                                    </Typography>
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: theme.palette.primary.main }}>
                                    {degree.detail}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                    {degree.years}
                                </Typography>
                                <Box>
                                    {degree.description.map((desc, index) => (
                                        <Typography key={index} variant="body2" sx={{ lineHeight: 1.6, mb: 1.5 }}>
                                            • {desc}
                                        </Typography>
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Undergraduate Education */}
                <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 4, textAlign: 'center', color: theme.palette.primary.main }}>
                    {education.undergraduate.title}
                </Typography>

                <Paper elevation={2} sx={{ p: 4, backgroundColor: theme.palette.background.default, borderRadius: 3, border: `1px solid ${theme.palette.divider}` }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <SchoolIcon color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                        <Typography variant="h5" component="h4" sx={{ fontWeight: 600 }}>
                            {education.undergraduate.degree.institution}
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        {education.undergraduate.degree.location}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: theme.palette.primary.main }}>
                        {education.undergraduate.degree.detail}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {education.undergraduate.degree.years}
                    </Typography>

                    <Box>
                        {education.undergraduate.degree.description.map((detail, index) => (
                            <Typography key={index} variant="body2" sx={{ lineHeight: 1.6, mb: 1.5 }}>
                                • {detail}
                            </Typography>
                        ))}
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default Education;
