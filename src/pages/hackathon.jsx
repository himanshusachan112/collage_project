// src/pages/HackathonsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { hackathonroutes } from '../apis/apis';
import { useParams } from 'react-router-dom';

const HackathonCard = ({ hackathon }) => (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{hackathon.name}</h2>
            <p className="text-gray-700 font-medium mb-2">{hackathon.company}</p>
            <p className="text-gray-600 text-sm mb-2">{hackathon.status}</p>
            <p className="text-gray-500 text-sm mb-4">{hackathon.deadline}</p>
            <p className="text-gray-800 mb-4">{hackathon.description}</p>
            <p className="text-gray-500 text-sm mb-4">{hackathon.deletedAt}</p>
            <p className="text-gray-500 text-sm mb-4">{hackathon.batch}</p>

            <a
                href={hackathon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
                Register Now
            </a>
        </div>
    </div>
);

const HackathonsPage = () => {
    const [hackathons, setHackathons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Search and filter state
    const [searchQuery, setSearchQuery] = useState('');
    const [batchFilter, setBatchFilter] = useState('');
    const [companyFilter, setCompanyFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const {name} = useParams();
    

    useEffect(() => {
        if (name !== "all") {
            setSearchQuery(name);
        }
        const fetchHackathons = async () => {
            try {
                const response = await axios.get({hackathonroutes});
                console.log(response.data.data)
                setHackathons(response.data.data);
            } catch (err) {
                setError('Failed to load hackathons.');
                console.error('Error fetching hackathons:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchHackathons();
    }, []);

    // Filter and search logic
    const filteredHackathons = hackathons?.filter((hackathon) => {
        const matchesSearch = searchQuery
            ? hackathon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              hackathon.description.toLowerCase().includes(searchQuery.toLowerCase())
            : true;
        const matchesBatch = batchFilter ? hackathon.batch === batchFilter : true;
        const matchesCompany = companyFilter
            ? hackathon.company.toLowerCase().includes(companyFilter.toLowerCase())
            : true;
        const matchesStatus = statusFilter
            ? hackathon.status.toLowerCase().includes(statusFilter.toLowerCase())
            : true;

        return matchesSearch && matchesBatch && matchesCompany && matchesStatus;
    });

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Upcoming Hackathons</h1>

            {/* Search and Filter Section */}
            <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
                <input
                    type="text"
                    placeholder="Search by Name or Description"
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
                    placeholder="Filter by Status"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 w-full md:w-1/4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            {loading ? (
                <p className="text-gray-500 text-center">Loading...</p>
            ) : error ? (
                <p className="text-red-500 text-center">{error}</p>
            ) : filteredHackathons?.length === 0 ? (
                <p className="text-gray-500 text-center">No hackathons match your criteria.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredHackathons?.map((hackathon) => (
                        <HackathonCard key={hackathon._id} hackathon={hackathon} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HackathonsPage;
