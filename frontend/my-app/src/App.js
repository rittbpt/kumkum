import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSnackbar } from 'notistack';
import Login from './Login'
import Test from './test'




function App() {
  return (
    <Browser>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Test />} />
      </Routes>
    </Browser>
  )
}

export default App