'use client';
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import styles from './About.module.css';
import { gsap } from "gsap";
import { FaRegChessKing } from "react-icons/fa6";
import { IoFlaskOutline } from "react-icons/io5";


const About = () => {
    const [isVisible, setIsVisible] = useState(false);
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);


    const iconRef = useRef<HTMLSpanElement>(null);
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
                <div className={styles.maxWidth}>
                    <h2 className={`${styles.title} ${isVisible ? styles.visible : styles.hidden}`}>
                        About Me
                    </h2>

                    <div className={`${styles.content} ${isVisible ? styles.visible : styles.hidden}`}>
                        <p className={styles.intro}>
                            I am passionate about combining creativity with technology to help individuals and businesses build a strong digital presence.
                            I have experience building websites using HTML, CSS, and JavaScript, as well as modern libraries and tools like React, Node.js, SCSS, and Bootstrap to create responsive and dynamic web applications, from simple personal sites to complex platforms.
                            <br />
                            <br />
                            My expertise extends to graphic design, using Photoshop and Illustrator to design logos, visual identities, and marketing materials that reflect a brand’s essence. I am also skilled in video editing, producing visually engaging content that enhances storytelling and brand communication.
                            <br />
                            <br />

                            In UI/UX design, I focus on creating user-friendly and engaging interfaces, guided by a deep understanding of user needs. Additionally, I produce high-quality marketing and technical content, optimize it for SEO, and manage social media campaigns to boost engagement and reach.
                            <br />
                            <br />

                            I have strong skills in data analysis and reporting, working with Excel and Google Sheets to extract valuable insights, and using Google Data Studio and Power BI to create clear, data-driven dashboards.
                            <br />
                            <br />

                            I am passionate about education and training, offering workshops and courses in web development, design, and digital skills. My commitment to continuous learning ensures I stay up to date with the latest technologies to deliver the best results for my clients.
                        </p>

                        <h3 className={styles.subtitle}><span style={{ display: "inline-block" }} ref={iconRef2}><IoFlaskOutline />
                        </span>Technical Skills</h3>


                        <div className={styles.skillsGrid}>
                            <div className={styles.skillCategory}>
                                <h4 className={styles.categoryTitle}>Frontend Development</h4>
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
                                <h4 className={styles.categoryTitle}>Backend Development</h4>
                                <ul className={styles.skillList}>
                                    <li className={styles.skillItem}>
                                        <CheckCircle2 className={styles.bullet} />
                                        <span>Node.js & Express.js</span>
                                    </li>
                                    <li className={styles.skillItem}>
                                        <CheckCircle2 className={styles.bullet} />
                                        <span>MongoDB & PostgreSQL</span>
                                    </li>
                                    <li className={styles.skillItem}>
                                        <CheckCircle2 className={styles.bullet} />
                                        <span>RESTful API Design</span>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        <h3 className={styles.subtitle}>
                            <span style={{ display: "inline-block" }} ref={iconRef}><FaRegChessKing /></span> Experience
                        </h3>

                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineCard}>
                                    <div className={styles.cardHeader}>
                                        <h4 className={styles.cardTitle}>Website Development — Sprints</h4>
                                        <span className={styles.cardDate}>2024 ( 5 Months )</span>
                                    </div>
                                    <div className={styles.cardType}>
                                        <span>Training</span>
                                    </div>
                                    <p className={styles.cardDescription}>
                                        Completed an intensive training program focused on practical web development and real-world project implementation.
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
                                        <h4 className={styles.cardTitle}>UI/UX Designer — Sprints</h4>
                                        <span className={styles.cardDate}>2024 ( 2 Months )</span>
                                    </div>
                                    <div className={styles.cardType}>
                                        <span>Training</span>
                                    </div>
                                    <p className={styles.cardDescription}>
                                        Worked on designing intuitive user interfaces and enhancing user experience for web-based products within the development team.
                                    </p>
                                    <div className={styles.cardSkills}>
                                        <span style={{ marginLeft: "0", background: "#0011F8FF" }}>User Interface (UI)</span>
                                        <span style={{ background: "#FF00F2FF" }}>User Experience (UX)</span>
                                        <span style={{ background: "#FF0000" }}>Visual Design</span>
                                        <span style={{ background: "#004E00FF" }}>Figma</span>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineCard}>
                                    <div className={styles.cardHeader}>
                                        <h4 className={styles.cardTitle}>Frontend Developer — ITI</h4>
                                        <span className={styles.cardDate}>2024 - 2025</span>
                                    </div>
                                    <div className={styles.cardType}>
                                        <span>Training</span>
                                    </div>
                                    <p className={styles.cardDescription}>
                                        Developed responsive and accessible user interfaces using React and modern CSS.
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
                                        <h4 className={styles.cardTitle}>Professional Foundations — Alx</h4>
                                        <span className={styles.cardDate}>2025 ( 3 Months )</span>
                                    </div>
                                    <div className={styles.cardType}>
                                        <span>Training</span>
                                    </div>
                                    <p className={styles.cardDescription}>
                                        I completed the ALX Foundations Program, which helped me develop essential skills for professional work environments.
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