import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PlaceListPage from "./pages/PlaceListPage";
import PlaceDetail from "./pages/PlaceDetail";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PlaceListPage/>}/>
                <Route path="/places/:name" element={<PlaceDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
