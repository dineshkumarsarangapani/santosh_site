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
import ArticleIcon from '@mui/icons-material/Article';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useThemeContext } from '../contexts/ThemeContext';

function BusinessPage() {
  const skills = [
    'Fraud Detection', 
    'Cost Savings', 
    'Dispute Resolution', 
    'Healthcare Management',
    'Risk Assessment',
    'Process Optimization',
    'Team Leadership',
    'Insurance Operations',
    'Strategic Planning',
    'Regulatory Compliance',
    'Data Analysis'
  ];
  const { mode } = useThemeContext();

  // Conditional styles based on theme mode
  const innerPaperStyle = {
    p: 3, 
    mb: mode === 'light' ? 3 : 2.5, 
    borderRadius: '4px',
    bgcolor: mode === 'light' ? 'background.default' : 'rgba(38, 132, 255, 0.04)',
    border: mode === 'light' ? 'none' : '1px solid rgba(38, 132, 255, 0.1)',
    boxShadow: mode === 'light' ? 1 : 'none'
  };

  const cardStyle = {
    mb: 4,
    bgcolor: mode === 'light' ? 'background.paper' : '#121212',
    borderRadius: '4px',
    border: mode === 'light' ? '1px solid #E9EBEE' : 'none'
  };

  const listItemStyle = {
    mb: 1,
    borderRadius: '4px',
    bgcolor: mode === 'light' ? 'transparent' : 'rgba(38, 132, 255, 0.02)',
    border: mode === 'light' ? 'none' : '1px solid rgba(38, 132, 255, 0.05)',
    '&:hover': {
      bgcolor: mode === 'light' ? 'rgba(0, 0, 0, 0.02)' : 'rgba(38, 132, 255, 0.08)',
    }
  };

  const chipStyle = {
    m: '2px',
    border: mode === 'dark' ? '1px solid rgba(38, 132, 255, 0.3)' : 'none',
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Paper elevation={2} sx={{ 
          p: 4, 
          mb: 4, 
          borderRadius: '4px',
          border: mode === 'light' ? '1px solid #E9EBEE' : 'none',
        }}>
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

        {/* Professional Summary Section */}
        <Card sx={cardStyle}>
          <CardHeader 
            title="Executive Profile"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <ArticleIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              Healthcare executive with over 10+ years of progressive experience in health insurance and healthcare administration. Currently serving as National Head of Investigation and Fraud Mitigation at Cholamandalam MS General Insurance, where I've successfully implemented AI-driven fraud detection systems reducing fraudulent claims by 28% and generating annual savings of ₹3.4 crore ($410,000 USD / £325,000).
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              Having risen through the ranks at Star Health and Allied Insurance from intern to Division Head, I specialize in optimizing healthcare operations, improving claim settlement processes, and establishing provider networks. My dual expertise in dentistry and business administration provides a unique perspective on healthcare delivery and insurance operations.
            </Typography>
          </CardContent>
        </Card>

        {/* Key Business Achievements Section - NEW */}
        <Card sx={cardStyle}>
          <CardHeader 
            title="Key Business Achievements"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <ShowChartIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Fraud Detection Innovation
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    Led the implementation of an AI-based fraud detection system at Cholamandalam MS that analyzes claim patterns and provider behaviors to identify potential fraud. This initiative reduced fraudulent claims by 28% and saved approximately ₹3.4 crore ($410,000 USD / £325,000) annually, significantly improving the company's financial performance.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Network Expansion
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    As Division Head at Star Health, led the strategic expansion of the provider network across South India, successfully onboarding 3000+ hospitals and establishing standardized service agreements. This expansion improved geographical coverage for policyholders and enhanced claim settlement efficiency by 35%.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Process Optimization
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    Developed new claims processing workflow at Star Health, implementing a tiered review system and standardized documentation requirements. These changes reduced approval turnaround time from 7 days to 3 days while maintaining an exceptional 99.2% accuracy rate.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Strategic Pricing
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    Developed and implemented a data-driven healthcare pricing strategy at Vidal Healthcare that balanced fair reimbursement for providers with cost management for insurers. This initiative optimized reimbursement rates and reduced payment disputes by 40%, improving relationships with network providers.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={cardStyle}>
          <CardHeader 
            title="Core Competencies"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <WorkspacePremiumIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill) => (
                <Chip 
                  key={skill} 
                  label={skill} 
                  color="primary" 
                  sx={chipStyle} 
                />
              ))}
            </Stack>
          </CardContent>
        </Card>

        {/* Leadership Approach Section - NEW */}
        <Card sx={cardStyle}>
          <CardHeader 
            title="Leadership Approach"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <TimelineIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              My leadership philosophy centers on empowering team members through clear communication, professional development opportunities, and accountability. I lead cross-functional teams with a collaborative approach that leverages each member's strengths while providing mentorship to develop their capabilities.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              At Cholamandalam MS, I manage a diverse team of 25 professionals across 4 regional offices, implementing standardized investigation protocols while adapting to regional healthcare differences. My leadership has fostered a culture of analytical problem-solving and continuous improvement, resulting in consistently exceeding fraud detection targets by 15-20% quarterly.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              <Chip label="Team Development" color="primary" size="small" sx={chipStyle} />
              <Chip label="Mentorship" color="primary" size="small" sx={chipStyle} />
              <Chip label="Cross-functional Collaboration" color="primary" size="small" sx={chipStyle} />
              <Chip label="Strategic Decision Making" color="primary" size="small" sx={chipStyle} />
            </Box>
          </CardContent>
        </Card>

        <Card sx={cardStyle}>
          <CardHeader 
            title="Professional Experience"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <WorkHistoryIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3">
                    Cholamandalam MS General Insurance Co. Ltd.
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    National Head - Investigation and Fraud Mitigation, Health Accident and Travel
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    March 2023 - Present | Chennai, Tamil Nadu, India
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    • Implemented AI-based fraud detection system, reducing fraudulent claims by 28% and saving ₹3.4 crore ($410,000 USD / £325,000) annually
                    <br />
                    • Led a team of 25 professionals across 4 regional offices, overseeing health, accident, and travel claims verification
                    <br />
                    • Developed corporate-wide fraud prevention strategy, resulting in 40% faster fraud identification
                    <br />
                    • Collaborate with legal and medical teams to establish robust verification protocols
                    <br />
                    • Report directly to C-suite executives on fraud trends, providing strategic insights for policy development
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Paper elevation={0} sx={innerPaperStyle}>
                  <Typography variant="h6" component="h3">
                    Star Health and Allied Insurance Co. Ltd (3 years 11 months)
                  </Typography>
                  <List dense sx={{ 
                    pl: 2,
                    mt: 2
                  }}>
                    <ListItem sx={listItemStyle}>
                      <ListItemText 
                        primary="Division Head" 
                        primaryTypographyProps={{ fontWeight: 'medium' }}
                        secondaryTypographyProps={{ gutterBottom: true }}
                        secondary={
                          <>
                            June 2022 - February 2023 (9 months)
                            <Box sx={{ mt: 1 }}>
                              • Led the provider network team for South India, managing relationships with 3000+ hospitals
                              <br />
                              • Streamlined authorization process, reducing turnaround time by 35%
                              <br />
                              • Negotiated favorable reimbursement rates with key hospital chains, achieving 12% cost savings
                              <br />
                              • Implemented quality monitoring system for in-network providers, improving patient satisfaction scores by 18%
                            </Box>
                          </>
                        }
                      />
                    </ListItem>
                    <ListItem sx={listItemStyle}>
                      <ListItemText 
                        primary="Deputy Head Of Department" 
                        primaryTypographyProps={{ fontWeight: 'medium' }}
                        secondaryTypographyProps={{ gutterBottom: true }}
                        secondary={
                          <>
                            October 2020 - June 2022 (1 year 9 months)
                            <Box sx={{ mt: 1 }}>
                              • Developed and implemented claims adjudication guidelines across multiple product lines
                              <br />
                              • Reduced claim dispute rate by 42% through improved communication protocols
                              <br />
                              • Conducted training sessions for claims processors, improving operational efficiency by 22%
                              <br />
                              • Assisted in development of new health insurance products, incorporating insights from claims data
                            </Box>
                          </>
                        } 
                      />
                    </ListItem>
                    <ListItem sx={listItemStyle}>
                      <ListItemText 
                        primary="Manager" 
                        primaryTypographyProps={{ fontWeight: 'medium' }}
                        secondaryTypographyProps={{ gutterBottom: true }}
                        secondary={
                          <>
                            April 2019 - September 2020 (1 year 6 months)
                            <Box sx={{ mt: 1 }}>
                              • Supervised a team of 12 claim processors, handling 200+ claims daily
                              <br />
                              • Improved claim accuracy rate to 99.2% through standardized review processes
                              <br />
                              • Identified and implemented process improvements that reduced claim processing time by 30%
                              <br />
                              • Collaborated with IT department to develop automated flagging system for potentially fraudulent claims
                            </Box>
                          </>
                        } 
                      />
                    </ListItem>
                    <ListItem sx={listItemStyle}>
                      <ListItemText 
                        primary="Management Intern and Claims Processing" 
                        primaryTypographyProps={{ fontWeight: 'medium' }}
                        secondaryTypographyProps={{ gutterBottom: true }}
                        secondary={
                          <>
                            September 2018 - February 2019 (6 months)
                            <Box sx={{ mt: 1 }}>
                              • Conducted competitive analysis of health insurance products in the market
                              <br />
                              • Processed claims and assisted in developing training materials for new hires
                              <br />
                              • Participated in cross-departmental projects to gain comprehensive understanding of insurance operations
                              <br />
                              • Contributed to process improvement initiatives that reduced paperwork by 25%
                            </Box>
                          </>
                        } 
                      />
                    </ListItem>
                  </List>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2, mt: 1 }}>
                    Head office / Chennai Area, India
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={0} sx={{...innerPaperStyle, mb: 0}}>
                  <Typography variant="h6" component="h3">
                    Vidal Healthcare
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Senior Medical Advisor
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    September 2017 - August 2018 (1 year)
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    • Developed healthcare pricing strategy that optimized reimbursement rates and reduced payment disputes by 40%
                    <br />
                    • Served as liaison between medical providers and insurance partners
                    <br />
                    • Evaluated medical necessity and appropriateness of treatments for claim authorization
                    <br />
                    • Conducted medical audits of providers to ensure compliance with service agreements
                    <br />
                    • Created standardized treatment protocols for common procedures to improve consistency in care delivery
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Industry Certifications Section - NEW */}
        <Card sx={cardStyle}>
          <CardHeader 
            title="Industry Certifications"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <SecurityIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{...innerPaperStyle, height: '100%'}}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Healthcare Fraud Investigation Certificate
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Association of Certified Fraud Examiners • 2023
                  </Typography>
                  <Typography variant="body2">
                    Specialized training in detecting and investigating healthcare claim fraud, including emerging patterns and investigation techniques.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{...innerPaperStyle, height: '100%'}}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Healthcare Analytics Professional
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    International Institute for Analytics • 2022
                  </Typography>
                  <Typography variant="body2">
                    Advanced certification in healthcare data analytics, focusing on claim pattern analysis and predictive modeling for risk assessment.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Strategic Vision Section - NEW */}
        <Card sx={cardStyle}>
          <CardHeader 
            title="Strategic Vision"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <AnalyticsIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              My vision for healthcare administration centers on leveraging technology and data analytics to create more efficient, transparent, and patient-centered insurance systems. I believe in balancing robust fraud prevention with streamlined claim processing to ensure legitimate claims are settled quickly while protecting against improper payments.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              Looking forward, I aim to further integrate advanced AI technologies with human expertise to develop next-generation fraud detection systems that can adapt to evolving fraud schemes. My goal is to establish industry benchmarks for fraud prevention while maintaining exceptional service levels for policyholders and providers.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{...cardStyle, mb: 0}}>
          <CardHeader 
            title="Education & Certifications"
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <SchoolIcon />
              </Avatar>
            }
          />
          <Divider sx={{ opacity: mode === 'dark' ? 0.1 : 0.2 }} />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{...innerPaperStyle, height: '100%'}}>
                  <Typography variant="h6" component="h3">
                    Institute and Faculty of Actuaries
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    Business Finance and Business Economics · (July 2024 - July 2024)
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    • Specialized study in financial mathematics and statistical modeling for insurance risk assessment
                    <br />
                    • Focus on economic principles applied to healthcare pricing and coverage determination
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{...innerPaperStyle, height: '100%'}}>
                  <Typography variant="h6" component="h3">
                    Insurance Institute of India
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    Fellowship, Health and General insurance · (July 2023 - June 2024)
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    • Advanced training in health insurance claims management and underwriting principles
                    <br />
                    • Certification in risk assessment methodologies and compliance frameworks
                    <br />
                    • Research on fraud detection techniques in health insurance claims
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{...innerPaperStyle, height: '100%', mb: { xs: 3, md: 0 }}}>
                  <Typography variant="h6" component="h3">
                    Birla Institute of Technology and Science, Pilani
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    Master of Business Administration (MBA), Hospital and Health Care Facilities Administration/Management · (2017 - 2019)
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    • Specialized in healthcare operations management and insurance administration
                    <br />
                    • Capstone project: "Optimizing Hospital-Insurer Relations for Improved Patient Outcomes"
                    <br />
                    • Coursework in healthcare economics, strategic planning, and financial management
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{...innerPaperStyle, height: '100%', mb: 0}}>
                  <Typography variant="h6" component="h3">
                    James Lind Institute
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    Advanced Post-graduate Diploma in Clinical Research and Pharmacovigilance · (2017 - 2018)
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    • Training in clinical trial design, medical data analysis, and regulatory compliance
                    <br />
                    • Developed expertise in medical necessity assessment for treatment verification
                    <br />
                    • Applied pharmacological knowledge to insurance policy development
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