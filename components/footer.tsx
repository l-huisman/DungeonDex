import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col items-center justify-center">
            <p className="text-2xl text-center">
                Made with ❤️ by{" "}
                <a href="https://github.com/l-huisman" className="text-blue-500">
                    @Luke Huisman
                </a>
            </p>
        </footer>
    );
}

export default Footer;