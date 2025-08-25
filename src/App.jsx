import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import Projects from "./components/projects/Project"

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);
  return (
    <>
    <Header/>
    <Home data-aos="fade-up" />
    <About data-aos="fade-right"/>
    <Skills data-aos="zoom-in"/>
    <Projects data-aos="flip-left"/>
    <Contact data-aos="fade-up"/>
    <Footer data-aos="fade-in"/>
    </>
  )
}

export default App
