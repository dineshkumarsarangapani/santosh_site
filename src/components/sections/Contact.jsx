import React from 'react';
import { Box, Typography, Button, Container, Grid, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { homeContent } from '../../content/homeContent';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
    const theme = useTheme();

    const contactDetails = [
        {
            id: 'email',
            label: 'Email',
            value: homeContent.contact.email,
            icon: EmailIcon,
            link: `mailto:${homeContent.contact.email}`,
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            value: homeContent.contact.linkedinText,
            icon: LinkedInIcon,
            link: homeContent.contact.linkedin,
        },
    ];

    return (
        <Box id="contact" sx={{ backgroundColor: theme.palette.background.paper, py: 12 }}>
            <Container maxWidth="md">
                <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 1, fontWeight: 700 }}>
                    Get In Touch
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: theme.palette.text.secondary, mb: 6 }}>
                    Prefer a direct connection? Reach out using the channels below and I’ll respond promptly.
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {contactDetails.map(({ id, label, value, icon: Icon, link }) => (
                        <Grid item xs={12} sm={6} key={id}>
                            <Button
                                component="a"
                                href={link}
                                target={id === 'linkedin' ? '_blank' : undefined}
                                rel={id === 'linkedin' ? 'noopener noreferrer' : undefined}
                                variant="outlined"
                                fullWidth
                                startIcon={<Icon />}
                                sx={{
                                    justifyContent: 'flex-start',
                                    textAlign: 'left',
                                    py: 2,
                                    px: 3,
                                    borderRadius: 3,
                                    borderColor: theme.palette.primary.main,
                                    color: theme.palette.text.primary,
                                }}
                            >
                                <Box>
                                    <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary }}>
                                        {label}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        {value}
                                    </Typography>
                                </Box>
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Contact;
