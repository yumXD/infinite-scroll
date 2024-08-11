import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PlaceListPage from "./pages/PlaceListPage";
import PlaceDetail from "./pages/PlaceDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar logoSrc="logo.png"/>
            <Routes>
                <Route path="/" element={<PlaceListPage/>}/>
                <Route path="/places/:name" element={<PlaceDetail/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default AppRoutes;
