// src/pages/InternshipsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InternshipCard = ({ internship }) => (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{internship.role}</h2>
            <p className="text-gray-700 mb-2">{internship.company}</p>
            <p className="text-gray-800 mb-4">{internship.status}</p>
            <p className="text-gray-600 text-sm mb-4">{internship.stipend}</p>
            <p className="text-gray-800 mb-4">{internship.description}</p>
            <p className='text-gray-900 mb-6'>{internship.tenure}</p>
            <p className='text-gray-900 mb-6'>{internship.eligibility}</p>
            <p className='text-gray-900 mb-6'>{internship.gender}</p>
            <p className='text-gray-900 mb-6'>{internship.deadline}</p>
            <p className='text-gray-900 mb-6'>{internship.deletedAt}</p>
            
          
            
            <a
                href={internship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                Apply Now
            </a>
        </div>
    </div>
);

const InternshipsPage = () => {
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const response = await axios.get('/api/internships');
                setInternships(response.data);
            } catch (err) {
                setError('Failed to load internships.');
                console.error('Error fetching internships:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchInternships();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Internship Opportunities</h1>
            {loading ? (
                <p className="text-gray-500">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : internships.length === 0 ? (
                <p className="text-gray-500">No internships available at the moment.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {internships.map((internship) => (
                        <InternshipCard key={internship._id} internship={internship} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default InternshipsPage;
