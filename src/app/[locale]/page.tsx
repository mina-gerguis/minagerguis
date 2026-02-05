// 'use client';

// // import Image from "next/image";
// // import styles from "./page.module.css";
import Navbar from "@/app/[locale]/components/Navbar/Navbar";
import Hero from '@/app/[locale]/home/Hero/Hero';
import About from "@/app/[locale]/home/About/About";
import Skills from "@/app/[locale]/home/skills/Skills";
// import SplashCursor from "@/lib/SplashCursor";
import { WorkSamples } from "@/app/[locale]/home/WorkSamples/WorkSample";
import Certificates from "@/app/[locale]/components/Certificates/Certificates";
import Content from "@/app/[locale]/components/content/content"
import Footer from "@/app/[locale]/components/Footer/Footer"

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default function Home() {

  return (
    <>
      {/* <SplashCursor /> */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkSamples />
      <Certificates />
      <Content />
      <Footer />




     
    </>
  );
}

