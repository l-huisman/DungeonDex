import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Dungeon Dex</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" href="/">
                        Home
                    </Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" href="/about">
                        About
                    </Link>
                </div>
                <div>
                    <Link className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0" href="/login">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;