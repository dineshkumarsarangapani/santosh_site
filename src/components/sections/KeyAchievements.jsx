import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { homeContent } from '../../content/homeContent';
import VerifiedIcon from '@mui/icons-material/Verified';

function KeyAchievements() {
    const theme = useTheme();

    // Helper function to render HTML content
    const renderHTML = (text) => {
        return <span dangerouslySetInnerHTML={{ __html: text }} />;
    };

    return (
        <Box id="key-achievements" sx={{ backgroundColor: theme.palette.background.paper, py: 12 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 2,
                        fontWeight: 700,
                        color: theme.palette.primary.main
                    }}
                >
                    {homeContent.summary.keyAchievementsTitle}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        mb: 8,
                        maxWidth: '600px',
                        mx: 'auto'
                    }}
                >
                    Highlighting my most significant professional accomplishments that have delivered measurable impact across healthcare and insurance sectors.
                </Typography>

                <Grid container spacing={4}>
                    {homeContent.summary.achievements.map((achievement, index) => {
                        // Define appropriate titles for each achievement
                        const achievementTitles = [
                            "AI-Driven Fraud Detection",      // Achievement 1
                            "Network Expansion Excellence",   // Achievement 2  
                            "Healthcare Pricing Innovation",  // Achievement 3
                            "Process Automation Success"      // Achievement 4
                        ];

                        return (
                            <Grid item xs={12} md={6} key={achievement.id}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        backgroundColor: theme.palette.background.default,
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
                                        },
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            transition: 'transform 0.3s ease-in-out',
                                            boxShadow: `0 8px 32px rgba(76, 175, 80, 0.2)`,
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Box sx={{
                                            minWidth: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: theme.palette.primary.main,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mr: 2
                                        }}>
                                            <VerifiedIcon sx={{ fontSize: '24px', color: 'white' }} />
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.primary.main
                                            }}
                                        >
                                            {achievementTitles[index]}
                                        </Typography>
                                    </Box>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            lineHeight: 1.7,
                                            '& strong': {
                                                color: theme.palette.primary.main,
                                                fontWeight: 700
                                            }
                                        }}
                                    >
                                        {renderHTML(achievement.text)}
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

export default KeyAchievements;
