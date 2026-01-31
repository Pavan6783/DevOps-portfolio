import { useState } from "react"
import TerminalIntro from "./components/TerminalIntro"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="bg-cyber min-h-screen text-white">
      {!loaded && <TerminalIntro onFinish={() => setLoaded(true)} />}

      {loaded && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}
