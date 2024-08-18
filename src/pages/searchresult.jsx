// pages/SearchResultsPage.js
import React, { useState } from 'react';
import SearchBar from '../components/searchbar/Searchbar';

const SearchResultsPage = () => {
    const [results, setResults] = useState([]);

    const handleSearchResults = (data) => {
        setResults(data);
    };

    return (
        <div>
            <h1>Search Results Page</h1>
            <SearchBar onSearch={handleSearchResults} placeholder="Search in Results Page..." />
            <div>
                {results.length > 0 ? (
                    <ul>
                        {results.map((item) => (
                            <li key={item._id}>{item.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
