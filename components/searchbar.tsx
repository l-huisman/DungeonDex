'use client';
import React, { useState } from "react";
import axios from "axios";

interface SearchResult {
    id: number;
    name: string;
    // add any other properties here
}

const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    async function handleSearch() {
        const response = await axios.get(
            `https://api.example.com/search?q=${searchQuery}`
        );
        setSearchResults(response.data);
        if (searchQuery) {
            window.history.pushState(
                { searchQuery },
                "",
                `/${searchQuery}`
            );
        }
    }

    async function handleRandomSearch() {
        const response = await axios.get(
            `https://www.dnd5eapi.co/api/Creatures/goblin`
        );
        setSearchResults(response.data);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchQuery(event.target.value);
    }

    return (
        <div className="flex my-2 flex-row items-center justify-center bg-red-500">
            <input
                className="w-96 h-12 p-3 rounded-lg bg-transparent placeholder-gray-400"
                placeholder="Goblin"
                value={searchQuery}
                onChange={handleInputChange}
            />
            <button
                className="w-24 h-12 p-3 bg-red-600 hover:bg-red-700 text-center"
                onClick={handleSearch}
            >
                Search
            </button>
            <button
                className="w-24 h-12 p-3 bg-red-600 hover:bg-red-700 text-center"
                onClick={handleRandomSearch}
            >
                Random
            </button>
            <button className="w-12 h-12 p-3 bg-red-600 hover:bg-red-700 text-center">
                +
            </button>
            {Array.isArray(searchResults) && searchResults.map((result) => (
                <div key={result.id}>{result.name}</div>
            ))}
        </div>
    );
};

export default SearchBar;
