import React from "react";

export default function Navbar() {
    return (
        <header className="fixed w-full z-30 top-0 left-0">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between backdrop-blur-sm bg-black/40 rounded-b-2xl">
                <div className="text-2xl font-bold text-purple-400">Portfolio</div>

                <ul className="hidden md:flex items-center gap-8 text-gray-300">
                    <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
                    <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
