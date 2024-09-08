// App.tsx
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/ui/Navbar";
import { BentoGridDemo } from "./components/ui/bento-demo";

const App: React.FC = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <BentoGridDemo/>
    </div>
  );
};

export default App;
