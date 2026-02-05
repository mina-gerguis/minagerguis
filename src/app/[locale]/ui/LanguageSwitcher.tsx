"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoLanguage } from "react-icons/io5";
import Image from "next/image";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "en"; // fallback لـ en

  function toggleLanguage() {
    const newLocale = currentLocale === "en" ? "ar" : "en";

    const segments = pathname.split("/");
    segments[1] = newLocale;

    router.push(segments.join("/"));
  }

  const flagSrc = currentLocale === "ar" ? "/image/lang/eg.png" : "/image/lang/us.png";
  const flagAlt = currentLocale === "ar" ? "EG" : "EN";

  return (
    <button
      onClick={toggleLanguage}
      aria-label="تبديل اللغة / Switch Language"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "inherit",
        color: "var(--item-color)"
      }}
    >
      <IoLanguage size={20} style={{ margin: "0 5px 0 0" }} />

      <Image
        src={flagSrc}
        width={18}
        height={18}
        alt={flagAlt}
        className="rounded-full object-cover"
      />
    </button>
  );
}