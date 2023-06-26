'use client';
import React, { useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "@/constants";
import { FaLock, FaLockOpen } from 'react-icons/fa';
import { signIn, signOut, useSession } from "next-auth/react";
import { CreatureContext } from "./context/CreatureContext";
import { ICreature, mapToCreature } from "@/interfaces/ICreature";
import { on } from "events";

type SearchBarProps = {
    onAddButtonClick: (isOn: boolean) => boolean;
};

export default function SearchBar({ onAddButtonClick }: SearchBarProps) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState<any>(null);
    const { data: session } = useSession();
    const creature = useContext(CreatureContext);

    const handleSearch = async () => {
        if (!searchQuery) {
            setError("Please enter a search query");
            return;
        }
        try {
            const response = await axios.get(`${API_URL}/creatures/${searchQuery}`, {
                headers: {
                    Authorization: `Bearer ${session?.user.token}`,
                },
            });
            onAddButtonClick(true);
            return mapToCreature(response.data.data) || undefined;
        } catch (error: any) {
            setError(`Couldn't find creature with name ${searchQuery}`);
        }
    }

    const handleRandom = async () => {
        try {
            const response = await axios.get(`${API_URL}/creatures/random`, {
                headers: {
                    Authorization: `Bearer ${session?.user.token}`,
                },
            });
            console.log("Mapping to creature");
            onAddButtonClick(true);
            return mapToCreature(response.data.data) || undefined;

        } catch (error: any) {
            setError("No creature found");
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchQuery(event.target.value);
    }

    return (
        <>
            <div className="flex my-2 h-12 flex-row items-center justify-center bg-red-600">
                <input className="w-96 h-12 p-3 rounded-lg bg-transparent placeholder-gray-400" placeholder="Goblin" value={searchQuery} onChange={handleInputChange} />
                <button className="w-24 h-12 p-3 bg-red-600 hover:bg-red-700" onClick={
                    async () => {
                        const retrievedCreature = await handleSearch();
                        if (retrievedCreature)
                            creature?.setCreature(retrievedCreature);
                    }
                } >
                    Search
                </button>
                <button className="w-24 h-12 p-3 bg-red-600 hover:bg-red-700" onClick={
                    async () => {
                        const retrievedCreature = await handleRandom();
                        console.log(retrievedCreature);
                        creature?.setCreature(retrievedCreature);
                    }
                } >
                    Random
                </button>
                {!session?.user ? (
                    <>
                        <button className="w-12 h-12 p-3 bg-red-600 hover:bg-red-700" onClick={() => { setError("Before you can add, update or delete a creature you've have to login.") }}>
                            +
                        </button>

                        <button className="w-12 h-12 p-3 bg-red-600 hover:bg-red-700" onClick={() => signIn()}>
                            <FaLock />
                        </button>
                    </>
                ) : (
                    <>
                        <button className="w-12 h-12 p-3 bg-red-600 hover:bg-red-700" onClick={() => { onAddButtonClick(false) }}>
                            +
                        </button>
                        <button className="w-12 h-12 p-3 bg-red-600 hover:bg-red-700" onClick={() => signOut()}>
                            <FaLockOpen />
                        </button>
                    </>
                )}
            </div >
            {/* Error */}
            {
                error && (
                    <div className="text-red-600 px-2 py-2 relative" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )
            }
        </>
    );
};
