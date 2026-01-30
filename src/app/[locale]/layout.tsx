// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/lib/ThemeContext";
// import { NextIntlClientProvider } from 'next-intl';

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

// export const metadata: Metadata = {
//     title: "Mina Gerguis",
//     description: "Hello! Software Engineer Portfolio — Mina Gerguis",
// };
// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) 
// {
//     return (
//         <html
//             lang={locale}
//             dir={locale === "ar" ? "rtl" : "ltr"}>
//             <head>
//                 <link
//                     rel="stylesheet"
//                     href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
//                 />
//             </head>
//             <body className={`${geistSans.variable} ${geistMono.variable}`}>
//                 <NextIntlClientProvider>
//                     <ThemeProvider>{children}</ThemeProvider>
//                 </NextIntlClientProvider>
//             </body>
//         </html>
//     );
// }

import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/lib/ThemeContext";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
    title: "Mina Gerguis",
    description: "Hello! Software Engineer Portfolio — Mina Gerguis",
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;   // ← التعديل الرئيسي هنا
}) {
    // مهم: await الـ params أول حاجة
    const { locale } = await params;

    // تحميل الرسائل (getMessages() آمن هنا بعد await params)
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
            </head>

            <body className={locale === "ar" ? "ar-font" : "en-font"}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider>{children}</ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
