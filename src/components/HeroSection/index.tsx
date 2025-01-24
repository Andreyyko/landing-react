import React from "react";

import './heroSection.css'

const heroImage = '/images/hero-robot.png';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h4 className="hero-subtitle">Xceed Blog</h4>
                <h1 className="hero-title">10 Web Design<br/>Mistakes and How to<br/>Avoid Them</h1>
                <p className="hero-description">
                    Looking for more daily inspiration? Download Muzli extension —<br/>your 
                    go-to source for discovering design ideas from world’s top<br/>creators!
                </p>
                <p className="hero-meta">13.06, 2024 · 2:15 PM · medium.muz.li</p>
            </div>
            <div className="hero-image">
                <img 
                src={heroImage} 
                alt="robot" />
            </div>
        </section>
    )
}

export default HeroSection;