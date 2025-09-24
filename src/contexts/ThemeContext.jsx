import React, { createContext, useState, useMemo, useContext, useCallback } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

// Create the context
export const ThemeContext = createContext();

// Custom hook to use the theme context
export const useThemeContext = () => useContext(ThemeContext);

// Define theme settings - Updated with corporate executive palette
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
        // Dark mode palette from the image
        primary: {
          main: '#4CAF50', // Green accent
          contrastText: '#ffffff',
        },
        background: {
          default: '#121212', // Off-black
          paper: '#1E1E1E',   // Dark grey for surfaces
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
        },
      }
      : {
        // Light mode palette (a professional light theme)
        primary: {
          main: '#4CAF50',
          contrastText: '#ffffff',
        },
        background: {
          default: '#F5F5F5',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
        },
      }),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to dark mode
  const [mode, setMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme-preference');
    return savedTheme || 'dark';
  });

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-preference', newMode);
      return newMode;
    });
  }, []);

  // Memoize theme to prevent unnecessary re-renders
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // Values provided by the context, including the memoized toggleColorMode
  const themeContextValue = useMemo(
    () => ({
      mode,
      toggleColorMode,
    }),
    [mode, toggleColorMode]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 