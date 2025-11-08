"use client";

import styles from "./nextButton.module.css";

interface Props {
    onNext: () => void;
    onPrev: () => void;
    disableNext: boolean;
    disablePrev: boolean;
}

export default function NavButtons({ onNext, onPrev, disableNext, disablePrev }: Props) {
    return (
        <div className={styles.nexButton}>
            <button onClick={onNext} disabled={disableNext}>
                الدرس التالي
            </button>

            <button onClick={onPrev} disabled={disablePrev}>
                الدرس السابق
            </button>
        </div>
    );
}
