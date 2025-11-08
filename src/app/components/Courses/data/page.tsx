import styles from "./courses.module.css"
import React, { JSX } from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiGit,
    SiReact,
    SiNextdotjs
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
    { name: "HTML", icon: <SiHtml5 className={`${styles.icon} ${styles.html}`} />, link: "", available: false },
    { name: "HTML", icon: <SiHtml5 className={`${styles.icon} ${styles.html}`} />, link: "", available: false },
    { name: "CSS", icon: <SiCss3 className={`${styles.icon} ${styles.css}`} />, link: "./css", available: true },
    { name: "JavaScript", icon: <SiJavascript className={`${styles.icon} ${styles.js}`} />, link: "", available: false },
    { name: "Git & GitHub", icon: <SiGit className={`${styles.icon} ${styles.git}`} />, link: "", available: false },
    { name: "React", icon: <SiReact className={`${styles.icon} ${styles.react}`} />, link: "", available: false },
    { name: "Next.js", icon: <SiNextdotjs className={`${styles.icon} ${styles.next}`} />, link: "", available: false },
];

export default function CourseCards() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h2>الدورات التدريبية</h2>
                <div className={styles.content}>
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
