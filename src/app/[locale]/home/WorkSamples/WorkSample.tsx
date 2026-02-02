"use client";
import React from "react";
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Idea1 from './2.jpg';
import BmiCaluclator from './BmiCaluclator/BmiCaluclatorImage.png';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion"; 

import { useTranslations, useLocale } from "next-intl";
import styles from "./SamplesCard.module.css";

// ──── البيانات هنا داخل الكومبوننت ────
const arabic_Samples = [
        {
            title: "Moonbeam",
            link: "home/AllProject/Moonbeaam",
            des: "New Web",
            thumbnail: Idea1,
        },
        {
            title: "حاسبة الوزن",
            link: "home/WorkSamples/BmiCaluclator",
            des: "New Web",
            thumbnail: BmiCaluclator,
        },
        {
            title: "Rogue",
            link: "https://userogue.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/rogue.png",
        },

        {
            title: "Editorially",
            link: "https://editorially.org",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/editorially.png",
        },
        {
            title: "Editrix AI",
            link: "https://editrix.ai",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/editrix.png",
        },
        {
            title: "Pixel Perfect",
            link: "https://app.pixelperfect.quest",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
        },

        {
            title: "Algochurn",
            link: "https://algochurn.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
        },
        {
            title: "Aceternity UI",
            link: "https://ui.aceternity.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
            title: "Tailwind Master Kit",
            link: "https://tailwindmasterkit.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
        },
        {
            title: "SmartBridge",
            link: "https://smartbridgetech.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
        },
        {
            title: "Renderwork Studio",
            link: "https://renderwork.studio",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
        },

        {
            title: "Creme Digital",
            link: "https://cremedigital.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
        },
        {
            title: "Golden Bells Academy",
            link: "https://goldenbellsacademy.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
        },
        {
            title: "Invoker Labs",
            link: "https://invoker.lol",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/invoker.png",
        },
        {
            title: "E Free Invoice",
            link: "https://efreeinvoice.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
        },
    ];

const english_Samples = [
        {
            title: "Moonbeam",
            link: "home/AllProject/Moonbeaam",
            des: "New Web",
            thumbnail: Idea1,
        },
        {
            title: "Bmi Caluclator",
            link: "home/WorkSamples/BmiCaluclator",
            des: "New Web",
            thumbnail: BmiCaluclator,
        },
        {
            title: "Rogue",
            link: "https://userogue.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/rogue.png",
        },

        {
            title: "Editorially",
            link: "https://editorially.org",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/editorially.png",
        },
        {
            title: "Editrix AI",
            link: "https://editrix.ai",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/editrix.png",
        },
        {
            title: "Pixel Perfect",
            link: "https://app.pixelperfect.quest",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
        },

        {
            title: "Algochurn",
            link: "https://algochurn.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
        },
        {
            title: "Aceternity UI",
            link: "https://ui.aceternity.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
            title: "Tailwind Master Kit",
            link: "https://tailwindmasterkit.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
        },
        {
            title: "SmartBridge",
            link: "https://smartbridgetech.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
        },
        {
            title: "Renderwork Studio",
            link: "https://renderwork.studio",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
        },

        {
            title: "Creme Digital",
            link: "https://cremedigital.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
        },
        {
            title: "Golden Bells Academy",
            link: "https://goldenbellsacademy.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
        },
        {
            title: "Invoker Labs",
            link: "https://invoker.lol",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/invoker.png",
        },
        {
            title: "E Free Invoice",
            link: "https://efreeinvoice.com",
            des: "New Web",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
        },
    ];

export const WorkSamples = () => {
    const locale = useLocale();

    // اختيار المصفوفة حسب اللغة
    const samples = locale === 'ar' ? arabic_Samples : english_Samples;

    const firstRow = samples.slice(0, 5);
    const secondRow = samples.slice(5, 10);
    const thirdRow = samples.slice(10, 15);

    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

    return (
        <div ref={ref} className={styles.heroContainer}>
            <Header />

            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
            >
                <motion.div className={`${styles.row} ${styles.rowReverse}`}>
                    {firstRow.map((item) => (
                        <ProductCard key={item.title} item={item} translate={translateX} />
                    ))}
                </motion.div>

                <motion.div className={styles.row}>
                    {secondRow.map((item) => (
                        <ProductCard key={item.title} item={item} translate={translateXReverse} />
                    ))}
                </motion.div>

                <motion.div className={`${styles.row} ${styles.rowReverse}`}>
                    {thirdRow.map((item) => (
                        <ProductCard key={item.title} item={item} translate={translateX} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

// Header و ProductCard بدون تغيير
// ... (نفس الكود اللي عندك)
export const Header = () => {
    const t = useTranslations('Projects');
    const locale = useLocale();
    return (
        <div className={`${styles.headerWrapper} ${locale == "en" ? "en-font" : "ar-font" }`}>
            <h1 className={styles.mainTitle}>
                {t('title1')} <br /> {t('title2')}
            </h1>
            <p className={styles.description}>
                {t('des1')}
                <br />
                {t('des2')}
            </p>
        </div>
    );
};

export const ProductCard = ({
    item,
    translate,
}: {
    item: {
        title: string;
        link: string;
        des: string;
        thumbnail: string | StaticImageData;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{ x: translate }}
            className={styles.itemCard}
        >
            <a href={item.link} className={styles.itemLink}>
                <Image
                    src={item.thumbnail}
                    height={600}
                    width={600}
                    className={styles.itemImage}
                    alt={item.title}
                />
            </a>

            <div className={styles.overlay} />

            <h2 className={styles.titleOverlay}>
                {item.title}
            </h2>
            <p className={styles.desOverlay}>
                {item.des}
            </p>
        </motion.div>
    );
};