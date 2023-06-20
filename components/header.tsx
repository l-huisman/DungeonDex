import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-center">
                Welcome to Dungeon Dex
            </h1>
            <p className="text-2xl my-3 text-center">
                A place to find all your favorite D&amp;D Creatures
            </p>
            <Link className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0" href="/login">
                Login
            </Link>
        </header>
    );
}

export default Header;
