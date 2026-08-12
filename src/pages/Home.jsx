import React from "react";
import Header from "../sections/Header";
import Banner from "../sections/Banner";
import DataStats from "../sections/DataStats";
import WhyItMatters from "../sections/WhyItMatters";
import OurWork from "../sections/OurWork";
import Where from "../sections/Where";
import Team from "../sections/Team";
import Newsroom from "../sections/Newsroom";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <main className="font-sans text-gray-900 bg-white scroll-smooth overflow-x-hidden">
      <Header />
      <Banner />
      <DataStats />
      <WhyItMatters />
      <OurWork />
      <Where />
      <Team />
      <Newsroom />
      <CTA />
      <Footer />
    </main>
  );
}
