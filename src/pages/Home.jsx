import React from "react";
import Header from "../sections/Header";
import Banner from "../sections/Banner";
import AboutUs from "../sections/Intro";
import OurApproach from "../sections/Learn";
import Contact from "../sections/GetInvolved";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <main className="font-inter text-gray-900 bg-white dark:bg-gray-950 scroll-smooth overflow-x-hidden">
      <Header />
      <Banner />
      <AboutUs />
      <OurApproach />
      <Contact />
      <Footer />
    </main>
  );
}
