import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import EducationSection from "./components/EducationSection"
import Footer from "./components/Footer"
import ProjectSection from "./components/ProjectSection"
import HireMe from "./components/Hireme"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <EducationSection />
      <ProjectSection />
      <HireMe />
      <Footer />
    </>
  )
}

export default App