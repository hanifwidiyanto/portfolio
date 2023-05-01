import Skills from "./skills";
import Header from "./header";
import Experiences from "./experiences";
import Contact from "./contact";
import { useEffect, useState } from "react";
import BackToTop from "./backtotop";
import SEO from "./SEO";
export default function Home() {
  const [clientPosition, setClientPosition] = useState({ x: 0, y: 0 });
  const [clientSize, setClientSize] = useState({ w: 24, h: 24 });
  const handleMouseEnter = () => {
    setClientSize({ w: 36, h: 36 })
  };

  const handleMouseLeave = () => {
    setClientSize({ w: 24, h: 24 })
  };
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { pageX, pageY } = event;
      setClientPosition({ x: pageX, y: pageY});
    };
    document.addEventListener("mousemove", handleMouseMove);

    const elements = document.querySelectorAll('.cursor-pointer');
    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.removeEventListener("mousemove", handleMouseMove);
    };

  
  }, []);
  const { x, y } = clientPosition;
  const { w, h } = clientSize;
  return (
    <main>
       <SEO
        title="Hanif T. Widiyanto - Fullstack Developer Portfolio"
        description="Ini adalah portfolio Hanif T. Widiyanto sebagai programmer fullstack yang berpengalaman dan ahli dalam membuat aplikasi web modern dengan teknologi terbaru."
        keywords="Portfolio, Programmer Fullstack, Hanif T. Widiyanto, Aplikasi Web Modern"
        robots="index, follow"
        canonical="https://haniftwidiyanto.com"
        ogImage="https://haniftwidiyanto.com/assets/images/ava.jpg"
        ogTitle="Portfolio Hanif T. Widiyanto"
        ogDescription="Ini adalah portfolio Hanif T. Widiyanto sebagai programmer fullstack yang berpengalaman dan ahli dalam membuat aplikasi web modern dengan teknologi terbaru."
      />
      {/* <div
        id="cursor"
        style={{
          top: y + "px",
          left: x + "px",
          width: w + 'px',
          height: h + 'px',
          transform: 'translate(-50%,-50%)'
        }}
        className="duration-75 z-50 md:visible invisible"></div> */}
      <Header />
      <Skills />
      <Experiences />
      <Contact />
      <BackToTop />
    </main>
  )
}

