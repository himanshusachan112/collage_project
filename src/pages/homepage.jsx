// pages/HomePage.js
import React, { useState } from 'react';
import SearchBar from '../components/searchbar/Searchbar';

const HomePage = () => {
    const [results, setResults] = useState([]);
     
    const handleSearchResults = (data) => {
        setResults(data);
    };
    
    return (
        <div className="container mx-auto p-4">

            <h1 className="text-3xl font-bold mb-6">Home Page</h1>

            <SearchBar onSearch={handleSearchResults} placeholder="Search something..." />
            
            <div className="mt-4">
                {results.length > 0 ? (
                    <ul>
                        {results.map((item) => (
                            <li key={item._id} className="p-2 bg-gray-100 rounded mb-2">{item.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No results found.</p>
                )}
            </div>
        </div>
    );
};


export default HomePage;
