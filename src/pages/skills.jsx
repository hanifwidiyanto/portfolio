import React, { useEffect, useState } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiFigma,
  SiAdobeillustrator,
  SiAdobeaftereffects,
} from "react-icons/si";

const skills = [
  { id: 1, icon: <SiHtml5 />, label: "HTML5" },
  { id: 2, icon: <SiJavascript />, label: "JavaScript" },
  { id: 3, icon: <SiCss3 />, label: "CSS3" },
  { id: 4, icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { id: 5, icon: <SiReact />, label: "React" },
  { id: 6, icon: <SiNextdotjs />, label: "Next.js" },
  { id: 7, icon: <SiExpress />, label: "Express.js" },
];
const designIcons = [
  { id: 1, icon: <SiFigma />, label: "Figma" },
  { id: 2, icon: <SiAdobeillustrator />, label: "Adobe Illustrator" },
  { id: 3, icon: <SiAdobeaftereffects />, label: "Adobe After Effects" },
];
export default function Skills() {
  const [clientPosition, setClientPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { offsetX, offsetY } = event;
      setClientPosition({ x: offsetX, y: offsetY });
    };
    const g = document.querySelectorAll(".goyang");
    g.forEach((e) => {
      e.addEventListener("mousemove", handleMouseMove);
    });
    // document.addEventListener("mousemove", handleMouseMove);

    return () => {
      g.forEach((e) => {
        e.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  const { x, y } = clientPosition;
  return (
    <section
      id="skills"
      className="mt-24 lg:px-48 md:px-24 sm:px-12 px-6 h-screen flex flex-col justify-center"
    >
      <h1 className="md:text-4xl text-2xl font-rubik-bold ">Skills</h1>
      <div className="md:flex hidden flex-col lg:gap-20 md:gap-16 gap-12 pt-8 divide-y-[1px] divide-gelap">
        <div className="flex w-full justify-between">
          <h2 className="font-rubik text-lg">code</h2>
          <div className="flex flex-wrap lg:text-8xl md:text-6xl lg:gap-24 text-5xl md:gap-16 gap-12">
            {skills.map((e) => (
              <div
                className="w-10 h-10 relative group goyang cursor-none"
                key={e.id}
              >
                {e.icon}
                <div
                  className="absolute w-fit duration-300 opacity-0 group-hover:opacity-100 px-4 py-2 text-xl font-rubik bg-gelap text-terang z-10 "
                  style={{
                    top: y + "px",
                    left: x + "px",
                  }}
                >
                  {e.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-between pt-8">
          <h2 className="font-rubik text-lg">design</h2>
          <div className="flex flex-wrap lg:text-8xl md:text-6xl lg:gap-24 text-5xl md:gap-16 gap-12">
            {designIcons.map((e) => (
              <div
                className="w-10 h-10 relative group goyang cursor-none"
                key={e.id}
              >
                {e.icon}
                <div
                  className="absolute w-fit duration-300 opacity-0 group-hover:opacity-100 px-4 py-2 text-xl font-rubik bg-gelap text-terang z-10"
                  style={{
                    top: y + "px",
                    left: x + "px",
                  }}
                >
                  {e.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divide-y-[1px] divide-gelap flex flex-col gap-8">
        <div className="md:hidden flex flex-row gap-12 flex-wrap gap-y-4 mt-6">
          <div>code</div>
          <div className="flex gap-y-4 flex-col">
            {skills.map((e) => (
              <div key={e.id} className="w-full px-2 flex gap-2">
                <div className="text-3xl">{e.icon}</div>
                <div className="text-xl">{e.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden flex flex-row gap-10 flex-wrap gap-y-4 pt-8">
          <div>design</div>
          <div className="flex gap-y-4 flex-col">
            {designIcons.map((e) => (
              <div key={e.id} className="w-full px-2 flex gap-2">
                <div className="text-3xl">{e.icon}</div>
                <div className="text-xl">{e.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
