import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <picture className="relative inset-0 h-full w-full">
        <source
          media="(max-width: 768px)"
          srcSet="src/assets/gbs.png"
        />
        <video
          className="relative inset-0 w-full h-full object-cover hidden sm:block"
          src="src/assets/better_gbs.mp4"
          autoPlay
          muted
          playsInline  
        />
        <img
          className="sm:hidden w-full h-full object-cover"
          src="src/assets/gbs.png"
          alt="Hero Background"
        />
      </picture>
    </section>
  );
};

export default Hero;
