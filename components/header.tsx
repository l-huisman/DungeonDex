import React from "react";

const Header: React.FC = () => {
    return (
        <header className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-center">
                Welcome to Dungeon Dex
            </h1>
            <p className="text-2xl my-3 text-center">
                A place to find all your favorite D&amp;D monsters
            </p>
        </header>
    );
}

export default Header;
