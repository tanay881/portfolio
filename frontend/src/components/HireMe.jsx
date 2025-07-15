import React, { useEffect } from "react";
import { FaHandshake, FaRocket, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HireMe = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Hire Me?</h2>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          I’m a passionate full-stack developer dedicated to crafting efficient,
          scalable, and beautiful web applications. With a strong foundation in modern tech stacks,
          I bring not only technical expertise but also a collaborative mindset and creative
          problem-solving to every team I join.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          <div
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
          >
            <FaRocket className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Driven & Dedicated</h3>
            <p className="text-gray-600 mt-2 text-xs">
              I take ownership of my work, always aim for excellence, and thrive under pressure.
            </p>
          </div>
          <div
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaUsers className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Team Player</h3>
            <p className="text-gray-600 mt-2 text-xs">
              I collaborate seamlessly in teams and believe that shared success leads to greater innovation.
            </p>
          </div>
          <div
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaHandshake className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Reliable & Communicative</h3>
            <p className="text-gray-600 mt-2 text-xs">
              You can count on me to deliver with clarity, consistency, and commitment.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <a
          href="#contact" // Change to your contact section or mail link
          className="inline-block bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Let’s Work Together
        </a>
      </div>
    </section>
  );
};

export default HireMe;
