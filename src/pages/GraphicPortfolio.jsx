import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const graphicProjects = [
    { img: '/assets/portfolio/aws1.png', title: 'AWS User Group Philippines', desc: 'AWS User Group Philippines August Meetup: Builder Cards' },
    { img: '/assets/portfolio/aws2.png', title: 'AWS User Group Philippines', desc: 'AWS User Group Philippines August Meetup: Builder Cards' },
    { img: '/assets/portfolio/aws3.png', title: 'AWS User Group Philippines', desc: 'AWS User Group Philippines August Meetup: Main Publication and Branding Assets' },
    { img: '/assets/portfolio/berryJ.png', title: 'Berry Juice', desc: 'Canned juice branding design' },
    { img: '/assets/portfolio/b2b.png', title: 'COMPASS: Brain to Binary Seminar', desc: "Computer Students' Association: Main Publication and Branding Assets" },
    { img: '/assets/portfolio/gdg1.png', title: 'Google Developers Group on Campus TUP Manila', desc: 'ID Lanyard Merchandise Design 2025' },
    { img: '/assets/portfolio/gdg2.png', title: 'Google Developers Group on Campus TUP Manila', desc: 'Tote Bag and Pin Merchandise Design 2025' }
];

export default function GraphicPortfolio() {
    return (
        <div id="top">
            <Navbar />
            <main className="main-gallery-wrap">
                <h2 className="section-title">Best Projects</h2>
                <section className="gallery-container">
                    {graphicProjects.map((project, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={project.img} alt={`Project: ${project.title}`} />
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