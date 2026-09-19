import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const illustrationProjects = [
    { img: '/assets/portfolio/illus1.jpg', title: 'Girl in Yellow', desc: 'Colored Pencil: February 18, 2025' },
    { img: '/assets/portfolio/illus2.jpg', title: 'Fireworks in Bloom', desc: 'Colored Pencil: February 9, 2025' },
    { img: '/assets/portfolio/illus3.jpg', title: 'Onion Fairies', desc: 'Oil Pastel: October 4, 2024' }
];

export default function IllustrationPortfolio() {
    return (
        <div id="top">
            <Navbar />
            <main className="main-gallery-wrap">
                <h2 className="section-title">Illustration Projects</h2>
                <section className="illus-container">
                    {illustrationProjects.map((project, index) => (
                        <div className="illus-item" key={index}>
                            <img src={project.img} alt={project.title} />
                            <div className="caption">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}