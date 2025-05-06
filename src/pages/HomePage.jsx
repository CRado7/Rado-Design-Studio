import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useIntersectionAnimations from '../hooks/useIntersectionAnimations.js';
import ourServicesData from '../data/ourServicesData.js';
import jobData from '../data/jobData.js';
import Wordmark from '../assets/Wordmark.svg';
import downArrow from '../assets/Close.svg';
import BlueLogo from '../assets/Blue-Logo.svg';
import "../styles/HomePage.css";

const HomePage = () => {
    const [heroOpacity, setHeroOpacity] = useState(1);
    useIntersectionAnimations();

    useEffect(() => {
        const handleScroll = () => {

          const newOpacity = Math.max(1 - window.scrollY / 1000, 0.2);
          setHeroOpacity(newOpacity);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <div className="container">
            <div 
                className="home-hero"
                style={{ opacity: heroOpacity }}
                >
                <img src={Wordmark} alt="Rado Design Studio" className="fade-in-down"/>
                <h1 className="fade-in-left">Crafting brands and digital experiences that{' '}<span className="blue">empower</span>{' '}your company</h1>
            </div>
            <div className="down-arrow">
                <a href="#intro" className="fade-in-up">
                    <img src={downArrow} alt="To Next Section" />
                </a>
            </div>
            <div className="index1">
                <div id="intro" className="intro opacity-up">
                    <h2><span className="blue">Unique</span>{' '}and{' '}<span className="blue">creative</span>{' '}solutions for businesses of all shapes and sizes</h2>
                    <p><span className="yellow">Rado Design Studio</span>{' '}curates custom websites and brand designs specific to your business needs.</p>
                    <br />
                    <p>We work with emerging businesses who want to make a powerful statement right out of the gate and alsp existing brands who want ti revamp their current look.</p>
                    <br />
                    <span className="yellow centered">It doesn't have to be complicated so we don't make it complicated</span>
                </div>
                <div className="services">
                    <h3 className="fade-in-left">Services</h3>
                    <div className="our-services-links">
                        {ourServicesData.map((service) => (
                            <div key={service.id} className="our-services-info" style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                <h2>{service.title}</h2>
                                <div className="hover-statement">
                                    <h4>{service.title}</h4>
                                    <p>{service.hoverStatement}</p>
                                    <Link to={`/services/${service.url}`} className="button">Learn More</Link>
                                </div>
                            </div>
                        ))}
                        <div className="consultation">
                            <img src={BlueLogo} alt="Rado Design Studio" className="blue-logo"/>
                            <div className="contact-call">
                                <h1>Your brand matters to us.
                                    <br />
                                    Lets get started.
                                </h1>
                                <Link to="/contact" className="button">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured">
                    <h3>Featured Projects</h3>
                    <div className="featured-work-grid">
                        {jobData.filter(job => job.featured).map((job) => (
                        <div key={job.id} className="featured-work-item">
                            <div className="featured-work-content">
                                <div className="featured-work-image">
                                    <Link to={`/our-work/${job.company}`} style={{ backgroundImage: `url(${job.thumbnail})` }}></Link>
                                    <h2>{job.company}</h2>
                                </div>
                            </div>
                        </div>
                        ))}
                        <Link to="/our-work">View more of our work</Link>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default HomePage;