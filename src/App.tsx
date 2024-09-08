import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/ui/Navbar";
import { BentoGridDemo } from "./components/ui/bento-demo";
import { TimelineDemo } from "./components/ui/timelinedemo";
import Footer from "./components/ui/footer";
import Contact from "./components/ui/contact";

const App: React.FC = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <BentoGridDemo id="upcoming" />
      <TimelineDemo id="about"/>
      <Contact id="contact"/>
      <Footer/>
    </div>
  );
};

export default App;
