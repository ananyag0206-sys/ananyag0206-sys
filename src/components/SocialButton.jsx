"use client";

import { useState } from "react";
import { Twitter, Mail, Linkedin, Link } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";

export default function SocialButton({ className, ...props }) {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    // ⭐ USING LINKS FROM .env FILE ⭐
    const socialLinks = [
        { 
            icon: Twitter,
            label: "Twitter",
            url: import.meta.env.VITE_TWITTER_URL
        },
        { 
            icon: Mail,
            label: "Gmail",
            url: import.meta.env.VITE_GMAIL_URL
        },
        { 
            icon: Linkedin,
            label: "LinkedIn",
            url: import.meta.env.VITE_LINKEDIN_URL
        },
        { 
            icon: Link,
            label: "Portfolio",
            url: import.meta.env.VITE_PORTFOLIO_URL
        },
    ];

    const handleShare = (index) => {
        setActiveIndex(index);

        // ⭐ Open link in new tab ⭐
        window.open(socialLinks[index].url, "_blank");

        setTimeout(() => setActiveIndex(null), 250);
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {/* Main Button */}
            <motion.div
                animate={{ opacity: isVisible ? 0 : 1 }}
                transition={{ duration: 0.2 }}
            >
                <Button
                    className={cn(
                        "min-w-40",
                        "bg-white dark:bg-black",
                        "hover:bg-gray-50 dark:hover:bg-gray-950",
                        "text-black dark:text-white",
                        "border border-black/10 dark:border-white/10",
                        className
                    )}
                    {...props}
                >
                    <span className="flex items-center gap-2">
                        <Link className="w-4 h-4" />
                        Get In Touch
                    </span>
                </Button>
            </motion.div>

            {/* Share Buttons */}
            <motion.div
                className="absolute left-0 top-0 flex h-10 overflow-hidden"
                animate={{ width: isVisible ? "auto" : 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
                {socialLinks.map((b, i) => (
                    <motion.button
                        key={b.label}
                        type="button"
                        aria-label={b.label}
                        onClick={() => handleShare(i)}
                        className={cn(
                            "h-10 w-10 flex items-center justify-center",
                            "bg-black dark:bg-white",
                            "text-white dark:text-black",
                            i === 0 && "rounded-l-md",
                            i === socialLinks.length - 1 && "rounded-r-md",
                            "border-r border-white/10 dark:border-black/10 last:border-r-0",
                            "hover:bg-gray-900 dark:hover:bg-gray-100",
                            "relative overflow-hidden"
                        )}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{
                            duration: 0.3,
                            delay: isVisible ? i * 0.05 : 0,
                        }}
                    >
                        <motion.div
                            className="relative z-10"
                            animate={{ scale: activeIndex === i ? 0.85 : 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <b.icon className="w-4 h-4" />
                        </motion.div>

                        {/* Click Flash */}
                        <motion.div
                            className="absolute inset-0 bg-white dark:bg-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeIndex === i ? 0.15 : 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
}
