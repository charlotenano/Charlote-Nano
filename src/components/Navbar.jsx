import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="main-nav">
            <Link to="/" className="nav-brand-link">
                <img src="/assets/cha-titleheader.png" alt="Charlote Nano Logo" className="cha-logo" />
            </Link>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/uiux">UI/UX</Link></li>
                <li><Link to="/graphic-design">Graphic Design</Link></li>
                <li><Link to="/illustration">Illustration</Link></li>
            </ul>
        </nav>
    );
}