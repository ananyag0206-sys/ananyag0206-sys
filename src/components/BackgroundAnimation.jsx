import React from "react";

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute w-[600px] h-[600px] bg-purple-500/40 blur-3xl rounded-full animate-blob top-10 -left-32"></div>

      <div className="absolute w-[600px] h-[600px] bg-pink-500/40 blur-3xl rounded-full animate-blob animation-delay-2000 top-1/2 -right-32"></div>

      <div className="absolute w-[600px] h-[600px] bg-blue-500/40 blur-3xl rounded-full animate-blob animation-delay-4000 bottom-0 left-1/3"></div>
    </div>
  );
};

export default BackgroundAnimation;
