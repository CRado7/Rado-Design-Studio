import React from 'react';
import { Link } from 'react-router-dom';
import ourServicesData from '../data/ourServicesData.js';
import '../styles/Services.css';

const Services = () => {
    return (
        <div className="container">
            <div className="services-header">
                <h1>Services</h1>
                <p>We are a design studio that specializes in creating beautiful, functional, and user-friendly digital experiences. Our team of experts is dedicated to helping you achieve your goals through innovative design solutions.</p>
            </div>
            <div className="services-list">
                {ourServicesData.map((service) => (
                    <Link 
                        key={service.id} 
                        to={`/services/${service.url}`} 
                        className="service-item"
                    >
                        <h2>{service.title}</h2>
                        <p>{service.hoverStatement}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Services;