import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Hero from '../components/sections/Hero';
import KeyAchievements from '../components/sections/KeyAchievements';
import Dentistry from '../components/sections/Dentistry';
import Education from '../components/sections/Education';
import ProfessionalExperience from '../components/sections/ProfessionalExperience';
import CaseStudies from '../components/sections/CaseStudies';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <KeyAchievements />
      <Dentistry />
      <Education />
      <ProfessionalExperience />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </>
  );
}

export default HomePage; 