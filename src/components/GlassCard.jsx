// import React from "react";

// export default function GlassCard() {
//     return (
//         <div className="parent">

//             <div className="card">
//                 <div className="logo">
//                     <span className="circle circle1"></span>
//                     <span className="circle circle2"></span>
//                     <span className="circle circle3"></span>
//                     <span className="circle circle4"></span>
//                     <span className="circle circle5">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
//                             <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"></path>
//                             <path d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
//                             <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
//                         </svg>
//                     </span>
//                 </div>

//                 <div className="glass"></div>

//                 <div className="content">
//                     <span className="title">UIVERSE (3D UI)</span>
//                     <span className="text">Create, share, and use beautiful custom elements made with CSS</span>
//                 </div>

//                 <div className="bottom">
//                     <div className="social-buttons-container">
//                         <button className="social-button">
//                             <svg viewBox="0 0 30 30" className="svg">
//                                 <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z"></path>
//                             </svg>
//                         </button>

//                         <button className="social-button">
//                             <svg viewBox="0 0 512 512" className="svg">
//                                 <path d="M459.37 151.716c..."></path>
//                             </svg>
//                         </button>

//                         <button className="social-button">
//                             <svg viewBox="0 0 640 512" className="svg">
//                                 <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7..."></path>
//                             </svg>
//                         </button>
//                     </div>

//                     <div className="view-more">
//                         <button className="view-more-button">View more</button>
//                         <svg className="svg" viewBox="0 0 24 24">
//                             <path d="m6 9 6 6 6-6"></path>
//                         </svg>
//                     </div>
//                 </div>
//             </div>

//             <style>{`
//                 .parent {
//                   width: 290px;
//                   height: 300px;
//                   perspective: 1000px;
//                 }

//                 .card {
//                   height: 100%;
//                   border-radius: 50px;
//                   background: linear-gradient(135deg, #7c3aed 0%, #c026d3 100%);
//                   transition: all 0.5s ease-in-out;
//                   transform-style: preserve-3d;
//                   box-shadow: rgba(168, 85, 247, 0.25) 0px 25px 40px -10px;
//                   position: relative;
//                 }

//                 .glass {
//                   position: absolute;
//                   inset: 8px;
//                   border-radius: 55px;
//                   border-top-right-radius: 100%;
//                   background: linear-gradient(0deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.45) 100%);
//                   transform: translate3d(0px, 0px, 25px);
//                   border-left: 1px solid rgba(255,255,255,0.5);
//                   border-bottom: 1px solid rgba(255,255,255,0.5);
//                   transition: all 0.5s ease-in-out;
//                 }

//                 .content {
//                   padding: 100px 60px 0px 30px;
//                   transform: translate3d(0, 0, 26px);
//                 }

//                 .content .title {
//                   color: #f0d1ff;
//                   font-weight: 900;
//                   font-size: 20px;
//                   text-shadow: 0 0 8px rgba(192, 38, 211, 0.55);
//                 }

//                 .content .text {
//                   color: rgba(240, 209, 255, 0.75);
//                   font-size: 15px;
//                   margin-top: 20px;
//                 }

//                 .bottom {
//                   position: absolute;
//                   bottom: 20px;
//                   left: 20px;
//                   right: 20px;
//                   padding: 10px 12px;
//                   display: flex;
//                   align-items: center;
//                   justify-content: space-between;
//                   transform: translate3d(0, 0, 26px);
//                 }

//                 .social-buttons-container {
//                   display: flex;
//                   gap: 10px;
//                 }

//                 .social-button {
//                   width: 30px;
//                   aspect-ratio: 1;
//                   padding: 5px;
//                   background: white;
//                   border-radius: 50%;
//                   border: none;
//                   display: grid;
//                   place-content: center;
//                   box-shadow: rgba(168, 85, 247, 0.6) 0px 7px 5px -5px;
//                   transition: 0.3s;
//                 }

//                 .social-button .svg {
//                   width: 15px;
//                   fill: #a855f7;
//                 }

//                 .social-button:hover {
//                   background: #a21caf;
//                 }
//                 .social-button:hover .svg {
//                   fill: white;
//                 }

//                 .view-more-button {
//                   background: none;
//                   border: none;
//                   color: #820196ff;
//                   font-weight: bold;
//                   font-size: 12px;
//                 }

//                 .view-more button:focus {
//                     outline: none;
//                 }

//                 .logo {
//                   position: absolute;
//                   right: 0;
//                   top: 0;
//                 }

//                 .circle {
//                   position: absolute;
//                   border-radius: 50%;
//                   background: rgba(192, 38, 211, 0.15);
//                   backdrop-filter: blur(5px);
//                   transition: 0.5s;
//                 }

//                 .circle1 { width:170px; top:8px; right:8px; }
//                 .circle2 { width:140px; top:10px; right:10px; }
//                 .circle3 { width:110px; top:17px; right:17px; }
//                 .circle4 { width:80px; top:23px; right:23px; }
//                 .circle5 { width:50px; top:30px; right:30px; display:grid; place-content:center; }

//                 .circle5 .svg {
//                   fill: #f3e8ff;
//                   width: 28px;
//                 }

//                 .parent:hover .card {
//                   transform: rotate3d(1, 1, 0, 30deg);
//                 }

//                 .parent:hover .social-button {
//                   transform: translate3d(0, 0, 50px);
//                 }
//             `}</style>
//         </div>
//     );
// }
