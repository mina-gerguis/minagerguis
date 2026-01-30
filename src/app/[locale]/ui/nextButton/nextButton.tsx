"use client";

import styles from "./nextButton.module.css";

interface Props {
    onNext: () => void;
    onPrev: () => void;
    disableNext: boolean;
    disablePrev: boolean;
}

export default function NavButtons({ onNext, onPrev, disableNext, disablePrev }: Props) {

    const handleNext = () => {
        onNext();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePrev = () => {
        onPrev();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={styles.nexButton}>
            <button onClick={handleNext} disabled={disableNext}>
                الدرس التالي
            </button>

            <button onClick={handlePrev} disabled={disablePrev}>
                الدرس السابق
            </button>
        </div>
    );
}
