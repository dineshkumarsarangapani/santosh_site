import React from 'react';
import { Box, Typography, Container, Grid, Paper, Avatar, Button, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import DownloadIcon from '@mui/icons-material/Download';

const testimonials = [
    {
        name: 'Mr. Subbiah M.',
        title: 'National Head - Motor Third Party',
        company: 'Cholamandalam MS General Insurance Co Ltd.',
        image: '',
        quote: '"He has consistently exceeded my expectations and demonstrated exceptional abilities in Insurance Analysis, Claims Management and Networking of Hospitals. One of Dr. Santosh\'s greatest strengths is Leadership, Strategy and Analytical skills."',
        highlights: ['5 years collaboration', 'Leadership & Strategy', 'Analytical Excellence', 'Team Success Contributor'],
        pdfLink: '/Reference letter Mr. Subbiah.pdf'
    },
    {
        name: 'Dr. S. Guru Mageswaran',
        title: 'Joint Vice President',
        company: 'Star Health and Allied Insurance',
        image: '',
        quote: '"Santosh brings a rare combination of interdisciplinary expertise, with academic credentials in Dental Surgery (BDS) and Business Administration (MBA), complemented by professional achievements in data-driven analysis, strategic problem-solving, and project leadership."',
        highlights: ['Interdisciplinary Expert', 'Data-Driven Analysis', 'Strategic Problem-Solving', 'Excellence Award Winner'],
        pdfLink: '/Professional reference Mr. Mrinal.pdf'
    },
    {
        name: 'Star Health Leadership Team',
        title: 'Senior Management',
        company: 'Star Health and Allied Insurance',
        image: '',
        quote: '"Dr. Santosh Kumar has been instrumental in implementing various technological projects including Automation of claims, Knowledge bot and pricing of hospitals. His positive attitude and ability to work well under pressure make him a valuable asset to any team."',
        highlights: ['Technology Implementation', 'Claims Automation', 'Hospital Pricing Expert', 'Pressure Performance'],
        pdfLink: '/Professional References Star Health 2 nos.pdf'
    }
];

function Testimonials() {
    const theme = useTheme();

    return (
        <Box id="testimonials" sx={{ backgroundColor: theme.palette.background.paper, py: 12 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 2, fontWeight: 700 }}>
                    Professional References
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: theme.palette.text.secondary, mb: 8, maxWidth: '600px', mx: 'auto' }}>
                    Download detailed professional reference letters from colleagues and supervisors highlighting my performance and leadership capabilities.
                </Typography>

                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    backgroundColor: theme.palette.background.default,
                                    height: '100%',
                                    borderRadius: 3,
                                    border: `1px solid ${theme.palette.divider}`,
                                    position: 'relative',
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
                                <FormatQuoteIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 3, lineHeight: 1.7, fontStyle: 'italic' }}>
                                    {testimonial.quote}
                                </Typography>

                                {/* Highlight Chips */}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                    {testimonial.highlights.map((highlight) => (
                                        <Chip
                                            key={highlight}
                                            label={highlight}
                                            size="small"
                                            color="primary"
                                            variant="outlined"
                                            sx={{ fontSize: '0.7rem' }}
                                        />
                                    ))}
                                </Box>

                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 500, mb: 0.5 }}>
                                        {testimonial.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                        {testimonial.company}
                                    </Typography>
                                </Box>

                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<DownloadIcon />}
                                    fullWidth
                                    component="a"
                                    href={testimonial.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        borderRadius: 2,
                                        '&:hover': {
                                            backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                        }
                                    }}
                                >
                                    Download Reference
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Testimonials;
