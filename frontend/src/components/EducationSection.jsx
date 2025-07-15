import React, { useEffect } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const higherEducation = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institute: "Dream Institute of Technology",
    year: "2022-25",
  },
  {
    title: "Diploma in Electronics & Tele-Communication",
    institute: "Jnan Chandra Ghosh Polytechnic",
    year: "2018-21",
  },
];

const schooling = [
  {
    title: "Higher Secondary - Science",
    institute: "Bantra MSPC High School",
    year: "2018",
  },
  {
    title: "Secondary - General",
    institute: "Santragachi Kedarnath Institution",
    year: "2016",
  },
];

const internship = {
  company: "Eduskill Training",
  role: "Google Android Developer Virtual Internship",
  duration: "Jan 2025 – June 2025",
  description:
    "Fundamental of android development using Kotlin. Building interactive and scalable UI with Material design, navigation including ViewModel, StateFlow, and responsive UI design. Implementing networking and data persisting with storage like local storage or SQL etc. Advanced features & optimization with WorkManager, Jetpack Compose etc.\n\nAlso I worked as a Full Stack Developer, where I contributed to building real-world web applications. My responsibilities included creating RESTful APIs using Node.js and Express, integrating MongoDB for database operations, and building modern responsive front-ends using React.js and Tailwind CSS.\n\nI collaborated with designers and backend engineers to ensure a seamless UI/UX. Additionally, I was involved in deployment workflows using Git and GitHub, learned version control in a team setting, and followed agile methodology including stand-ups, sprint planning, and code reviews. This internship strengthened my understanding of the full development lifecycle and enhanced my ability to work in a fast-paced tech environment.",
};

const EducationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-slate-100 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">My Educations</h2>
          <p className="text-sm text-gray-600 mt-3">
            My academic foundation across higher education and schooling.
          </p>
        </div>

        {/* Education Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-18 justify-between px-4">
          {/* Higher Education */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-8">Higher Education</h3>
            <div className="space-y-10">
              {higherEducation.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6"
                  data-aos="fade-right"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl shadow-md">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-700">{item.institute}</p>
                    <p className="text-xs text-gray-500">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schooling */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-8">Schooling</h3>
            <div className="space-y-10">
              {schooling.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6"
                  data-aos="fade-left"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl shadow-md">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-700">{item.institute}</p>
                    <p className="text-xs text-gray-500">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Internship Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Internship</h2>
          <div
            className="flex items-start gap-6 max-w-5xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl shadow-md">
                <FaBriefcase />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{internship.role}</h4>
              <p className="text-sm text-gray-700">{internship.company}</p>
              <p className="text-xs text-gray-500">{internship.duration}</p>
              <div className="mt-3 text-xs text-gray-600 leading-relaxed space-y-4 whitespace-pre-line">
                {internship.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;


