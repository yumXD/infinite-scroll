import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

interface NavbarProps {
    logoSrc: string;
}

function Navbar({ logoSrc }: NavbarProps) {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img src={logoSrc} alt="Logo" />
            </Link>
            <Link to="/" className="navbar-title">리스트로</Link>
        </nav>
    );
}

export default Navbar;
