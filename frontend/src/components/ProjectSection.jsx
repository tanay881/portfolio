import React from "react";

const projects = [
  {
    title: "BloodConnect",
    image: "https://images.unsplash.com/photo-1585673551689-74e88de97395?q=80&w=2679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/tanay881/BloodConnect.git",
  },
  {
    title: "E-Commerce Store",
    image: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/tanay881/e-commerce-app.git",
  },
  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1580813464570-f36c6aaa0859?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/tanay881/portfolio.git",
  },
  {
    title: "Wanderlust",
    image: "https://images.unsplash.com/photo-1664227430717-9a62112984cf?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/tanay881/wanderlust.git",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full min-h-[80vh] bg-gradient-to-br from-white via-gray-100 to-slate-200 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            My Projects
          </h2>
          <p className="text-sm text-gray-600 mt-3">
            A selection of projects showcasing my frontend and backend skills.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center">
                <div>
                  <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-md">
                    {project.title}
                  </h3>
                  <button className="mt-2 px-4 py-2 bg-white/80 text-black text-xs font-medium rounded hover:bg-white/90 transition">
                    View Code
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
