import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DentistryPage from './pages/DentistryPage';
import BusinessPage from './pages/BusinessPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline /> {/* Normalize CSS and apply baseline styles */}
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dentistry" element={<DentistryPage />} />
              <Route path="/business" element={<BusinessPage />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
