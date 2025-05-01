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
    ...(mode === 'light'
      ? {
          // Light mode palette - Executive style
          primary: {
            main: '#0A192F', // Deep navy blue - corporate standard
            light: '#172B4D',
            dark: '#051126',
          },
          secondary: {
            main: '#505F79', // Corporate slate gray
          },
          background: {
            default: '#F5F6F8', // Very light gray
            paper: '#FFFFFF',   // Pure white
          },
          text: {
            primary: '#172B4D', // Dark navy for text
            secondary: '#505F79', // Corporate gray
          },
        }
      : {
          // Dark mode palette - Updated to be truly dark
          primary: {
            main: '#2684FF', // Bright blue that stands out on dark
            light: '#4C9AFF',
            dark: '#0052CC',
          },
          secondary: {
            main: '#9FB0CC', // Lighter blue-gray for dark mode
          },
          background: {
            default: '#000000', // True black background
            paper: '#121212',   // Very dark gray, almost black
          },
          text: {
            primary: '#FFFFFF', // Pure white
            secondary: '#B3BAC5', // Light gray with slight blue tint
          },
        }),
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 600, // More impactful headers
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    // More refined body text
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none', // Modern executive UIs avoid all-caps buttons
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', // More subtle shadow
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: 24,
          paddingBottom: 24,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 3, // Less rounded for more corporate feel
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3, // Squared buttons are more corporate
        },
      },
    },
    // For dividers in cards
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '12px 0',
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  // Default to dark mode
  const [mode, setMode] = useState('dark');

  // Toggle between light and dark, using useCallback to memoize the function
  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
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