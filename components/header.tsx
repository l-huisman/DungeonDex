import React from "react";
import { useSession } from "next-auth/react";

const Header: React.FC = () => {
    const { data: session } = useSession();
    return (
        <header className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-center">
                Welcome to Dungeon Dex
            </h1>
            <p className="text-2xl my-3 text-center">
                A place to find all your favorite D&amp;D Creatures
            </p>
        </header>
    );
}

export default Header;
