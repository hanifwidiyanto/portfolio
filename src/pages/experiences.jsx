import Image from "next/image";
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
} from "react-icons/si";
import { HiArrowUpRight, HiOutlineCodeBracketSquare } from "react-icons/hi2";
import Link from "next/link";

export default function Experiences() {

  const portfolio = [
    {
      "id": 1,
      "nama":"Klinik Fertilitas Indonesia",
      "img": "/assets/images/pf/klinik-fertilitas-indonesia.png",
      "link": "https://klinikfertilitasindonesia.com",
      "kategori": "Website",
      "techStack": ["html", "css", "js"],
      "github" : ""
    },
    {
      "id": 2,
      "nama":"YHP Foundation",
      "img": "/assets/images/pf/yhp-foundation.png",
      "link": "https://yhpfoundation.com",
      "kategori": "Website",
      "techStack": ["reactJS", "tailiwnd", "express"],
      "github" : ""
    },
    {
      "id": 3,
      "nama":"Nant Entertainment",
      "img": "/assets/images/pf/nant-entertainment.png",
      "link": "https://nantentertainment.com/",
      "kategori": "Website",
      "techStack": ["express", "html", "css"],
      "github" : ""
    },
    {
      "id": 4,
      "nama":"Lingkar Pictures",
      "img": "/assets/images/pf/lingkar-pictures.png",
      "link": "https://lingkarpictures.com/",
      "kategori": "Website",
      "techStack": ["html", "css", "js"],
      "github" : ""
    },
    {
      "id": 5,
      "nama":"Teras Cerdas",
      "img": "/assets/images/pf/tc.png",
      "link": "https://teras-cerdas.id",
      "kategori": "Website",
      "techStack": ["react", "tailiwnd"],
      "github" : ""
    },
    {
      "id": 6,
      "nama":"ACAKATA",
      "img": "/assets/images/pf/acakata.png",
      "link": "https://acakata.app",
      "kategori": "Website",
      "techStack": ["nextJS", "tailiwnd", "express"],
      "github" : ""
    },
    {
      "id": 6,
      "nama":"BOT Twitter by Search Keyword",
      "img": "/assets/images/pf/bot-twt-by-sk.png",
      "link": "https://github.com/hanifwidiyanto/bot-follow-twt-by-search-key",
      "kategori": "Bot Automation",
      "techStack": ["NodeJS", "Puppeteer"],
      "github" : "https://github.com/hanifwidiyanto/bot-follow-twt-by-search-key"
    },
    
  ]

  return (
    <section id="experience" className="mt-24 px-48 h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-rubik-bold ">Experiences</h1>
      <div className="flex w-full pt-8 gap-8 flex-wrap">
        {portfolio.map(e=>(
          <div className="rounded-md relative cursor-pointer" key={e.id}>
          <div className="duration-300">
            <Image
              src={e.img}
              width={235}
              height={160}
              className="rounded-md"
              alt={e.nama}
            />
          </div>
          <div className="duration-300 transition ease-in-out w-full h-full opacity-0 bg-gradient-to-t from-gelap to-transparent hover:opacity-100 absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-end items-end px-8 py-6">
            <div className="flex w-full justify-between h-fit items-center gap-4">
              <div className="flex flex-col">
                <h6 className="text-terang text-xs font-rubik-light">
                  {e.kategori}
                </h6>
                <h4 className="text-terang text-sm font-rubik-semibold">
                  {e.nama}
                </h4>
              </div>
              <Link href={e.link} target="_blank" className="ml-auto cursor-pointer" >
                <HiArrowUpRight className="text-terang " />
              </Link>
              <HiOutlineCodeBracketSquare className="text-terang cursor-pointer" />
            </div>
          </div>
        </div>
        ))}
       
      </div>
    </section>
  );
}
