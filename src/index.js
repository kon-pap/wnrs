import React from 'react';
import ReactDOM from 'react-dom';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@mui/material/styles';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveFontSizes(createTheme({
      palette: {
        primary: {
          main: '#c10016',
        },
      },
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"', 
          '"Helvetica Neue"',
          'sans-serif',
        ].join(','),
        button: {
          fontSize: 18,
          fontWeight: 800,
          height: "88px",
        },
      }
    }))}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
