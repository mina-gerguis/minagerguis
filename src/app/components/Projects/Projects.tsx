'use client';

import { useEffect, useRef, useState } from 'react';
import { RiExternalLinkLine } from "react-icons/ri";
import Link from 'next/link';
import styles from './Projects.module.css';
import Float from '../../ui/Float/Float';

interface Service {
    id: string;
    name: string;
    details: string;
    link: string;
}

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);


    useEffect(() => {
        const sectionEl = sectionRef.current; // ✅ خزّن القيمة في متغير

        if (!sectionEl) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(sectionEl);

        return () => {
            observer.unobserve(sectionEl); // ✅ استخدم المتغير بدل sectionRef.current
        };
    }, []);

    const services: Service[] = [
        {
            id: 'frontend',
            name: 'Front End Development',
            details: 'Front-End skilled in HTML, CSS, JavaScript, React, with experience in SCSS, Bootstrap , and Tailwind Framwork',
            link: 'FrontEndDevelopment'
        },
        {
            id: 'backend',
            name: 'Back End Development',
            details: 'Node.js, Express, and database management using MongoDB and MySQL for robust server-side applications',
            link: 'BackEndDevelopment'
        },
        {
            id: 'design',
            name: 'UI/UX Design',
            details: 'Highly proficient in Figma & Adobe XD he specializes in creating modern, user-friendly designs that brand identity',
            link: 'UIUXDesign'
        },
        {
            id: 'video-editing',
            name: 'Video Editing',
            details: 'Experienced in Adobe Premiere Pro and Final Cut Pro for professional video editing and production',
            link: 'video-editing'
        },
        {
            id: 'design-graphics',
            name: 'Graphic Design',
            details: 'Skilled in Adobe Photoshop and Illustrator for creating stunning visuals and graphics for various media',
            link: 'graphic-design'
        },
        {
            id: 'content',
            name: 'Content Creation',
            details: 'Skilled in creating engaging content for various platforms, including blogs, social media, and websites.',
            link: 'content-creation'
        }
    ];

    return (
        <section
            id="projects"
            ref={sectionRef}
            className={`${styles.section} ${isVisible ? styles.visible : ''}`}
        >
            <Float />
            <div className={styles.container}>
                <h2 className={styles.title}>Projects</h2>

                <div className={styles.sliderContainer}>
                    <div className={styles.slider}>
                        {services.map((service) => (
                            <div key={service.id} className={styles.serviceCard}>
                                <div className={styles.serviceContent}>
                                <div className={styles.glass}></div>
                                    <h3 className={styles.serviceName}>{service.name}</h3>
                                    <p className={styles.serviceDetail}>{service.details}</p>

                                    <Link
                                        href={`../components/${service.link}`}
                                        hrefLang=''
                                        className={styles.viewButton}
                                    >
                                        View Projects  <RiExternalLinkLine fontSize={22}/>

                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
