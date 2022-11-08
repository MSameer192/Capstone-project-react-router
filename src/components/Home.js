import React from "react";
import About from './About';
import DownloadSe from './DownloadSe';
import FAQ from './FAQ';
import Feature from './Feature';
import Features2 from './Features2';
import MainSection from './MainSection';
import PricingSec from './PricingSec';
import Services from './Services';
import Video from './Video';


export default function Home() {
  return (
    <div>
      <MainSection />
      <Services />
      <About />
      <Feature />
      <Video />
      <Features2 />
      <PricingSec />
      <FAQ />
      <DownloadSe />
    </div>
  );
}
