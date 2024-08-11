import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PlaceListPage from "./pages/PlaceListPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PlaceListPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
