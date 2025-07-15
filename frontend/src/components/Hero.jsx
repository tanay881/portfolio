import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const name = "Tanay Dutta";

  return (
    <section
      id="home"
      className="relative h-[80vh] w-full bg-cover bg-center mt-[20px]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516703197987-c6bff53d2112?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* White overlay for readability */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-80" /> */}

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center ">
        {/* Animated Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-black tracking-normal flex flex-wrap justify-center">
          {name.split("").map((char, index) => (
            <span
              key={index}
              className={`inline-block transform transition duration-500 ease-out opacity-0 translate-x-[0px] animate-[fadeInSlide_1s_ease-out_forwards] `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-2xl font-semibold text-neutral-500 tracking-wide">
          Full Stack Developer
        </p>

        {/* CTA Button */}
        <a
          href="/resume.pdf"
          download
          className="mt-6 px-6 py-3 bg-black text-white text-sm md:text-base font-medium rounded-full shadow hover:bg-neutral-800 transition duration-300"
        >
          Download Resume
        </a>

        {/* Scroll Icon */}
        <div className="mt-10 animate-bounce">
          <ChevronDown size={28} className="text-black opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
