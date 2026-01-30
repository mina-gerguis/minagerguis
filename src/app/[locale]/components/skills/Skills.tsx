"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt,
    FaDocker,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaFigma,
    FaFacebook,
    FaDiscord,
    FaInstagram,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiMongodb,
    SiFirebase,
    SiJavascript,
    SiDjango,
    SiPhp,
    SiLaravel,
    SiVuedotjs,
    SiGraphql,
    SiPostgresql,
    SiMysql,
    SiCanva,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobexd,
} from "react-icons/si";

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const devSkills = [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#000" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
        { name: "Vue.js", icon: <SiVuedotjs color="#42B883" /> },
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Express", icon: <i className="devicon-express-original colored"></i> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql color="#00758F" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
        { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "Django", icon: <SiDjango color="#092E20" /> },
        { name: "PHP", icon: <SiPhp color="#777BB4" /> },
        { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },
        { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop color="#31A8FF" /> },
        { name: "Illustrator", icon: <SiAdobeillustrator color="#FF9A00" /> },
        { name: "XD", icon: <SiAdobexd color="#FF61F6" /> },
        { name: "Canva", icon: <SiCanva color="#00C4CC" /> },
        { name: "Facebook", icon: <FaFacebook color="#1877F2" /> },
        { name: "Instagram", icon: <FaInstagram color="#E4405F" /> },
        { name: "Discord", icon: <FaDiscord color="#5865F2" /> },
    ];

    const repeatedDevSkills = [...devSkills, ...devSkills, ...devSkills];

    return (
        <section ref={sectionRef} id="skills" className={styles.section}>
            <div className={styles.container}>
                <h2
                    className={`${styles.title} ${isVisible ? styles.visible : styles.hidden
                        }`}
                >
                    Skills & Technologies
                </h2>

                <div className={styles.sliderWrapper}>
                    <div className={styles.sliderTrack}>
                        {repeatedDevSkills.map((skill, index) => (
                            <div key={index} className={styles.skillCard}>
                                <div className={styles.skillIcon}>{skill.icon}</div>
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Skills;
