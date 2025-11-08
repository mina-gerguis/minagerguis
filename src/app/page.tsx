'use client';

// import Image from "next/image";
// import styles from "./page.module.css";
import Navbar from "@/app/components/Navbar/Navbar";
import BubbleMenu from "@/app/ui/BubbleMenu/BubbleMenu";
import Hero from '@/app/components/Hero/Hero';
import About from "@/app/components/About/About";
import Skills from "@/app/components/skills/Skills";
import SplashCursor from "@/lib/SplashCursor";
import Projects from "@/app/components/Projects/Projects";
import Certificates from "@/app/components/Certificates/Certificates";
import Content from "@/app/components/content/content"
import Footer from "@/app/components/Footer/Footer"


import Courses from "./components/Courses/page";
export default function Home() {
  const items = [
    {
      label: 'home',
      href: '#',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
      label: 'about',
      href: '#about',
      ariaLabel: 'About',
      rotation: 8,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
      label: 'projects',
      href: '#projects',
      ariaLabel: 'Projects',
      rotation: 8,
      hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    },
    {
      label: 'certificates',
      href: '#certificates',
      ariaLabel: 'Certificates',
      rotation: 8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
      label: 'contact',
      href: '#',
      ariaLabel: 'Contact',
      rotation: -8,
      hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    }
  ];
  return (
    <>
      <SplashCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Courses />
      <Content />
      <Footer />




      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}></span>}
        items={items}
        menuAriaLabel="Toggle navigation"
        // menuBg="var(--ios-blue-alpha)"
        // menuContentColor="var(--ios-blue)"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
    </>
  );
}
