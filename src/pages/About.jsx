import React, { useState } from 'react';
import teamData from '../data/teamData';
import Modal from '../components/Modal';
import '../styles/About.css';

const About = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState({});

    const handleOpenModal = (member) => {
        setSelectedMember(member);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMember({});
    }

    const handleImageClick = (member) => {
        handleOpenModal(member);
    }

    return (
        <div className="container">
            <div className="intro no-before">
                <h2>About Rado Design Studio</h2>
                <p><span className="yellow">Rado Design Studio</span> was founded on the belief that no project is too big or too small. We’re committed to giving every job the care and attention it deserves—no exceptions.
                    <br /><br />
                    The founder, Christopher Ferraro, brings over a decade of experience in the print industry and creative fields, now paired with full-stack web development skills. This unique blend allows us to offer well-rounded, thoughtful solutions across both design and digital spaces.
                    <br /><br />
                    We believe that working within your budget shouldn’t mean compromising quality. Instead, we focus on delivering smart, effective results that meet your current needs and support long-term success.
                </p>
            </div>
            <div className="index1">
                <div className="meet-the-team">
                    <h3>Meet The Founder</h3>
                    {teamData.map((member) => (
                        <div key={member.id} className="team-member" onClick={() => handleImageClick(member)}>
                            <div className="member-image">
                                <img src={member.image} alt={member.name} className="static-image" />
                                <img src={member.hoverImage} alt={member.name} className="hover-image" />
                                {/* <h1>{member.title}</h1> */}
                                <h2>{member.title}</h2>
                            </div>
                            <div className="member-info">
                                <h2>{member.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <Modal show={showModal} onClose={handleCloseModal}>
                <div className="modal-image">
                    <img src={selectedMember.image} alt={selectedMember.name} />
                </div>
                <div className="modal-info">
                    <h1>{selectedMember.name}</h1>
                    <h2>{selectedMember.title}</h2>
                    <p>{selectedMember.description}</p>
                </div>
            </Modal>
        </div>
    );
}

export default About;