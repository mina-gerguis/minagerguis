"use client";
import Button from '@/app/ui/Button/button';
import { Star } from 'lucide-react';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Float from "@/app/ui/Float/Float"
import styles from './Hero.module.css';

function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (heroRef.current) {
            gsap.from(heroRef.current.children, {
                y: -50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
            });
        }
    }, []);


    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (badgeRef.current) {
                gsap.to(badgeRef.current, {
                    scale: 1.1,
                    opacity: 0.7,
                    duration: 1,
                    yoyo: true,
                    repeat: -1,
                    ease: "power3.inOut"
                });
            }
        }, 50);
        return () => clearTimeout(timeout);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={styles.hero} ref={heroRef}>
            <Float />
            <div className={styles.content}>
                <div className={styles.contentInner}>
                    <div ref={badgeRef} className={styles.badge}>
                        <Star className={styles.badgeIcon} fill="currentColor" />
                        <span className={styles.badgeText}> Available for freelance work</span>
                    </div>

                    <h1 className={styles.title}>
                        Hello! Software Engineer Portfolio — Mina Gerguis
                    </h1>

                    <p className={styles.subtitle}>
                        Full Stack Developer & Creative Technologist building high-performance, visually engaging web experiences — combining design thinking, clean code, and modern frameworks to craft digital solutions that inspire and deliver real impact.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>50+</div>
                            <div className={styles.statLabel}>Successful Web Projects</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>90+</div>
                            <div className={styles.statLabel}>Design Projects</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>3+</div>
                            <div className={styles.statLabel}>Years of Experience</div>
                        </div>
                    </div>

                    <div className={styles.ctaButtons}>
                        <Button
                            variant="ios"
                            size="iosLarge"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact me
                        </Button>

                        <Button
                            variant="iosOutline"
                            size="iosLarge"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/mycv.pdf';
                                link.target = '_blanck'
                                link.click();
                            }}
                        >
                            Downlode cv
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator} onClick={() => scrollToSection('about')}    >
                <div className={styles.scrollIndicatorInner}>
                    <div className={styles.scrollIndicatorDot}>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;