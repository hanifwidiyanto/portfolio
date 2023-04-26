import React from "react";
import {
  SiNextdotjs,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiFigma,
  SiReact,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiExpress
} from "react-icons/si";


export default function Skills() {
  return (
    <section id="skills" className="mt-24 px-48 h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-rubik-bold ">Skills</h1>
      <div className="flex flex-col gap-8 pt-8 divide-y-[1px] divide-gelap">
        <div className="flex w-full justify-between">
          <h2 className="font-rubik text-lg">code</h2>
          <div className="flex flex-wrap text-6xl gap-12">
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiTailwindcss />
            <SiReact />
            <SiNextdotjs />
            <SiExpress />
          </div>
        </div>
        <div className="flex w-full justify-between pt-8">
          <h2 className="font-rubik text-lg">design</h2>
          <div className="flex flex-wrap text-6xl gap-12">
            <SiFigma />
            <SiAdobeillustrator />
            <SiAdobeaftereffects />
          </div>
        </div>
      </div>
    </section>
  );
}
