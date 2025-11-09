'use client'

import { useState } from "react";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import styles from "./CSSCourse.module.css";
import OverviewLesson from "./lessons/overview";
import FontsLesson from "./lessons/font";
import MarginsLesson from "./lessons/font";
import BordersLesson from "./lessons/font";
import Navbar from "@/app/components/Navbar/Navbar";
import NavButtons from "@/app/ui/nextButton/nextButton";

export default function CSSCourse() {
    const lessons = ["overview", "fonts", "margins", "borders"];
    const [activeLesson, setActiveLesson] = useState("overview");
    const [menuOpen, setMenuOpen] = useState(false);

    const renderLesson = () => {
        switch (activeLesson) {
            case "overview":
                return <OverviewLesson />;
            case "fonts":
                return <FontsLesson />;
            case "margins":
                return <MarginsLesson />;
            case "borders":
                return <BordersLesson />;
            default:
            // return <ColorsLesson />;
        }
    };

    const handleLessonClick = (lesson: string) => {
        setActiveLesson(lesson);
        if (window.innerWidth <= 768) {
            setMenuOpen(false);
        }
    };

    const currentIndex = lessons.indexOf(activeLesson);

    const handleNext = () => {
        if (currentIndex < lessons.length - 1) {
            setActiveLesson(lessons[currentIndex + 1]);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setActiveLesson(lessons[currentIndex - 1]);
        }
    };

    return (
        <div>
            <Navbar />
            <div className={styles.courseContainer}>
                {/* زر القائمة في الموبايل */}
                <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                {/* القائمة الجانبية */}
                <aside className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
                    <div className={styles.headSidebar}>
                        <h2>محتويات الدورة</h2>
                        <button className={styles.closeButton} onClick={() => setMenuOpen(!menuOpen)}>
                            <MdOutlineCloseFullscreen />
                        </button>
                    </div>
                    <h2>أساسيات اللغة</h2>

                    <ul>
                        <li onClick={() => handleLessonClick("overview")}
                            className={activeLesson === "overview" ? styles.active : ""}> CSS - نظرة عامة</li>
                        <li onClick={() => handleLessonClick("fonts")}
                            className={activeLesson === "fonts" ? styles.active : ""}> CSS - قواعد كتابة الكود</li>
                        <li onClick={() => handleLessonClick("margins")}>تعريف</li>
                        <li onClick={() => handleLessonClick("borders")}>تابعنا</li>
                    </ul>

                    <h2>أساسيات اللغة</h2>
                    <hr />
                    <ul>
                        <li onClick={() => handleLessonClick("colors")}>🎨 Colors</li>
                        <li onClick={() => handleLessonClick("fonts")}>🔤 Fonts</li>
                        <li onClick={() => handleLessonClick("margins")}>📏 Margins</li>
                        <li onClick={() => handleLessonClick("borders")}>🧱 Borders</li>
                    </ul>

                    <h2>أساسيات اللغة</h2>
                    <hr />
                    <ul>
                        <li onClick={() => handleLessonClick("colors")}>🎨 Colors</li>
                        <li onClick={() => handleLessonClick("fonts")}>🔤 Fonts</li>
                        <li onClick={() => handleLessonClick("margins")}>📏 Margins</li>
                        <li onClick={() => handleLessonClick("borders")}>🧱 Borders</li>
                    </ul>


                    <h2>أساسيات اللغة</h2>
                    <hr />
                    <ul>
                        <li onClick={() => handleLessonClick("colors")}>🎨 Colors</li>
                        <li onClick={() => handleLessonClick("fonts")}>🔤 Fonts</li>
                        <li onClick={() => handleLessonClick("margins")}>📏 Margins</li>
                        <li onClick={() => handleLessonClick("borders")}>🧱 Borders</li>
                    </ul>


                    <h2>أساسيات اللغة</h2>
                    <hr />
                    <ul>
                        <li onClick={() => handleLessonClick("colors")}
                        >🎨 Colors</li>
                        <li onClick={() => handleLessonClick("fonts")}>🔤 Fonts</li>
                        <li onClick={() => handleLessonClick("margins")}>📏 Margins</li>
                        <li onClick={() => handleLessonClick("borders")}>🧱 Borders</li>
                    </ul>
                </aside>

                {/* المحتوى */}
                <main className={styles.lessonContent}>
                    <NavButtons
                        onPrev={handlePrev}
                        onNext={handleNext}
                        disablePrev={currentIndex === 0}
                        disableNext={currentIndex === lessons.length - 1}
                    />
                    {renderLesson()}
                    <NavButtons
                        onPrev={handlePrev}
                        onNext={handleNext}
                        disablePrev={currentIndex === 0}
                        disableNext={currentIndex === lessons.length - 1}
                    />
                </main>
            </div>
        </div>
    );
}
