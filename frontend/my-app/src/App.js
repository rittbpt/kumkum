import { BrowserRouter as Browser, Route, Routes, Switch } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import AuthRoutes from "./routes/AuthRoutes";
import UnAuthRoutes from "./routes/UnAuthRoutes";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  return (
    <>
      <Browser>
        <Routes>
  
          {AuthRoutes}
          {UnAuthRoutes}
          
        </Routes>
      </Browser>
    </>

  )
}

export default App