// src/pages/jobsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jobroutes } from '../apis/apis';
import { apiConnector } from '../utils/Apiconnecter';


const JobCard = ({ job }) => (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
        <div className="p-4 flex-col justify-center items-center text-center">
            <h2 className="text-xl font-bold mb-2">{job.role}</h2>
            <p className="text-gray-700 mb-2">{job.company}</p>
            <p className="text-gray-800 mb-4">{job.status}</p>
            <p className="text-gray-600 text-sm mb-4">{job.ctc}</p>
            <p className="text-gray-800 mb-4">{job.description}</p>
            <p className='text-gray-900 mb-6'>{job.eligibility}</p>
            <p className='text-gray-900 mb-6'>For batch:{job.batch}</p>
            <p className='text-gray-900 mb-6 content-center'>{job.gender}</p>
            <p className='text-gray-900 mb-6'>{job.deadline}</p>
            {/* <p className='text-gray-900 mb-6'>{job.deletedAt}</p> */}
            
            <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                Apply Now
            </a>
        </div>
    </div>
);

const JobsPage = () => {
    console.log("1234567")
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Search and filter state
    const [searchQuery, setSearchQuery] = useState('');
    const [batchFilter, setBatchFilter] = useState('');
    const [companyFilter, setCompanyFilter] = useState('');
    const [roleFilter, setRoleFilter] = useState('');
    
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                console.log(jobroutes.GET_JOB_API)
                const response = await apiConnector("GET",jobroutes.GET_JOB_API);
                console.log(response.data);
                setJobs(response.data.data);
            } catch (err) {
                setError('Failed to load jobs.');
                console.error('Error fetching jobs:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);
    
    

    // Filter and search logic
    const filteredJobs = jobs?.filter((job) => {
        const matchesSearch = searchQuery
            ? job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
              job.description.toLowerCase().includes(searchQuery.toLowerCase())
            : true;
        const matchesBatch = batchFilter ? job.batch === batchFilter : true;
        const matchesCompany = companyFilter
            ? job.company.toLowerCase().includes(companyFilter.toLowerCase())
            : true;
        const matchesRole = roleFilter
            ? job.role.toLowerCase().includes(roleFilter.toLowerCase())
            : true;

        return matchesSearch && matchesBatch && matchesCompany && matchesRole;
    });

    return (
        
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Job Opportunities</h1>

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
            ) : filteredJobs?.length === 0 ? (
                <p className="text-gray-500">No jobs match your criteria.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobsPage;
