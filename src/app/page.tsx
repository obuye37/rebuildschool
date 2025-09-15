'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from "@/components/footer";
import AboutEvent from "./about-event";
import CTA from "./cta";
import Hero from "./hero";
import HowItWorks from "./how-it-works";
import { useEffect } from 'react';


export default function Container() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <AboutEvent />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}
