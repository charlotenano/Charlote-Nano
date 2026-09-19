import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const uiuxProjects = [
    { img: '/assets/portfolio/program-me.png', title: 'Program.Me', desc: 'Group Project: Programming Language Course - 2025' },
    { img: '/assets/portfolio/program-me2.png', title: 'Program.Me', desc: 'Group Project: Programming Language Course - 2025' },
    { img: '/assets/portfolio/program-me3.png', title: 'Program.Me', desc: 'Group Project: Programming Language Course - 2025' },
    { img: '/assets/portfolio/docureq1.png', title: 'Document Request System', desc: 'Group Project: Project Management Course - 2025' },
    { img: '/assets/portfolio/docureq2.png', title: 'Document Request System', desc: 'Group Project: Project Management Course - 2025' },
    { img: '/assets/portfolio/docureq3.png', title: 'Document Request System', desc: 'Group Project: Project Management Course - 2025' },
    { img: '/assets/portfolio/docureq4.png', title: 'Document Request System', desc: 'Group Project: Project Management Course - 2025' },
    { img: '/assets/portfolio/docureq5.png', title: 'Document Request System', desc: 'Group Project: Project Management Course - 2025' },
    { img: '/assets/portfolio/docureq6.png', title: 'Document Request System', desc: 'Group Project: Project Management Course - 2025' }
];

export default function UIUXPortfolio() {
    return (
        <div id="top">
            <Navbar />
            <main className="main-gallery-wrap">
                <h2 className="section-title">UI/UX Design Projects</h2>
                <div className="scrolling-gallery-wrapper">
                    <section className="gallery-container moving-gallery-track">
                        {[...uiuxProjects, ...uiuxProjects].map((project, index) => (
                            <div className="gallery-item" key={index}>
                                <img src={project.img} alt={`Project: ${project.title}`} />
                                <div className="caption">
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}