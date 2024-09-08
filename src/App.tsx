// App.tsx
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/ui/Navbar";

const App: React.FC = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />

    </div>
  );
};

export default App;
