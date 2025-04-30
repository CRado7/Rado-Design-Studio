import React from 'react';
import { Link } from 'react-router-dom';
import jobData from '../data/jobData.js';
import '../styles/OurWork.css';

const OurWork = () => {
    return (
        <div className="container fade">
            <div className="intro no-before">
                <h2>Creating Beyond Aesthetics.</h2>
                <p>
                    We listen first — to your goals, your story, and the vision you’re chasing. Then we bring it to life with bold branding, thoughtful websites, and visuals that feel as good as they look.
                    <br /> <br />
                    Every project is a collaboration, and every detail is shaped with care. Here’s a look at some of the ideas we’ve had the privilege to help bring into the world.
                </p>
            </div>
            <div className="our-work">
                <h3>Our Work</h3>
                <div className="work-grid">
                    {jobData.map((job) => (
                        <div key={job.id} className="work-item">
                            <div 
                                className="work-image" 
                                style={{ backgroundImage: `url(${job.thumbnail})` }}
                            >
                                <Link to={`/our-work/${job.company}`} className="work-link" />
                                <div className="work-content">
                                    <h2>{job.company}</h2>
                                    <p>
                                        {job.services.map((service, index) => (
                                        <span key={index}>
                                            {service}
                                            {index < job.services.length - 1 && <span className="separator"> | </span>}
                                        </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurWork;
