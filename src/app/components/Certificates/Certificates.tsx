import { useState, useEffect, useRef } from 'react';
import styles from './Certificates.module.css';
import Float from '../../ui/Float/Float';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/app/ui/dialog";
import { StaticImageData } from 'next/image';
import Image from 'next/image';
const Law = 'image/certificates/Law_EYouth.jpg';
const MaharaTechHTML = 'image/certificates/MaharaTech_HTML_CSS.jpg'
const LinkedInCss = 'image/certificates/LinkedIn_CSS.jpg';
const LinkedInHTML = 'image/certificates/LinkedIn_HTML.jpg';
const LinkedInUX = 'image/certificates/LinkedIn_UXDesign.jpg';
const AlxPF = 'image/certificates/Alx_PF.jpg';

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    skills: string[];
    description: string;
    link: string;
    image: string | StaticImageData;
}

const Certificates = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentSection = sectionRef.current; 

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    const certificates: Certificate[] = [
        // EYouth Law
        {
            id: 1,
            title: 'Legalities Level 1',
            issuer: 'EYouth',
            date: '2024',
            description: 'The Academic Honor Code Certificate from EYouth for the course Legalities Level 1 | The Legal Side of Startups demonstrates my strong understanding of the legal and administrative frameworks that govern startup environments. Through this program, I gained in-depth knowledge of company formation under proper legal structures, drafting and reviewing contracts and business agreements, protecting intellectual property and trademarks, and ensuring compliance with local and international regulations. I also enhanced my skills in legal risk analysis, informed decision-making, and professional conflict resolution grounded in ethical principles, enabling me to effectively support any startup from a legal and organizational standpoint with a high level of competence.',
            skills: ["Corporate Law", "Law", "Startups Law"],
            link: 'https://experience.eyouthlearning.com/certificates/b651ede6b3a643068d1e112b3dc7256c',
            image: Law
        },
        // LinkeIn Css Development
        {
            id: 2,
            title: 'LinkedIn Css Developers',
            issuer: 'LinkedIn',
            date: '2025',
            description: 'A professional certification from LinkedIn that demonstrates a solid understanding of modern CSS concepts, including responsive design, layout systems (Flexbox & Grid), animations, and best practices for creating visually appealing and user-friendly web interfaces.',
            skills: ["SASS", "Front-End Development", "Web Development"],
            link: 'https://www.linkedin.com/learning/certificates/458f4ae26e68e673dd2996ef9e7ced5dd983f09341e9cf7d79fce9284b07c8ed',
            image: LinkedInCss
        },
        // LinkedIn HTML Essential
        {
            id: 3,
            title: 'HTML Essential Training',
            issuer: 'LinkedIn',
            date: '2025',
            description: 'HTML Essential Training by LinkedIn Learning is a foundational course designed to teach the core concepts of HTML for building modern web pages It covers everything from the basic structure of an HTML document to advanced semantic elements in HTML5. Learners gain a clear understanding of how to organize content, use tags effectively, and write clean, accessible code.This certification is ideal for beginners and anyone looking to build a strong foundation in web development.',
            skills: ["Web Development", "Front-End Development", "HTML"],
            link: 'https://www.linkedin.com/learning/certificates/e5943a5b7730104971dc49b59f498c1e93b9c5f4752fc31ad29dbe9474690f0d',
            image: LinkedInHTML
        },
        // MaharaTech Web Development HTML&Css
        {
            id: 4,
            title: 'Web Development HTML&Css',
            issuer: 'MaharaTech - ITIMooca',
            date: '2025',
            description: 'Web Development Course Using HTML & CSS is a comprehensive program that introduces learners to the fundamentals of front-end web development.It focuses on building and styling modern, responsive websites using HTML for structure and CSS for design and layout. The course covers topics like page layout, typography, colors, and responsive design principles. By completing this course, learners gain the skills to create visually appealing and well-structured web pages from scratch.',
            skills: ["HTML5", "CSS", "Front-End Development"],
            link: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=IMfutKmUA3&qrcode=1',
            image: MaharaTechHTML
        },
        // Alx Professional
        {
            id: 5,
            title: 'Alx Professional Foundations',
            issuer: 'ALX Africa',
            date: '2023',
            description: 'Successfully completed the ALX Professional Foundations Program, an intensive and transformative experience designed to build a strong foundation of professional excellence, leadership mindset, and critical thinking. Through this program, I developed essential communication, collaboration, and problem-solving skills, along with a deep understanding of emotional intelligence, adaptability, and personal growth in a fast-paced work environment. The program empowered me to become a more impactful, accountable, and future-ready professional, capable of thriving in diverse teams and delivering meaningful results in the global digital economy.',
            skills: ["Solving Skills","Professional Excellence","Leadership Mindset"],
            link: 'https://savanna.alxafrica.com/certificates/MF2z8LsRhS',
            image: AlxPF
        },
        // LinkedIn UX Design
        {
            id: 6,
            title: 'UX Design',
            issuer: 'LinkedIn',
            date: '2025',
            description: 'UX Design: 1 Overview is an introductory course that provides a solid foundation in User Experience (UX) design. It explains the key principles of UX, including user research, usability, information architecture, and design thinking. Learners explore how to understand user needs, create user-centered designs, and improve digital product experiences. By the end of the course, participants gain a clear understanding of the UX process and how it impacts successful product development.',
            skills: ["User Experience Design (UED)", "Design", "UX/UI"],
            link: 'https://www.linkedin.com/learning/certificates/db8806e2581a7c4d874f280b5ca1c9c172ca9443304ca76da2bba9d875fc065b',
            image: LinkedInUX
        },
    ];

    return (
        <section
            id="certificates"
            ref={sectionRef}
            className={`${styles.section} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.container}>
                <h2 className={styles.title}>Cartificates</h2>

                <div className={styles.sliderContainer}>
                    <div className={styles.slider}>
                        {certificates.map((certificate) => (
                            <div
                                key={certificate.id}
                                className={styles.certificateCard}
                                onClick={() => setSelectedCertificate(certificate)}
                            >
                                <div className={styles.certificateImageContainer}>
                                    <Image
                                        src={certificate.image}
                                        alt={certificate.title}
                                        className={styles.certificateImage}
                                        width={100}
                                        height={100}
                                    />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewText}>view Certificates 👀</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>






            <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>

                <DialogContent className={styles.dialogContent}>
                    <Float />
                    <DialogHeader>
                        <DialogTitle className={styles.dialogTitle}>
                            {selectedCertificate?.title}
                        </DialogTitle>
                    </DialogHeader>
                    <div className={styles.dialogBody}>
                        {selectedCertificate?.image && (
                            <Image
                                className={styles.image}
                                src={selectedCertificate.image}
                                alt={selectedCertificate.title}
                                width={600}
                                height={400}
                            />
                        )}
                        <div className={styles.dialogInfo}>
                            <div className={styles.dialogInfoItem}>
                                <strong>Issuing Organization :</strong>
                                <span>{selectedCertificate?.issuer}</span>
                            </div>
                            <div className={styles.dialogInfoItem}>
                                <strong>Issue Date:</strong>
                                <span>{selectedCertificate?.date}</span>
                            </div>
                            <div className={styles.dialogInfoItem}>
                                <strong>Description :</strong>
                                <p>{selectedCertificate?.description}</p>
                            </div>
                            <div className={styles.dialogInfoItem}>
                                <strong>Skills :</strong>
                                <p className={styles.skills}>
                                    <span>{selectedCertificate?.skills[0]}</span>
                                    <span>{selectedCertificate?.skills[1]}</span>
                                    <span>{selectedCertificate?.skills[2]}</span>
                                </p>
                            </div>
                            <div className={styles.dialogInfoItem}>
                                <strong>Certificate Link :</strong>
                                <div className={styles.butLink}>
                                    <a className={styles.link} href={selectedCertificate?.link}>
                                        {selectedCertificate?.title}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Certificates;
