// "use client";
// import { useTheme } from "@/lib/ThemeContext";
// import React, { useRef } from "react";
// import navBar from "./Navbar.module.css";
// import { RiGithubLine } from "react-icons/ri";
// import { FaSun } from "react-icons/fa";
// import { FiLinkedin } from "react-icons/fi";
// import { MdOutlineEmail, MdOutlineDarkMode } from "react-icons/md";
// import LanguageSwitcher from "../LanguageSwitcher";
// export default function Navbar() {
//     const { theme, toggleTheme } = useTheme();
//     const navbarRef = useRef<HTMLElement>(null);

//     return (
//         <header className={navBar.container} ref={navbarRef}>
//             <div className={navBar.logo}>
//                 <a href="/ ">
//                     <h1>Mina Gerguis</h1>
//                 </a>
//             </div>

//             <div className={navBar.socialMedia}>
//                 <button onClick={toggleTheme} className={navBar.themeToggle}>
//                     {theme === "light" ? <MdOutlineDarkMode /> : <FaSun />}
//                 </button>
//                 <LanguageSwitcher />
//                 <a href="mailto:mina_gerguis@hotmail.com" target="_blank"><MdOutlineEmail /></a>
//                 <a href="https://github.com/mina-gerguis" target="_blank"><RiGithubLine /></a>
//                 <a href="https://www.linkedin.com/in/mina-gerguis" target="_blank"><FiLinkedin /></a>
//             </div>
//         </header>
//     );
// }

"use client";
import { useTheme } from "@/lib/ThemeContext";
import React, { useState, useEffect } from "react";
import navBar from "./Navbar.module.css";
import { FaGithub } from "react-icons/fa";
import { BsHighlights } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import LanguageSwitcher from "../../ui/LanguageSwitcher";
import { BsSendFill } from "react-icons/bs";
import BubbleMenu from "@/app/[locale]/ui/BubbleMenu/BubbleMenu";

import { useTranslations, useLocale } from 'next-intl';

import { ChevronDown } from "lucide-react";

import Image from 'next/image';
import Link from "next/link";

const arLinks = [
    {
        label: "تطوير الويب",
        href: "#data-engine",
        hasDropdown: true,
        dropdown: [
            { label: "تطوير الواجهة الأمامية", href: "#frontend" },
            { label: "تطوير الواجهة الخلفية", href: "#backend" },
            { label: "التطوير الكامل (Fullstack)", href: "#fullstack" },
            { label: "ويب 3", href: "#web3" },
            { label: "التجارة الإلكترونية", href: "#ecommerce" },
        ],
    },
    { label: "علم البيانات", href: "#research" },
    { label: "تطوير التطبيقات المحمولة", href: "#intelligence" },
    { label: "ديف أوبس (DevOps)", href: "#research" },
    { label: "الأمن السيبراني", href: "#careers" },
    { label: "تصميم واجهة وتجربة المستخدم", href: "#careers" },
    { label: "التصميم الجرافيكي", href: "#careers" },
    { label: "البحث العلمي", href: "#research" },
    { label: "أخرى", href: "#careers" },
];

const enLinks = [
    {
        label: "Web Development",
        href: "#data-engine",
        hasDropdown: true,
        dropdown: [
            { label: "Frontend", href: "#frontend" },
            { label: "Backend", href: "#backend" },
            { label: "Fullstack", href: "#fullstack" },
            { label: "Web3", href: "#web3" },
            { label: "E-commerce", href: "#ecommerce" },
        ],
    },
    { label: "Data Science", href: "#research" },
    { label: "Mobile Development", href: "#intelligence" },
    { label: "DevOps", href: "#research" },
    { label: "Cybersecurity", href: "#careers" },
    { label: "UI/UX", href: "#careers" },
    { label: "Graphic Design", href: "#careers" },
    { label: "Research", href: "#research" },
    { label: "Other", href: "#careers" },
];


export default function Navbar() {
    const items = [
        {
            label: 'home',
            href: '#',
            ariaLabel: 'Home',
            rotation: -8,
            hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
        },
        {
            label: 'about',
            href: '#about',
            ariaLabel: 'About',
            rotation: 8,
            hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
        },
        {
            label: 'projects',
            href: '#projects',
            ariaLabel: 'Projects',
            rotation: 8,
            hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
        },
        {
            label: 'certificates',
            href: '#certificates',
            ariaLabel: 'Certificates',
            rotation: 8,
            hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
        },
        {
            label: 'contact',
            href: '#',
            ariaLabel: 'Contact',
            rotation: -8,
            hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
        }
    ];
    const logo = "/image/logo.png";
    const t = useTranslations('Hero');
    const locale = useLocale();
    const { toggleTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const samples = locale === 'ar' ? arLinks : enLinks;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className={`${navBar.container} ${isVisible ? navBar.fixed : navBar.static}`}
            >
                <div className={navBar.containerInner}>
                    {/* Nav Left */}
                    <div className={navBar.navLeft}>
                        <nav className={navBar.navLin}>
                            {samples.map((link) => (
                                <div key={link.label} className={navBar.navItem}>
                                    {link.hasDropdown ? (
                                        <div className={navBar.dropdownWrapper}>
                                            <button
                                                className={navBar.navLink}
                                                onClick={() =>
                                                    setOpenDropdown(openDropdown === link.label ? null : link.label)
                                                }
                                            >
                                                {link.label}
                                                <ChevronDown
                                                    size={16}
                                                    className={`${navBar.chevron} ${openDropdown === link.label ? navBar.rotated : ""}`}
                                                />
                                            </button>

                                            {openDropdown === link.label && (
                                                <div className={navBar.dropdown}>
                                                    {link.dropdown!.map((item) => (
                                                        <a key={item.label} href={item.href} className={navBar.dropdownItem}>
                                                            {item.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a href={link.href} className={navBar.navLink}>
                                            {link.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                    {/* Logo */}
                    <div className={navBar.logo}>
                        <Link href="/">
                            <span className={navBar.logoText}>Mina Gerguis</span>
                        </Link>
                        <Image
                            src={logo}
                            height={50}
                            width={50}
                            className={navBar.logoItem}
                            alt="logo"
                        />
                    </div>
                    {/* Buttons Right */}
                    <div className={navBar.butsRight}>
                        {/* Dark Mood */}
                        <button onClick={toggleTheme} className={navBar.themeToggle}>
                            <BsHighlights />
                        </button>
                        <span className={navBar.dot}>|</span>
                        {/* Language Switch */}
                        <div className={navBar.langSwitch}>
                            <LanguageSwitcher />
                        </div>
                        <span className={navBar.dot}>|</span>
                        {/* Github */}
                        <a
                            className={navBar.github}
                            href="https://github.com/mina-gerguis"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span>300</span>
                        </a>
                        <span className={navBar.dot}>|</span>
                        {/* Linkedin */}
                        <a
                            className={navBar.linkedin}
                            href="https://www.linkedin.com/in/mina-gerguis"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                            <span>1k</span>
                        </a>
                        <span className={`${navBar.dot} ${navBar.dotEnd}`} >|</span>
                        <button
                            className={`${navBar.butContact} ${locale === "en" ? navBar.butEn : navBar.butAr}`}
                            onClick={() => {
                                window.location.href = 'mailto:mina_gerguis@hotmail.com';
                            }}
                        >
                            {t('nav')}

                            <BsSendFill
                                size={12}
                                style={{
                                    margin: "0 0 0 5px"
                                }}
                            />

                        </button>
                    </div>
                </div>
            </div>
            {/* Bubble Menu */}
            <div className={navBar.bubbleMenu}>
                <BubbleMenu
                    logo={<span style={{ fontWeight: 700 }}></span>}
                    items={items}
                    menuAriaLabel="Toggle navigation"
                    useFixedPosition={true}
                    animationEase="back.out(1.5)"
                    animationDuration={0.5}
                    staggerDelay={0.12}
                    className={navBar.menu}
                />
            </div>
        </>
    );
}