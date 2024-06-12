// CompletedProjectsModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root'); // Set the root element for the modal

const CompletedProject = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [completedProjects, setCompletedProjects] = useState([]);
    const [error, setError] = useState(null);

    const fetchCompletedProjects = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/projects/completed');
            setCompletedProjects(response.data);
        } catch (error) {
            console.error('Error fetching completed projects:', error);
            setError('Failed to fetch completed projects');
        }
    };

    const openModal = () => {
        setModalIsOpen(true);
        fetchCompletedProjects();
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>View Completed Projects</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Completed Projects"
            >
                <h2>Completed Projects</h2>
                <button onClick={closeModal}>Close</button>
                {error && <p>{error}</p>}
                <ul>
                    {completedProjects.map((project) => (
                        <li key={project.id}>
                            {project.projectName} - {project.clientName}
                        </li>
                    ))}
                </ul>
            </Modal>
        </div>
    );
};

export default CompletedProject;
