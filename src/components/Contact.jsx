import React from "react";

const Contact = () => {
    return (
        <div
            id="contact"
            className="scroll-mt-[1px] min-h-screen w-full bg-black text-white py-24 px-6"
        >
            {/* BACKGROUND ANIMATION */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="stars"></div>
                <div className="twinkling"></div>
            </div>

            {/* HEADING */}
            <h1 className="text-5xl font-bold text-white">
                Get In <span className="text-purple-400 underline">Touch</span>
            </h1>

            <p className="text-gray-300 mt-4 text-center max-w-2xl">
                Have a project in mind or just want to say hello? Drop me a message and
                let’s create something amazing together.
            </p>

            {/* MAIN CONTAINER */}
            <div className="w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* LEFT — FORM */}
                <form className="space-y-6">
                    <div>
                        <label className="text-white text-sm">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full p-3 bg-[#0d0d16] text-white rounded-lg outline-none border border-[#1d1d2e]"
                        />
                    </div>

                    <div>
                        <label className="text-white text-sm">Email</label>
                        <input
                            type="email"
                            placeholder="your email@example.com"
                            className="w-full p-3 bg-[#0d0d16] text-white rounded-lg outline-none border border-[#1d1d2e]"
                        />
                    </div>

                    <div>
                        <label className="text-white text-sm">Message</label>
                        <textarea
                            placeholder="Tell me about your project..."
                            rows="6"
                            className="w-full p-3 bg-[#0d0d16] text-white rounded-lg outline-none border border-[#1d1d2e]"
                        ></textarea>
                    </div>

                    <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-all">
                        Send Message ✈️
                    </button>
                </form>

                {/* RIGHT — CONNECT BOXES */}
                <div>
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-gray-300 mb-6">
                        I'm always excited to collaborate with amazing people. Whether you
                        have a specific project in mind or just want to explore ideas —
                        let's talk!
                    </p>

                    {/* Email */}
                    <div className="contact-box">
                        <div className="icon bg-purple-600">📩</div>
                        <div>
                            <p className="text-gray-300">Email</p>
                            <h3 className="text-white font-semibold">
                                ananyag0206@gmail.com
                            </h3>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="contact-box mt-4">
                        <div className="icon bg-blue-600">📞</div>
                        <div>
                            <p className="text-gray-300">Phone</p>
                            <h3 className="text-white font-semibold">+91 xxxxxxxxx</h3>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="contact-box mt-4">
                        <div className="icon bg-pink-600">📍</div>
                        <div>
                            <p className="text-gray-300">Location</p>
                            <h3 className="text-white font-semibold">
                                Gwalior, India
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
