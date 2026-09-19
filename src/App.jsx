import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UIUXPortfolio from './pages/UIUXPortfolio';
import GraphicPortfolio from './pages/GraphicPortfolio';
import IllustrationPortfolio from './pages/IllustrationPortfolio';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/uiux" element={<UIUXPortfolio />} />
                <Route path="/graphic-design" element={<GraphicPortfolio />} />
                <Route path="/illustration" element={<IllustrationPortfolio />} />
            </Routes>
        </Router>
    );
}