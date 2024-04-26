import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Albuns from "../components/Albuns"
 
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Albuns />}/>
            </Routes>
        </BrowserRouter>
    )
}