"use client";
import { useTranslations, useLocale } from 'next-intl';
import Button from '@/app/[locale]/ui/Button/button';
import Float from "@/app/[locale]/ui/Float/Float"
import { BackgroundBeams } from '@/app/[locale]/ui/Effects/backgroundEffect'
import { TextEffect } from '@/app/[locale]/ui/Effects/TextEffect';
import { NumberTicker } from '@/app/[locale]/ui/Effects/NumberTicker';
import { Star } from 'lucide-react';
import styles from './Hero.module.css';
function Hero() {
    const t = useTranslations('Hero');
    const locale = useLocale();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.hero} >
            <Float />
            {/* Background */}
            <div className={styles.background}>
                <BackgroundBeams />
            </div>
            {/* Content */}
            <div className={styles.content}>
                <div className={styles.contentInner}>
                    {/* Badge Section  */}
                    <div className={styles.badge}>
                        <Star className={styles.badgeIcon} fill="currentColor" />
                        <span className={styles.badgeText}>{t('badge')}</span>
                    </div>
                    {/* Main Title Section */}
                    <h1 className={`${styles.title} ${locale === "en" ? "title-en" : "title-ar"
                        }`}>
                        {t('title')}
                    </h1>
                    {/* Subtitle Section */}
                    <TextEffect per='word' preset='blur' className={styles.subtitle}>
                        {t('subtitle')}
                    </TextEffect>
                    {/* Stats Section */}
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>
                                <NumberTicker value={50} />+
                            </div>
                            <div className={styles.statLabel}>{t('successfulWebProjects')}</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>
                                <NumberTicker value={90} />+
                            </div>
                            <div className={styles.statLabel}>{t('successfulDesignProjects')}</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>
                                <NumberTicker value={3} />+
                            </div>
                            <div className={styles.statLabel}>{t('yearsOfExperience')}</div>
                        </div>
                    </div>
                </div>
                {/* Button Section */}
                <div className={styles.ctaButtons}>
                    {/* Contact Me Button */}
                    <Button
                        className={`${styles.but} ${locale === "en" ? "but-en" : "but-ar"
                            }`}
                        variant="ios"
                        size="sm"
                        onClick={() => scrollToSection('contact')}
                    >
                        {t('contactMe')}
                    </Button>
                    {/* Download CV Button */}
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
            {/* Scroll Indicator  */}
            <div className={styles.scrollIndicator} onClick={() => scrollToSection('about')}>
                <div className={styles.scrollIndicatorInner}>
                    <div className={styles.scrollIndicatorDot}>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;