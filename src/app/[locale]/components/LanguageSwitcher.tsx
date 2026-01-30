"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaGlobe } from "react-icons/fa";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  // locale الحالية من الرابط
  const currentLocale = pathname.split("/")[1];

  function toggleLanguage() {
    // اللغة الجديدة
    const newLocale = currentLocale === "en" ? "ar" : "en";

    // تعديل الرابط
    const segments = pathname.split("/");
    segments[1] = newLocale;

    router.push(segments.join("/"));
  }

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
      aria-label="Toggle Language"
    >
      <FaGlobe size={20} />
    </button>
  );
}
