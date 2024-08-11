import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PlaceListPage from "./pages/PlaceListPage";
import PlaceDetail from "./pages/PlaceDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
                <Navbar logoSrc="logo.png"/>
                <div style={{flex: 1, overflowY: 'auto'}}>
                    <Routes>
                        <Route path="/" element={<PlaceListPage/>}/>
                        <Route path="/places/:name" element={<PlaceDetail/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;
