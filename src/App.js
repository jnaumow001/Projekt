import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import RecipeSearch from './RecipeSearch';
import MyAppBar from './AppBar';
import theme from './theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyAppBar />
        <RecipeSearch />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
