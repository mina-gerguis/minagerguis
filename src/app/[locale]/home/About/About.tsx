'use client';
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from './About.module.css';
import { gsap } from "gsap";
import { useTranslations, useLocale } from "next-intl";

const About = () => {
    const t = useTranslations('About');
    const locale = useLocale();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const iconRef = useRef<HTMLSpanElement>(null);
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

    useEffect(() => {
        if (!iconRef.current) return;

        gsap.to(iconRef.current, {
            rotate: 15,
            duration: 0.8,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });
    }, []);

    const iconRef2 = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        if (!iconRef2.current) return;

        gsap.to(iconRef2.current, {
            rotate: 15,
            duration: 0.8,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });
    }, []);


    return (
        <section ref={sectionRef} id="about" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.containerInner}>
                    {/* Main Title */}
                    <h2 className={`${styles.mainTitle} ${locale === "en" ? "mainTitle-en" : "mainTitle-ar"
                        } ${isVisible ? styles.visible : styles.hidden
                        }`}>
                        {t('title')}
                    </h2>
                    {/* Info Section */}
                    <div className={styles.info}>
                        <p>{t('p1')}</p>
                        <p>{t('p2')}</p>
                        <p>{t('p3')}</p>
                        <p>{t('p4')}</p>
                        <p>{t('p5')}</p>
                    </div>
                    {/* Skills Section */}
                    <div className={styles.skills}>
                        <h3 className={`${styles.skillsTitle} ${locale === "en" ? "mainTitle-en" : "mainTitle-ar"}`}>{t('skillsTitle')}</h3>

                        <div className={styles.skillsGrid}>
                            <div className={styles.skillCategory}>
                                <h4 className={styles.categoryTitle}>{t('skillsItem1')}</h4>
                                <ul className={styles.skillList}>
                                    <li className={styles.skillItem}>
                                        <CheckCircle2 className={styles.bullet} />
                                        <span>HTML & CSS</span>
                                    </li>
                                    <li className={styles.skillItem}>
                                        <CheckCircle2 className={styles.bullet} />
                                        <span>JavaScript & TypeScript</span>
                                    </li>
                                    <li className={styles.skillItem}>
                                        <CheckCircle2 className={styles.bullet} />
                                        <span>React.js & Next.js</span>
                                    </li>
                                    <li className={styles.skillItem}>
                                        <CheckCircle2 className={styles.bullet} />
                                        <span>Tailwind CSS</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.skillCategory}>
                                <h4 className={styles.categoryTitle}>{t('skillsItem2')}</h4>
                                <ul className={styles.skillList}>
                                    <li className={styles.skillItem}>
                                        <CheckCircle2 className={styles.bullet} />
                                        <span>Node.js & Express.js</span>
                                    </li>
                                    <li className={styles.skillItem}>
                                        <CheckCircle2 className={styles.bullet} />
                                        <span>RESTful API Design</span>
                                    </li>
                                    <li className={styles.skillItem}>
                                        <CheckCircle2 className={styles.bullet} />
                                        <span>Git & Github</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Experience Section */}
                    <div>
                        <h3 className={`${styles.skillsTitle} ${locale === "en" ? "mainTitle-en" : "mainTitle-ar"}`}>{t('ExpTitle')}</h3>

                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineCard}>
                                    <div className={styles.cardHeader}>
                                        <h4 className={styles.cardTitle}>{t('Exp1.title')}</h4>
                                        <span className={styles.cardDate}>2024 ( 5 Months )</span>
                                    </div>
                                    <div className={styles.cardType}>
                                        <span>{t('Exp1.type')}</span>
                                    </div>
                                    <p className={styles.cardDescription}>
                                        {t('Exp1.des')}
                                    </p>
                                    <div className={styles.cardSkills}>
                                        <span style={{ marginLeft: "0", background: "#c53800" }}>Html</span>
                                        <span style={{ background: "#0000FF" }}>Css</span>
                                        <span style={{ background: "#494D18FF" }}>JaveScript</span>
                                        <span style={{ background: "#8B0056FF" }}>Software Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineCard}>
                                    <div className={styles.cardHeader}>
                                        <h4 className={styles.cardTitle}>{t('Exp2.title')}</h4>
                                        <span className={styles.cardDate}>2024 ( 2 Months )</span>
                                    </div>
                                    <div className={styles.cardType}>
                                        <span>{t('Exp2.type')}</span>
                                    </div>
                                    <p className={styles.cardDescription}>
                                        {t('Exp2.des')}
                                    </p>
                                    <div className={styles.cardSkills}>
                                        <span style={{ marginLeft: "0", background: "#0011F8FF" }}>User Interface (UI)</span>
                                        <span style={{ background: "#0066FF" }}>User Experience (UX)</span>
                                        <span style={{ background: "#FF0000" }}>Visual Design</span>
                                        <span style={{ background: "#CE0CCE" }}>Figma</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineCard}>
                                    <div className={styles.cardHeader}>
                                        <h4 className={styles.cardTitle}>{t('Exp3.title')}</h4>
                                        <span className={styles.cardDate}>2024 - 2025</span>
                                    </div>
                                    <div className={styles.cardType}>
                                        <span>{t('Exp3.type')}</span>
                                    </div>
                                    <p className={styles.cardDescription}>
                                        {t('Exp3.des')}
                                    </p>
                                    <div className={styles.cardSkills}>
                                        <span style={{ marginLeft: "0", background: "#c53800" }}>HTML5</span>
                                        <span style={{ background: "#8B0056FF" }}>Bootstrap (Framework)</span>
                                        <span style={{ background: "#FF00F2FF" }}>SCSS</span>
                                        <span style={{ background: "#0000FF" }}>TypeScript</span>
                                        <span style={{ background: "#000000" }}>React.js</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineCard}>
                                    <div className={styles.cardHeader}>
                                        <h4 className={styles.cardTitle}>{t('Exp4.title')}</h4>
                                        <span className={styles.cardDate}>2025 ( 3 Months )</span>
                                    </div>
                                    <div className={styles.cardType}>
                                        <span>{t('Exp4.type')}</span>
                                    </div>
                                    <p className={styles.cardDescription}>
                                        {t('Exp4.des')}
                                    </p>
                                    <div className={styles.cardSkills}>
                                        <span style={{ marginLeft: "0", background: "#FF0000" }}>Growth Mindset</span>
                                        <span style={{ background: "#066896FF" }}>Google Workspace</span>
                                        <span style={{ background: "#8B0056FF" }}>Task & Project Management</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;