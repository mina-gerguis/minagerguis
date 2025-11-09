import styles from "./courses.module.css"
import React, { JSX } from "react";
import {
    TbDatabase,
    TbBrandCpp,
    TbBrandPython,
    TbBrandReact,
    TbShieldLock,
    TbNetwork,
    TbBinaryTree,
    TbTerminal2,
    TbBrandCSharp
} from "react-icons/tb";
import { FaJava, FaFigma, FaLaravel, FaDocker, FaBootstrap, FaSass } from "react-icons/fa";
import {
    SiHtml5,
    SiCss3,
    SiGit,
    SiJavascript,
    SiMysql,
    SiLinux,
    SiDart,
    SiPhp,
    SiNextdotjs,
    SiReact,
    SiFlutter,
    SiTypescript,
    SiTailwindcss
} from "react-icons/si";

import { TbProgressCheck } from "react-icons/tb";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
type Course = {
    name: string;
    icon: JSX.Element;
    link: string;
    available: boolean;
};

const courses: Course[] = [
    { name: "ما قبل البرمجة", icon: <TbProgressCheck className={`${styles.icon} ${styles.start}`} />, link: "", available: false },
    { name: "أساسيات البرمجة", icon: <TbProgressCheck className={`${styles.icon} ${styles.basic}`} />, link: "", available: false },
    { name: "HTML", icon: <SiHtml5 className={`${styles.icon} ${styles.html}`} />, link: "", available: false },
    { name: "CSS", icon: <SiCss3 className={`${styles.icon} ${styles.css}`} />, link: "./css", available: true },
    { name: "JavaScript", icon: <SiJavascript className={`${styles.icon} ${styles.js}`} />, link: "", available: false },
    { name: "Typescript", icon: <SiTypescript className={`${styles.icon} ${styles.ts}`} />, link: "", available: false },
    { name: "Tailwind CSS", icon: <SiTailwindcss  className={`${styles.icon} ${styles.tailwind}`} />, link: "", available: false },
    { name: "Bootstrap", icon: <FaBootstrap className={`${styles.icon} ${styles.bootstrap}`} />, link: "", available: false },
    { name: "Sass", icon: <FaSass  className={`${styles.icon} ${styles.sass}`} />, link: "", available: false },
    { name: "Git & GitHub", icon: <SiGit className={`${styles.icon} ${styles.git}`} />, link: "", available: false },
    { name: "React", icon: <SiReact className={`${styles.icon} ${styles.react}`} />, link: "", available: false },
    { name: "Next.js", icon: <SiNextdotjs className={`${styles.icon} ${styles.next}`} />, link: "", available: false },
    { name: "قواعد البيانات", icon: <TbDatabase className={`${styles.icon} ${styles.database}`} />, link: "", available: false },
    { name: "SQL", icon: <SiMysql className={`${styles.icon} ${styles.mysql}`} />, link: "", available: false },
    { name: "React Native", icon: <TbBrandReact className={`${styles.icon} ${styles.react}`} />, link: "", available: false },
    { name: "Python", icon: <TbBrandPython className={`${styles.icon} ${styles.python}`} />, link: "", available: false },
    { name: "++C", icon: <TbBrandCpp className={`${styles.icon} ${styles.cpp}`} />, link: "", available: false },
    { name: "Java", icon: <FaJava className={`${styles.icon} ${styles.java}`} />, link: "", available: false },
    { name: "Linux", icon: <SiLinux className={`${styles.icon} ${styles.linux}`} />, link: "", available: false },
    { name: "Terminal", icon: <TbTerminal2 className={`${styles.icon} ${styles.terminal}`} />, link: "", available: false },
    { name: "PHP", icon: <SiPhp className={`${styles.icon} ${styles.php}`} />, link: "", available: false },
    { name: "Laravel", icon: <FaLaravel className={`${styles.icon} ${styles.laravel}`} />, link: "", available: false },
    { name: "Dart", icon: <SiDart className={`${styles.icon} ${styles.dart}`} />, link: "", available: false },
    { name: "Flutter", icon: <SiFlutter className={`${styles.icon} ${styles.flutter}`} />, link: "", available: false },
    { name: "#C", icon: <TbBrandCSharp className={`${styles.icon} ${styles.csharp}`} />, link: "", available: false },
    { name: "UI/UX", icon: <FaFigma className={`${styles.icon} ${styles.uiux}`} />, link: "", available: false },
    { name: "تحديات برمجية", icon: <TbProgressCheck className={`${styles.icon} ${styles.progress}`} />, link: "", available: false },
    { name: "الخوارزميات", icon: <TbBinaryTree className={`${styles.icon} ${styles.algorithms}`} />, link: "", available: false },
    { name: "الشبكات", icon: <TbNetwork className={`${styles.icon} ${styles.network}`} />, link: "", available: false },
    { name: "حماية الشبكات", icon: <TbShieldLock className={`${styles.icon} ${styles.networkProtection}`} />, link: "", available: false },
    { name: "Docker", icon: <FaDocker  className={`${styles.icon} ${styles.docker}`} />, link: "", available: false },
];

export default function CourseCards() {
    return (
        <div>
            <Navbar />
            <div className={`${styles.container} ${styles.fadeUp}`}>
                <h2>الدورات التدريبية</h2>
                <div className={`${styles.content} ${styles.fadeUp}`}>
                    {courses.map((course, i) => (
                        <a
                            href={`./data/${course.link}`}
                            key={i}
                            className={`${styles.card} ${!course.available ? styles.disabled : ""}`}>
                            {!course.available && <span className={styles.badge}>قريباً ستكون متوفرة</span>}
                            {course.icon}
                            <h3>{course.name}</h3>
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
