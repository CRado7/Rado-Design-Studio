import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jobData from '../data/jobData';
import '../styles/ProjectPage.css';

const ProjectPage = () => {
    const { company } = useParams();
    console.log(company);
    const project = jobData.find((job) => job.company === company);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const goNext = () => {
    setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % project.identity.images.length
    );
    };

    const goPrev = () => {
    setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + project.identity.images.length) % project.identity.images.length
    );
    };

    useEffect(() => {
        if (isModalOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }

        return () => {
          document.body.style.overflow = '';
        };
      }, [isModalOpen]);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="container fade">
            <div className="case-type">
                <p>{project.caseType}</p>
                <h1>{project.company}</h1>
            </div>
            <div className="project-hero">
                <img src={project.image} alt={project.company} />
                <p>{project.tag}</p>
            </div>
            <div className="project-header">
                    <h1>{project.header.title}</h1>
                    <p>{project.header.intro}</p>
            </div>
            <div className="project-approach">
                <p className="project-item-title">{project.approach.title}</p>
                <p>{project.approach.description}</p>
            </div>
            <div className="project-design">
                <div className="project-design-info">
                    <p className="project-item-title">{project.design.title}</p>
                    <p>{project.design.description}</p> 
                </div>
                <img src={project.design.images} alt={project.company} />
            </div>
            <div className="project-identity">
                <p className="project-item-title">{project.identity.title}</p>
                <div className="project-identity-images">
                {project.identity.images.map((image, index) => (
                    <div key={index} className="project-identity-image" onClick={() => openModal(index)}>
                    <img src={image.image} alt={project.company} />
                    <p>{image.caption}</p>
                    </div>
                ))}
                </div>
                <div className="extra-images">
                    {project.extraImages.images.map((image, index) => (
                        <div key={index} className="extra-image">
                            <img src={image.image} alt={project.company} />
                            <p>{image.caption}</p>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-project-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={closeModal}>×</button>
                    <img
                        src={project.identity.images[currentImageIndex].image}
                        alt={project.company}
                        className="modal-project-image"
                    />
                    <p>{project.identity.images[currentImageIndex].caption}</p>
                    <div className="modal-nav">
                        <button className="prev" onClick={goPrev}>←</button>
                        <button className="next" onClick={goNext}>→</button>
                    </div>
                </div>
            </div>
            )}

        </div>
    );
}

export default ProjectPage;