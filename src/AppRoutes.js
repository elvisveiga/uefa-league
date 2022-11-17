import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Clubes from './Pages/Clubes';
import Home from './Pages/Home';

function AppRoutes() {
    return <BrowserRouter>
        <NavBar />
        <Box mt={10} p={3}>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/clubes" element={<Clubes />} />
            </Routes>
        </Box>
    </BrowserRouter>
}

export default AppRoutes;