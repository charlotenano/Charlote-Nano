import React from 'react';

export default function Footer() {
    return (
        <footer className="main-footer">
            <p>&copy; 2025 Charlote Nano. All rights reserved.</p>
            <div className="social-info">
                <p className="contact-detail-item">
                    <img src="/assets/logos/phone-icon.png" alt="Phone Icon" className="contact-icon" /> 
                    (+63) 956-486-7375
                </p>
                <p className="contact-detail-item">
                    <img src="/assets/logos/instagram-icon.png" alt="Instagram Icon" className="contact-icon" /> 
                    chaerlotes
                </p>
                <p className="contact-detail-item">
                    <img src="/assets/logos/email-icon.png" alt="Email Icon" className="contact-icon" /> 
                    charlotenano29@gmail.com
                </p>
            </div>
        </footer>
    );
}