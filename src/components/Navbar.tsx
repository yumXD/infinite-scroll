import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    logoSrc: string;
}

function Navbar({ logoSrc }: NavbarProps) {
    return (
        <nav>
            <Link to="/">
                <img src={logoSrc} alt="Logo" />
            </Link>
            <Link to="/">
                <span>리스트로</span>
            </Link>
        </nav>
    );
}

export default Navbar;
