import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
  { icon: <FaJsSquare className="text-yellow-400" />, label: "JavaScript" },
  { icon: <FaReact className="text-sky-400" />, label: "React.js" },
  { icon: <FaNodeJs className="text-green-600" />, label: "Node.js" },
  { icon: <SiExpress className="text-gray-800" />, label: "Express.js" },
  { icon: <SiMongodb className="text-green-700" />, label: "MongoDB" },
  { icon: <SiMysql className="text-blue-700" />, label: "MySQL" },
  { icon: <FaBootstrap className="text-purple-600" />, label: "Bootstrap" },
  { icon: <SiTailwindcss className="text-sky-500" />, label: "Tailwind CSS" },
  { icon: <FaGitAlt className="text-orange-500" />, label: "Git" },
  { icon: <FaGithub className="text-black" />, label: "GitHub" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative h-[80vh] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580637250481-b78db3e6f84b?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* White overlay with slight blur for softness */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur-sm" /> */}

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* About Text */}
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 leading-snug">
            About Me
          </h2>
          <p className="text-sm md:text-sm text-gray-700 leading-relaxed max-w-xl">
            I am a passionate full-stack developer with a strong grasp of modern web technologies.
            From beautiful interfaces with React and Tailwind CSS to powerful backends with Node.js,
            Express, and MongoDB — I love crafting seamless digital experiences. I enjoy learning,
            building scalable apps, and contributing to the open-source world.
          </p>
        </div>

        {/* Skills */}
        <div className="md:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <div className="text-3xl md:text-4xl mb-2">{skill.icon}</div>
              <p className="text-xs font-extralight text-gray-800">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

