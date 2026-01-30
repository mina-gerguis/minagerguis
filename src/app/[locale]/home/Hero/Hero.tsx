"use client";
import { useRef } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { Star } from 'lucide-react';
import Button from '@/app/[locale]/ui/Button/button';
import Float from "@/app/[locale]/ui/Float/Float"
import { TextEffect } from '../../ui/LiquidEther/LiquidEther';
import styles from './Hero.module.css';
// import "./hero.scss"

function Hero() {
    const t = useTranslations('Hero');
    const locale = useLocale();
    const heroRef = useRef<HTMLElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={styles.hero} ref={heroRef}>
            <Float />
            <div className={styles.background}>

            </div>
            <div className={styles.content}>
                <div className={styles.contentInner}>
                    <div ref={badgeRef} className={styles.badge}>
                        <Star className={styles.badgeIcon} fill="currentColor" />
                        <span className={styles.badgeText}>{t('badge')}</span>
                    </div>

                    <h1 className={`${styles.title} ${locale === "en" ? "title-en" : "title-ar"
                        }`}>
                        {t('title')}
                    </h1>



                    <TextEffect per='word' preset='blur' className={styles.subtitle}>
                        {t('subtitle')}
                    </TextEffect>



                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>50+</div>
                            <div className={styles.statLabel}>{t('successfulWebProjects')}</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>90+</div>
                            <div className={styles.statLabel}>{t('successfulDesignProjects')}</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>3+</div>
                            <div className={styles.statLabel}>{t('yearsOfExperience')}</div>
                        </div>
                    </div>

                </div>
                <div className={styles.ctaButtons}>
                    <Button
                        className={`${styles.but} ${locale === "en" ? "but-en" : "but-ar"
                            }`}
                        variant="ios"
                        size="sm"
                        onClick={() => scrollToSection('contact')}
                    >
                        {t('contactMe')}
                    </Button>

                    <Button
                        className={`${styles.but} ${locale === "en" ? "but-en" : "but-ar"
                            }`}
                        variant="iosOutline"
                        size="sm"
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/mycv.pdf';
                            link.target = '_blanck'
                            link.click();
                        }}
                    >
                        {t('downloadCV')}
                    </Button>
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