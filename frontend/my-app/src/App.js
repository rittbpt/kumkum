import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import AuthRoutes from "./routes/AuthRoutes";
import UnAuthRoutes from "./routes/UnAuthRoutes";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Browser>
        <Routes>
          { AuthRoutes }
          { UnAuthRoutes }
          {/* <Route path="/Register" element={<Register />} />, */}

        </Routes>
      </Browser>
      </ThemeProvider>
    </>

  )
}

export default App