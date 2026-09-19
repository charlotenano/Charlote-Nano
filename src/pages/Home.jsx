import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            {/* Background Floating Shapes */}
            <div className="background-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
                <div className="shape shape-5"></div>
            </div>
            
            <Navbar />
            
            <header className="header-page" id="top">
                <div className="welcome-strip top-strip">
                    CHARLOTE NANO * CHARLOTE NANO * CHARLOTE NANO * CHARLOTE NANO * CHARLOTE NANO * CHARLOTE NANO * CHARLOTE NANO * CHARLOTE NANO * CHARLOTE NANO *
                </div>
            
                <div className="portfolio-title-card">
                    <img src="/assets/cha-titleheader.png" alt="Charlote Nano - Logo" className="title-logo" />

                    <div className="header-details">
                        <a className="tag" href="#profile-content">PROFILE</a>
                        <Link className="tag" to="/uiux">UI/UX DESIGNS</Link>
                        <Link className="tag" to="/graphic-design">GRAPHIC DESIGN</Link>
                        <Link className="tag" to="/illustration">ILLUSTRATION</Link>
                    </div>
                </div>
            </header>
            
            <main className="main-page" id="profile-content">
                <div className="portfolio-content-wrap">
                    
                    <section className="left-column">
                        <div className="profile-card">
                            <div className="profile-image-container">
                                <img src="/assets/title-cha.png" alt="Charlote Nano profile" />
                            </div>
                            
                            <div className="about-me">
                                <h3>ABOUT ME</h3>
                                <p>Hi, I'm Charlote Nano, a BS Computer Science student at Technological University of the Philippines - Manila. I am open for opportunities to work in a dynamic and creative environment where I can contribute my artistic skills.</p>
                            </div>
                        </div>
                    </section>

                    <section className="right-column">

                        <div className="info-section education">
                            <h2>EDUCATION</h2>
                            <div className="education-item">
                                <p>
                                    <img src="/assets/logos/college-logo.png" alt="TUP Logo" className="school-logo" />
                                    Technological University of the Philippines, Manila (2023 - Present)
                                </p>
                                <p>
                                    <img src="/assets/logos/shs-logo.png" alt="HNCS Logo" className="school-logo" />
                                    Holy Nazarene Christian School, Tanza Cavite (2021 - 2023)
                                </p>
                                <p>
                                    <img src="/assets/logos/jhs-logo.png" alt="ASHI Logo" className="school-logo" />
                                    Amaya School of Home Industries, Tanza Cavite (2017 - 2021)
                                </p>
                                <p>
                                    <img src="/assets/logos/elem-logo.png" alt="AES Logo" className="school-logo" />
                                    Amaya Elementary School, Tanza Cavite (2011 - 2017)
                                </p>
                            </div>
                        </div>

                        <div className="info-section experience">
                            <h2>EXPERIENCE</h2>
                            <div className="experience-item">
                                <p>
                                    <img src="/assets/logos/devcon-logo.png" alt="DEVCON Logo" className="exp-logo" />
                                    DEVCON Manila Chapter (Operations Logistics Specialist)
                                </p>
                                <p>
                                    <img src="/assets/logos/awstup-logo.png" alt="AWSTUP Logo" className="exp-logo" />
                                    AWS Learning Club - TUP Manila (Executive for Media and Design)
                                </p>
                                <p>
                                    <img src="/assets/logos/gdg-logo.png" alt="GDG Logo" className="exp-logo" />
                                    Google Developers Group on Campus - TUP Manila (Googlet Merchandise Designer)
                                </p>
                                <p>
                                    <img src="/assets/logos/compass-logo.png" alt="COMPASS Logo" className="exp-logo" />
                                    Computer Students' Association (Former Head of Creatives)
                                </p>
                                <p>
                                    <img src="/assets/logos/csc-logo.png" alt="CSC Logo" className="exp-logo" />
                                    College of Science Student Council (Former Creatives Associate)
                                </p>
                            </div>
                        </div>

                        <div className="info-section strengths">
                            <h2>SOFT SKILLS</h2>
                            <div className="tag-list">
                                <span className="skill-tag">Leadership</span>
                                <span className="skill-tag">Creativity</span>
                                <span className="skill-tag">Time Management</span>
                                <span className="skill-tag">Team Collaboration</span>
                            </div>
                        </div>

                        <div className="info-group">
                            <div className="info-section software">
                                <h2>SOFTWARE</h2>
                                <div className="app-item"> 
                                    <p><img src="/assets/logos/photoshop-logo.png" alt="Photoshop" className="app-logo" /></p>
                                    <p><img src="/assets/logos/figma-logo.png" alt="Figma" className="app-logo" /></p>
                                    <p><img src="/assets/logos/canva-logo.png" alt="Canva" className="app-logo" /></p>
                                    <p><img src="/assets/logos/ibis-logo.png" alt="Ibis Paint X" className="app-logo" /></p>
                                </div>
                            </div> 
                            <div className="info-section language">
                                <h2>LANGUAGES</h2>
                                <div className="lang-item"> 
                                    <p><img src="/assets/logos/HTML-logo.png" alt="HTML" className="lang-logo" /></p>
                                    <p><img src="/assets/logos/CSS-logo.png" alt="CSS" className="lang-logo" /></p>
                                    <p><img src="/assets/logos/Java-logo.png" alt="Java" className="lang-logo" /></p>
                                    <p><img src="/assets/logos/JS-logo.png" alt="Javascript" className="lang-logo" /></p>
                                    <p><img src="/assets/logos/Py-logo.png" alt="Python" className="lang-logo" /></p>
                                    <p><img src="/assets/logos/C-logo.png" alt="C/C++" className="lang-logo" /></p>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}