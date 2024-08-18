import React, { useState, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';

const SearchBar = ({ onSearch, placeholder }) => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const debouncedSearch = useCallback(
        _.debounce(async (query) => {
            setLoading(true);
            setError(null);  // Clear previous errors
            try {
                const response = await axios.get(`/api/search?q=${query}`);
                onSearch(response.data);
            } catch (err) {
                setError('An error occurred while fetching search results.');
                console.error('Error fetching search results:', err);
            } finally {
                setLoading(false);
            }
        }, 500),
        []
    );

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        debouncedSearch(e.target.value);
    };

    return (
        <div className="max-w-xs mx-auto">
            <div className="flex items-center p-2 bg-gray-100 shadow-lg rounded-full">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder={placeholder || "Search..."}
                    className="w-full p-2 text-sm text-gray-700 bg-transparent outline-none rounded-l-full placeholder-gray-400"
                />
                <button
                    onClick={() => debouncedSearch(query)}
                    className={`p-2 bg-blue-500 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        loading ? 'cursor-not-allowed bg-blue-300' : ''
                    }`}
                    disabled={loading}
                >
                    {loading ? (
                        <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 12a10 10 0 0110-10V0C4.477 0 0 4.477 0 10h2zm20 0a10 10 0 01-10 10v-2c5.523 0 10-4.477 10-10h2z"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                            />
                        </svg>
                    )}
                </button>
            </div>
            {error && (
                <p className="text-sm text-red-500 mt-2 text-center">
                    {error}
                </p>
            )}
        </div>
    );
};

export default SearchBar;
