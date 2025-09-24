import React from 'react';
import { Box, Typography, Button, Container, Grid, Avatar, Chip, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { homeContent } from '../../content/homeContent';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Hero() {
    const theme = useTheme();

    // Helper function to render HTML content
    const renderHTML = (text) => {
        return <span dangerouslySetInnerHTML={{ __html: text }} />;
    };

    return (
        <Box id="hero" sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            py: { xs: 8, md: 12 },
        }}>
            <Container maxWidth="lg">
                {/* Profile Section - Centered */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                        <Avatar
                            src={homeContent.profile.profileImagePath}
                            alt={homeContent.profile.name}
                            sx={{
                                width: { xs: 200, md: 250 },
                                height: { xs: 200, md: 250 },
                                border: `4px solid ${theme.palette.primary.main}`,
                                boxShadow: `0 8px 32px rgba(76, 175, 80, 0.3)`,
                            }}
                        />
                    </Box>
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
                        {homeContent.profile.name}
                    </Typography>
                    <Typography variant="h5" component="p" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
                        {homeContent.profile.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 4 }}>
                        📍 {homeContent.profile.location}
                    </Typography>

                    {/* Dual Expertise Highlight */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 4 }}>
                        <Paper
                            elevation={2}
                            sx={{
                                p: 3,
                                borderRadius: 3,
                                backgroundColor: theme.palette.background.paper,
                                border: `2px solid ${theme.palette.primary.main}`,
                                textAlign: 'center',
                                minWidth: '200px'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                                <Box sx={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: theme.palette.primary.main,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2
                                }}>
                                    <SchoolIcon sx={{ fontSize: '20px', color: 'white' }} />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                                    Dentistry
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                BDS • Clinical Practice
                            </Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                500+ Patients Treated
                            </Typography>
                        </Paper>

                        <Paper
                            elevation={2}
                            sx={{
                                p: 3,
                                borderRadius: 3,
                                backgroundColor: theme.palette.background.paper,
                                border: `2px solid ${theme.palette.primary.main}`,
                                textAlign: 'center',
                                minWidth: '200px'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                                <Box sx={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: theme.palette.primary.main,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2
                                }}>
                                    <BusinessCenterIcon sx={{ fontSize: '20px', color: 'white' }} />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                                    Insurance & Business
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                MBA • FIII • National Head
                            </Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                10+ Years Leadership
                            </Typography>
                        </Paper>
                    </Box>

                    {/* Professional Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 4 }}>
                        {homeContent.profile.tags.map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                color="primary"
                                size="small"
                                sx={{ fontSize: '0.75rem' }}
                            />
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button variant="contained" color="primary" size="large" href="#contact">
                            Get In Touch
                        </Button>
                        <Button variant="outlined" color="primary" size="large" href="#case-studies">
                            View My Work
                        </Button>
                    </Box>
                </Box>

                {/* Executive Summary - Centered */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ maxWidth: '800px', width: '100%' }}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 5,
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 3,
                                border: `1px solid ${theme.palette.divider}`,
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '4px',
                                    height: '100%',
                                    backgroundColor: theme.palette.primary.main,
                                }
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 4,
                                    color: theme.palette.primary.main,
                                    position: 'relative'
                                }}
                            >
                                {homeContent.summary.title}
                            </Typography>

                            {homeContent.summary.paragraphs.map((paragraph, index) => {
                                // Define icons for each section
                                const sectionIcons = [
                                    VisibilityIcon,       // Vision & Commitment
                                    SchoolIcon,           // Current Academic Pursuit
                                    BusinessCenterIcon,   // Professional Leadership
                                    TrendingUpIcon,       // Strategic Experience
                                    WorkspacePremiumIcon, // Professional Qualifications
                                    MenuBookIcon          // Educational Foundation
                                ];

                                const IconComponent = sectionIcons[index];

                                return (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                        <Box sx={{
                                            minWidth: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: theme.palette.primary.main,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mr: 2,
                                            mt: 0.5,
                                            flexShrink: 0
                                        }}>
                                            {IconComponent && <IconComponent sx={{ fontSize: '20px', color: 'white' }} />}
                                        </Box>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                lineHeight: 1.8,
                                                fontSize: '1rem',
                                                color: theme.palette.text.primary,
                                                '& strong': {
                                                    color: theme.palette.primary.main,
                                                    fontWeight: 700
                                                }
                                            }}
                                        >
                                            {renderHTML(paragraph)}
                                        </Typography>
                                    </Box>
                                );
                            })}
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Hero;
