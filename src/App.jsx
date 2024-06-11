import { useEffect, useRef } from "react";

import { Navbar, Header, Skills, Footer, Projects, About } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-[#110f0f] text-white">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
