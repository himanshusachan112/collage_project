// src/pages/InternshipsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { internroutes } from '../apis/apis';
import { apiConnector } from '../utils/Apiconnecter';


const InternshipCard = ({ internship }) => (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{internship.role}</h2>
            <p className="text-gray-700 mb-2">{internship.company}</p>
            <p className="text-gray-800 mb-4">{internship.status}</p>
            <p className="text-gray-600 text-sm mb-4">{internship.stipend}</p>
            <p className="text-gray-800 mb-4">{internship.description}</p>
            <p className='text-gray-900 mb-6'>{internship.tenure}</p>
            <p className='text-gray-900 mb-6'>{internship.batch}</p>
            <p className='text-gray-900 mb-6'>{internship.gender}</p>
            <p className='text-gray-900 mb-6'>{internship.deadline}</p>
            <p className='text-gray-900 mb-6'>{internship.deletedAt}</p>
            
            <a
                href={internship.url}
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
    console.log("1234567")
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Search and filter state
    const [searchQuery, setSearchQuery] = useState('');
    const [batchFilter, setBatchFilter] = useState('');
    const [companyFilter, setCompanyFilter] = useState('');
    const [roleFilter, setRoleFilter] = useState('');
    
    useEffect(() => {
        const fetchInternships = async () => {
            try {
                console.log(internroutes.GET_INTERNSHIP_API)
                const response = await apiConnector("GET",internroutes.GET_INTERNSHIP_API);
                console.log(response.data);
                setInternships(response.data.data);
            } catch (err) {
                setError('Failed to load internships.');
                console.error('Error fetching internships:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchInternships();
    }, []);
    
    

    // Filter and search logic
    const filteredInternships = internships?.filter((internship) => {
        const matchesSearch = searchQuery
            ? internship.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
              internship.description.toLowerCase().includes(searchQuery.toLowerCase())
            : true;
        const matchesBatch = batchFilter ? internship.batch === batchFilter : true;
        const matchesCompany = companyFilter
            ? internship.company.toLowerCase().includes(companyFilter.toLowerCase())
            : true;
        const matchesRole = roleFilter
            ? internship.role.toLowerCase().includes(roleFilter.toLowerCase())
            : true;

        return matchesSearch && matchesBatch && matchesCompany && matchesRole;
    });

    return (
        
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Internship Opportunities</h1>

            {/* Search and Filter Section */}
            <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
                <input
                    type="text"
                    placeholder="Search by Role or Description"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 w-full md:w-1/4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                    type="text"
                    placeholder="Filter by Batch"
                    value={batchFilter}
                    onChange={(e) => setBatchFilter(e.target.value)}
                    className="px-4 py-2 w-full md:w-1/4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                    type="text"
                    placeholder="Filter by Company"
                    value={companyFilter}
                    onChange={(e) => setCompanyFilter(e.target.value)}
                    className="px-4 py-2 w-full md:w-1/4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                    type="text"
                    placeholder="Filter by Role"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="px-4 py-2 w-full md:w-1/4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            {loading ? (
                <p className="text-gray-500">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : filteredInternships?.length === 0 ? (
                <p className="text-gray-500">No internships match your criteria.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredInternships.map((internship) => (
                        <InternshipCard key={internship._id} internship={internship} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default InternshipsPage;
