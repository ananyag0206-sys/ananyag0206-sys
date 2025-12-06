import React from "react";

export default function UniverseCard({
  title = "Project Title",
  subtitle = "Project Subtitle",
  desc = "",
  action = "View Project",
  img = "image",
  link = "#",
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <>
        <style>{`
          .uc-card {
            width: 300px;
            height: 280px;
            background: linear-gradient(135deg, #210434, #2b0a44, #1a022b);
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 26px 18px;
            border-radius: 14px;
            overflow: hidden;
            transition: all 0.55s ease;
            box-shadow: 0 0 18px rgba(168, 85, 247, 0.22);
            cursor: pointer;
            text-align: center;
          }

          .uc-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 14px;
            position: absolute;
            inset: 0;
            transition: opacity 0.5s ease;
            z-index: 10;
          }

          .uc-card:hover .uc-img {
            opacity: 0;
          }

          .uc-title {
            font-size: 20px;
            font-weight: 700;
            color: #f5d0ff;
            width: 0px;
            max-width: max-content;
            white-space: nowrap;
            overflow: hidden;
            border-right: 2px solid transparent;
            transition: width 1.2s ease-in-out;
            text-shadow: 0 0 10px rgba(170, 80, 255, 0.55);
            margin-bottom: 18px;
            opacity: 0;
          }

          .uc-trail {
            position: absolute;
            right: 0;
            top: 0;
            height: 35px;
            width: 100%;
            opacity: 0;
          }

          .uc-border {
            position: absolute;
            inset: 0px;
            border: 2px solid rgba(180, 70, 255, 0.5);
            border-radius: 12px;
            opacity: 0;
            transform: rotate(14deg);
            transition: all 0.5s ease-in-out;
            box-shadow: 0 0 12px rgba(169, 85, 247, 0.25);
          }

          .uc-desc {
            color: #c58afe;
            font-size: 12px;
            opacity: 0;
            margin-top: 10px;
            line-height: 1.4;
            padding: 0 4px;
            transition: all 0.6s ease 0.38s;
          }

          .uc-action {
            margin-top: auto;
            font-size: 13px;
            color: #f287ff;
            opacity: 0;
            letter-spacing: 2px;
            transition: all 0.6s ease 0.45s;
          }

          .uc-card:hover {
            border-radius: 0;
            transform: scale(1.05);
            box-shadow: 0 0 28px rgba(200, 120, 255, 0.55);
          }

          .uc-card:hover .uc-title {
            width: 220px;
            opacity: 1;
            border-right: 2px solid #fbcfe8;
            animation: ucTypingBlink 1.1s steps(20) forwards;
          }

          .uc-card:hover .uc-trail {
            animation: ucTrail 1.2s ease-in-out;
          }

          .uc-card:hover .uc-border {
            inset: 15px;
            opacity: 1;
            transform: rotate(0deg);
          }

          .uc-card:hover .uc-desc,
          .uc-card:hover .uc-action {
            opacity: 1;
            transform: translateY(-3px);
          }

          @keyframes ucTypingBlink {
            0% { border-right-color: transparent; }
            20% { border-right-color: #fbcfe8; }
            80% { border-right-color: #fbcfe8; }
            100% { border-right-color: transparent; }
          }

          @keyframes ucTrail {
            0% {
              background: linear-gradient(90deg, rgba(236,72,255,0) 90%, rgba(236,72,255,1) 100%);
              opacity: 0;
            }
            40% {
              background: linear-gradient(90deg, rgba(236,72,255,0) 60%, rgba(236,72,255,1) 100%);
              opacity: 1;
            }
            90% {
              background: linear-gradient(90deg, rgba(236,72,255,0) 90%, rgba(236,72,255,1) 100%);
              opacity: 0;
            }
          }

        `}</style>

        <div className="uc-card">
          <img src={img} className="uc-img" alt="project preview" />

          <div className="uc-border"></div>

          <div style={{ position: "relative" }}>
            <div className="uc-title">{title}</div>
            <span className="uc-trail"></span>
          </div>

          <div className="uc-desc">{desc}</div>
          <div className="uc-action">{action}</div>
        </div>
      </>
    </a>
  );
}
