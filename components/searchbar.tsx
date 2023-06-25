'use client';
import React, { useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "@/constants";
import { FaLock, FaLockOpen } from 'react-icons/fa';
import { signIn, signOut, useSession } from "next-auth/react";
import { CreatureContext } from "./context/CreatureContext";
import { ICreature, mapToCreature } from "@/interfaces/ICreature";


export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState<any>(null);
    const { data: session } = useSession();
    const creature = useContext(CreatureContext);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${API_URL}/creatures/${searchQuery}`, {
                headers: {
                    Authorization: `Bearer ${session?.user.token}`,
                },
            });
            return mapToCreature(response.data.data) || undefined;
        } catch (error: any) {
            setError(error.data);
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
            const creature: ICreature = mapToCreature(response.data.data);
            console.log("Mapped to creature");
            console.log(creature);
            if (creature) {
                return creature;
            }
            return undefined;
        } catch (error: any) {
            setError(error.data);
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchQuery(event.target.value);
    }

    return (
        <>
            <div className="flex my-2 h-12 flex-row items-center justify-center bg-red-800">
                <input className="w-96 h-12 p-3 rounded-lg bg-transparent placeholder-gray-400" placeholder="Goblin" value={searchQuery} onChange={handleInputChange} disabled />
                <button className="w-24 h-12 p-3 bg-red-800 hover:bg-red-800" onClick={
                    async () => {
                        const retrievedCreature = await handleSearch();
                        creature?.setCreature(retrievedCreature);
                    }
                } disabled>
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
                        <button className="w-12 h-12 p-3 bg-red-800" disabled>
                            +
                        </button>
                        <button className="w-12 h-12 p-3 bg-red-600 hover:bg-red-700" onClick={() => signIn()}>
                            <FaLock />
                        </button>
                    </>
                ) : (
                    <>
                        <button className="w-12 h-12 p-3 bg-red-800 hover:bg-red-800" disabled>
                            +
                        </button>
                        <button className="w-12 h-12 p-3 bg-red-600 hover:bg-red-700" onClick={() => signOut()}>
                            <FaLockOpen />
                        </button>
                    </>
                )}
            </div>
            {/* Error */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{JSON.stringify(error)}</span>
                </div>
            )}
        </>
    );
};
