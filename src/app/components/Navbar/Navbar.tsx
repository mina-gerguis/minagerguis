"use client";
import { useTheme } from "@/lib/ThemeContext";
import React, { useEffect, useRef } from "react";
import navBar from "./Navbar.module.css";
import { RiGithubLine } from "react-icons/ri";
import { FaSun } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineDarkMode } from "react-icons/md";
import { gsap } from "gsap";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const navbarRef = useRef<HTMLElement>(null);


    useEffect(() => {
        if (navbarRef.current) {
            gsap.from(navbarRef.current.children, {
                y: -50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
            });
        }
    }, []);
    return (
        <header className={navBar.container} ref={navbarRef}>
            <div className={navBar.logo}>
                <a href="/ ">
                    <h1>Mina Gerguis</h1>
                </a>
            </div>

            <div className={navBar.socialMedia}>
                <button onClick={toggleTheme} className={navBar.themeToggle}>
                    {theme === "light" ? <MdOutlineDarkMode /> : <FaSun />}
                </button>

                <a href="mailto:mina_gerguis@hotmail.com" target="_blank"><MdOutlineEmail /></a>
                <a href="https://github.com/mina-gerguis" target="_blank"><RiGithubLine /></a>
                <a href="https://www.linkedin.com/in/mina-gerguis" target="_blank"><FiLinkedin /></a>
            </div>
        </header>
    );
}
