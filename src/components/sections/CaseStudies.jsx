import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { businessContent } from '../../content/businessContent';
import SecurityIcon from '@mui/icons-material/Security';
import LanIcon from '@mui/icons-material/Lan';
import SpeedIcon from '@mui/icons-material/Speed';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

const iconMap = {
    Security: SecurityIcon,
    Lan: LanIcon,
    Speed: SpeedIcon,
    PriceCheck: PriceCheckIcon
};

function CaseStudies() {
    const theme = useTheme();

    // Helper function to render HTML content
    const renderHTML = (text) => {
        return <span dangerouslySetInnerHTML={{ __html: text }} />;
    };

    return (
        <Box id="case-studies" sx={{ backgroundColor: theme.palette.background.default, py: 12 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 2, fontWeight: 700 }}>
                    {businessContent.keyAchievements.title}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: theme.palette.text.secondary, mb: 8, maxWidth: '600px', mx: 'auto' }}>
                    Explore my key professional achievements in insurance, fraud detection, and healthcare management that have delivered measurable impact.
                </Typography>

                <Grid container spacing={4}>
                    {businessContent.keyAchievements.achievements.map((item, index) => {
                        const IconComponent = iconMap[item.icon];
                        return (
                            <Grid item xs={12} md={6} key={item.id}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        height: '100%',
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
                                        },
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            transition: 'transform 0.3s ease-in-out',
                                            boxShadow: `0 8px 32px rgba(76, 175, 80, 0.2)`,
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        {IconComponent && <IconComponent color="primary" sx={{ mr: 2, fontSize: '2.5rem' }} />}
                                        <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                                        {renderHTML(item.description)}
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

export default CaseStudies;
