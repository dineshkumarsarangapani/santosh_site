import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <main className="main-content">
          <HomePage />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
