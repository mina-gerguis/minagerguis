'use client'

import { useState, useEffect, useRef } from 'react';
import { LuExternalLink } from "react-icons/lu";
import { PiGithubLogoFill } from "react-icons/pi";
import { StaticImageData } from 'next/image';
import styles from './Projects.module.css';
import Float from '../../ui/Float/Float';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/app/ui/dialog";
import Image from 'next/image';
import BmiCaluclatorr from '@/assets/bmiCaluclatorr.png';
import Bmi1 from '@/assets/FrondEndImage/Bmi/1.png';
import Bmi2 from '@/assets/FrondEndImage/Bmi/2.png';
import ideaWebSiteService from '@/assets/ideaWebSiteService.png';

interface projectSamples {
    id: number;
    title: string;
    skills: string[];
    description: string;
    live?: string;
    github: string;
    image: string | StaticImageData;
    assets: string | StaticImageData;
    assets2: string | StaticImageData;
}

const Samples = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<projectSamples | null>(null);
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

    const projectSamples: projectSamples[] = [
        // Bmi Caluclator
        {
            id: 1,
            title: 'Bmi Caluclator',
            description: 'A clean and responsive web application that allows users to quickly calculate their Body Mass Index (BMI) by entering their height and weight. The interface is simple, modern, and fully optimized for mobile devices. It instantly displays the BMI result along with a clear category (Underweight, Normal, Overweight, or Obese). The project focuses on accessibility, smooth user experience, and accurate health insights in an easy-to-use design.',
            skills: ["React", "Css", "JaveScript", "TypeScript", "HTML", "Other"],
            live: 'https://bmi-calculator-mgyv.vercel.app',
            github: 'https://github.com/mina-gerguis/BMI-Calculator',
            image: BmiCaluclatorr,
            assets: Bmi1,
            assets2: Bmi2
        },
        // LinkeIn Css Development
        {
            id: 2,
            title: 'Bmi Caluclator',
            description: 'A clean and responsive web application that allows users to quickly calculate their Body Mass Index (BMI) by entering their height and weight. The interface is simple, modern, and fully optimized for mobile devices. It instantly displays the BMI result along with a clear category (Underweight, Normal, Overweight, or Obese). The project focuses on accessibility, smooth user experience, and accurate health insights in an easy-to-use design.',
            skills: ["React", "Css", "JaveScript"],
            live: 'https://experience.eyouthlearning.com/certificates/b651ede6b3a643068d1e112b3dc7256c',
            github: 'b651ede6b3a643068d1e112b3dc7256c',
            image: ideaWebSiteService,
            assets: Bmi1,
            assets2: Bmi2,
        },
    ];

    return (
        <div>
            <Navbar />
            <section
                id="projectSamples"
                ref={sectionRef}
                className={`${styles.section} ${isVisible ? styles.visible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.headSection}>
                        <h2 className={styles.mainTitle}>Front-End Projects</h2>
                        <p className={styles.secondTitle}>These are examples of my work in developing the front end.</p>
                    </div>

                    <div className={styles.content}>
                        {projectSamples.map((projectSamples) => (
                            <div
                                key={projectSamples.id}
                                className={styles.samplesCard}
                            >
                                <div
                                    onClick={() => setSelectedProject(projectSamples)}
                                >
                                    <div className={styles.samplesImageContainer}>
                                        <Image
                                            src={projectSamples.image}
                                            alt={projectSamples.title}
                                            className={styles.samplesImage}
                                            width={0}
                                            height={0}
                                        />
                                    </div>
                                    <div className={styles.samplesDetails}>
                                        <div className={styles.samplesTitleCard}>
                                            <h3>{projectSamples.title}</h3>
                                        </div>
                                        <div className={styles.samplesDetailsCard}>
                                            <p>{projectSamples.description}</p>
                                        </div>
                                        <div className={styles.samplesSkillsCard}>
                                            <span>{projectSamples.skills[0]}</span>
                                            <span>{projectSamples.skills[1]}</span>
                                            <span>{projectSamples.skills[2]}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.button}>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.live}
                                        href={projectSamples.live}>
                                        <LuExternalLink fontSize={18} />
                                        Live Demo
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.github}
                                        href={projectSamples.github}>
                                        <PiGithubLogoFill fontSize={18} />
                                        Github
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>





























                <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>

                    <DialogContent className={styles.dialogContent}>
                        <Float />
                        <DialogHeader>
                            <DialogTitle className={styles.dialogTitle}>
                                {selectedProject?.title}
                            </DialogTitle>
                        </DialogHeader>
                        <div className={styles.dialogBody}>
                            {selectedProject?.image && (
                                <Image
                                    className={styles.image}
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    width={600}
                                    height={400}
                                />
                            )}
                            <div className={styles.dialogInfo}>
                                <div className={styles.dialogInfoItem}>
                                    <strong>Description :</strong>
                                    <p>{selectedProject?.description}</p>
                                </div>
                                <div className={styles.dialogInfoItem}>
                                    <strong>Skills :</strong>
                                    <p className={styles.skills}>
                                        <span>{selectedProject?.skills[0]}</span>
                                        <span>{selectedProject?.skills[1]}</span>
                                        <span>{selectedProject?.skills[2]}</span>
                                        <span>{selectedProject?.skills[3]}</span>
                                        <span>{selectedProject?.skills[4]}</span>
                                        <span>{selectedProject?.skills[5]}</span>
                                    </p>
                                </div>
                                <div className={styles.dialogAssets}>
                                    <div>
                                        {selectedProject?.image && (
                                            <Image
                                                src={selectedProject.assets2}
                                                alt={selectedProject?.title}
                                                className={styles.assetsImage}
                                                width={10}
                                                height={10}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className={styles.dialogInfoItem}>
                                    <strong>Certificate Link :</strong>
                                    <div className={styles.butLink}>

                                        <a
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            className={styles.live}
                                            href={selectedProject?.live}>
                                            <LuExternalLink fontSize={18} />
                                            Live Demo
                                        </a>
                                        <a
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            className={styles.github}
                                            href={selectedProject?.github}>
                                            <PiGithubLogoFill fontSize={18} />
                                            Github
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </section>
            <Footer />
        </div>
    );
};

export default Samples;
