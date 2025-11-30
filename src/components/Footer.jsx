import React from "react";

export default function Footer() {
    return (
        <footer className="relative z-10 w-full py-12 px-6 bg-transparent border-t border-purple-500/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white">

                {/* LEFT SECTION */}
                <div>
                    <h2 className="text-2xl font-bold">Portfolio</h2>
                    <div className="h-1 w-20 bg-purple-500 mt-1 rounded-full"></div>

                    <p className="text-gray-300 mt-4 leading-relaxed">
                        Building modern, high-performance web
                        experiences through elegant design, clean
                        code, and the latest technologies.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4 mt-6">
                        <button className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/40 hover:scale-110 transition">
                            🛒
                        </button>
                        <button className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg shadow-blue-500/40 hover:scale-110 transition">
                            📘
                        </button>
                    </div>
                </div>

                {/* MIDDLE SECTION: QUICK LINKS
                <div>
                    <h2 className="text-xl font-semibold">Quick Links</h2>

                    <ul className="mt-4 space-y-2 text-gray-300">
                        <li className="hover:text-purple-400 transition cursor-pointer">Home</li>
                        <li className="hover:text-purple-400 transition cursor-pointer">About</li>
                        <li className="hover:text-purple-400 transition cursor-pointer">Projects</li>
                        <li className="hover:text-purple-400 transition cursor-pointer">Contact</li>
                    </ul>
                </div> */}

                {/* RIGHT SECTION: GET IN TOUCH */}
                <div>
                    <h2 className="text-xl font-semibold">Get In Touch</h2>

                    <p className="text-purple-400 mt-4 cursor-pointer hover:underline">Email</p>
                    <p className="text-gray-300">ananyag0206@gmail.com</p>

                    <p className="text-purple-400 mt-4 cursor-pointer hover:underline">Location</p>
                    <p className="text-gray-300">Gwalior, India</p>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="text-center text-gray-500 mt-10">
                © {new Date().getFullYear()} Ananya Gupta
            </div>
        </footer>
    );
}
