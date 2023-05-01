import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  SiNextdotjs,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiReact,
  SiExpress,
} from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { motion } from 'framer-motion'

const portfolio = [
  {
    "id": 1,
    "nama": "Klinik Fertilitas Indonesia",
    "img": "/assets/images/project/klinik-fertilitas-indonesia.png",
    "link": "https://klinikfertilitasindonesia.com",
    "kategori": "Website",
    "techStack": ["html", "css", "javascript"],
    "github": "",
    "storyID": "Website ini merupakan situs web milik perusahaan Klinik Fertilitas Indonesia yang bergerak dalam bidang penyediaan layanan kesehatan khususnya program fertilitas. Di situs web ini, tersedia informasi mengenai kegiatan yang dilakukan oleh Klinik Fertilitas Indonesia, termasuk artikel, galeri, dan berita terbaru. Harapannya, website ini dapat memfasilitasi pasien yang membutuhkan layanan fertilitas di Indonesia.",
    "storyEN": "This website is owned by the company Klinik Fertilitas Indonesia, which specializes in providing healthcare services, particularly fertility programs. The website provides information on the activities carried out by Klinik Fertilitas Indonesia in the form of articles, galleries, and news. It is hoped that this website can facilitate patients who require fertility services in Indonesia."
  },
  {
    "id": 2,
    "nama": "YHP Foundation",
    "img": "/assets/images/project/yhp-foundation.png",
    "link": "https://yhpfoundation.com",
    "kategori": "Website",
    "techStack": ["reactJS", "tailiwnd", "express"],
    "github": "",
    "storyID": "Website ini merupakan situs web milik Yayasan Kemanusiaan YHP Foundation yang didirikan oleh Pak Yuli. Yayasan ini membantu para pasien yang membutuhkan pengobatan alternatif yang difasilitasi langsung oleh Pak Yuli. Selain itu, Yayasan ini juga menyediakan beasiswa bagi masyarakat kurang mampu. Di website ini, terdapat informasi mengenai seluruh rangkuman kegiatan YHP Foundation selama menjalani praktik di masyarakat.",
    "storyEN": "This website is owned by YHP Foundation, a humanitarian organization founded by Mr. Yuli. The foundation provides assistance to patients in need of alternative treatments facilitated directly by Mr. Yuli. Additionally, the foundation also offers scholarships for underprivileged communities. The website contains information on all the summaries of YHP Foundation's activities during its practice in the community."
  },
  {
    "id": 3,
    "nama": "Nant Entertainment",
    "img": "/assets/images/project/nant-entertainment.png",
    "link": "https://nantentertainment.com/",
    "kategori": "Website",
    "techStack": ["express", "html", "css"],
    "github": "",
    "storyID": "Website ini merupakan situs web milik Yayasan Kemanusiaan YHP Foundation yang didirikan oleh Pak Yuli. Yayasan ini membantu para pasien yang membutuhkan pengobatan alternatif yang difasilitasi langsung oleh Pak Yuli. Selain itu, Yayasan ini juga menyediakan beasiswa bagi masyarakat kurang mampu. Di website ini, terdapat informasi mengenai seluruh rangkuman kegiatan YHP Foundation selama menjalani praktik di masyarakat.",
    "storyEN": "This website is owned by YHP Foundation, a humanitarian organization founded by Mr. Yuli. The foundation provides assistance to patients in need of alternative treatments facilitated directly by Mr. Yuli. Additionally, the foundation also offers scholarships for underprivileged communities. The website contains information on all the summaries of YHP Foundation's activities during its practice in the community."
  },
  {
    "id": 4,
    "nama": "Lingkar Pictures",
    "img": "/assets/images/project/lingkar-pictures.png",
    "link": "https://lingkarpictures.com/",
    "kategori": "Website",
    "techStack": ["html", "css", "js"],
    "github": "",
    "storyID": "Website ini merupakan situs web milik Yayasan Kemanusiaan YHP Foundation yang didirikan oleh Pak Yuli. Yayasan ini membantu para pasien yang membutuhkan pengobatan alternatif yang difasilitasi langsung oleh Pak Yuli. Selain itu, Yayasan ini juga menyediakan beasiswa bagi masyarakat kurang mampu. Di website ini, terdapat informasi mengenai seluruh rangkuman kegiatan YHP Foundation selama menjalani praktik di masyarakat.",
    "storyEN": "This website is owned by YHP Foundation, a humanitarian organization founded by Mr. Yuli. The foundation provides assistance to patients in need of alternative treatments facilitated directly by Mr. Yuli. Additionally, the foundation also offers scholarships for underprivileged communities. The website contains information on all the summaries of YHP Foundation's activities during its practice in the community."
  },
  {
    "id": 5,
    "nama": "Teras Cerdas",
    "img": "/assets/images/project/tc.png",
    "link": "https://terascerdas.id",
    "kategori": "Website",
    "techStack": ["react", "tailiwnd"],
    "github": "",
    "storyID": "Website ini merupakan situs web milik Yayasan Kemanusiaan YHP Foundation yang didirikan oleh Pak Yuli. Yayasan ini membantu para pasien yang membutuhkan pengobatan alternatif yang difasilitasi langsung oleh Pak Yuli. Selain itu, Yayasan ini juga menyediakan beasiswa bagi masyarakat kurang mampu. Di website ini, terdapat informasi mengenai seluruh rangkuman kegiatan YHP Foundation selama menjalani praktik di masyarakat.",
    "storyEN": "This website is owned by YHP Foundation, a humanitarian organization founded by Mr. Yuli. The foundation provides assistance to patients in need of alternative treatments facilitated directly by Mr. Yuli. Additionally, the foundation also offers scholarships for underprivileged communities. The website contains information on all the summaries of YHP Foundation's activities during its practice in the community."
  },
  {
    "id": 6,
    "nama": "ACAKATA",
    "img": "/assets/images/project/acakata.png",
    "link": "https://acakata.app",
    "kategori": "Website",
    "techStack": ["nextjs", "tailiwnd", "express"],
    "github": "",
    "storyID": "Website ini merupakan situs web milik Yayasan Kemanusiaan YHP Foundation yang didirikan oleh Pak Yuli. Yayasan ini membantu para pasien yang membutuhkan pengobatan alternatif yang difasilitasi langsung oleh Pak Yuli. Selain itu, Yayasan ini juga menyediakan beasiswa bagi masyarakat kurang mampu. Di website ini, terdapat informasi mengenai seluruh rangkuman kegiatan YHP Foundation selama menjalani praktik di masyarakat.",
    "storyEN": "This website is owned by YHP Foundation, a humanitarian organization founded by Mr. Yuli. The foundation provides assistance to patients in need of alternative treatments facilitated directly by Mr. Yuli. Additionally, the foundation also offers scholarships for underprivileged communities. The website contains information on all the summaries of YHP Foundation's activities during its practice in the community."
  },
  {
    "id": 7,
    "nama": "BOT Twitter by Search Keyword",
    "img": "/assets/images/project/bot-twt-by-sk.png",
    "link": "",
    "kategori": "Bot Automation",
    "techStack": ["NodeJS", "Puppeteer"],
    "github": "https://github.com/hanifwidiyanto/bot-follow-twt-by-search-key",
    "storyID": "Website ini merupakan situs web milik Yayasan Kemanusiaan YHP Foundation yang didirikan oleh Pak Yuli. Yayasan ini membantu para pasien yang membutuhkan pengobatan alternatif yang difasilitasi langsung oleh Pak Yuli. Selain itu, Yayasan ini juga menyediakan beasiswa bagi masyarakat kurang mampu. Di website ini, terdapat informasi mengenai seluruh rangkuman kegiatan YHP Foundation selama menjalani praktik di masyarakat.",
    "storyEN": "This website is owned by YHP Foundation, a humanitarian organization founded by Mr. Yuli. The foundation provides assistance to patients in need of alternative treatments facilitated directly by Mr. Yuli. Additionally, the foundation also offers scholarships for underprivileged communities. The website contains information on all the summaries of YHP Foundation's activities during its practice in the community."
  },

]
export default function Experiences() {

  const [project, setProject] = useState({})
  const [isScroll, setIsScroll] = useState(false)
  const checkTechStack = (icon) => {
    switch (icon) {
      case "html":
        return <SiHtml5 className=" lg:text-4xl md:text-3xl text-2xl" />;
      case "css":
        return <SiCss3 className=" lg:text-4xl md:text-3xl text-2xl" />;
      case "javascript":
        return <SiJavascript className=" lg:text-4xl md:text-3xl text-2xl" />;
      case "reactJS":
        return <SiReact className=" lg:text-4xl md:text-3xl text-2xl" />;
      case "tailwind":
        return <SiTailwindcss className=" lg:text-4xl md:text-3xl text-2xl" />;
      case "nextjs":
        return <SiNextdotjs className=" lg:text-4xl md:text-3xl text-2xl" />;
      case "express":
        return <SiExpress className=" lg:text-4xl md:text-3xl text-2xl" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (Object.keys(project).length > 0) {
      const modalProject = document.getElementById('modalProject')

      const checkScroll = () => {
        const scrollY = modalProject.scrollTop;
        if (scrollY > 80) {
          setIsScroll(true)
        } else {
          setIsScroll(false)
        }
      }

      modalProject.addEventListener('scroll', checkScroll)

      return () => {
        modalProject.removeEventListener('scroll', checkScroll)
      }
    }
  }, [project])

  return (
    <>
      <section id="experience" className="mt-24 lg:px-48 md:px-24 sm:px-12 px-6 h-fit flex flex-col justify-center">
        <h1 className="md:text-4xl text-2xl font-rubik-bold">Experiences</h1>
        <div className="flex w-full pt-8 flex-wrap lg:gap-8 md:gap-6 gap-4">
          {portfolio.map((e, i) => (
            <div className="rounded-md relative group cursor-pointer lg:w-[320px] md:w-[280px] w-full " key={e.id}>
              <div className="duration-300">
                <Image
                  src={e.img}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto rounded-md"
                  alt={e.nama}
                  priority
                />
              </div>
              <div className="duration-300 transition ease-in-out w-full h-full opacity-0 bg-gradient-to-t from-gelap to-transparent group-hover:opacity-100 absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-end items-end px-8 py-6 z-20" onClick={() => setProject(portfolio[i])}>
              </div>
              <div className="duration-300 transition ease-in-out  w-full h-1/4 opacity-0  group-hover:opacity-100 absolute text-xl text-white bottom-0 left-1/2 -translate-x-1/2  flex justify-end items-end px-8 py-6 z-30">
                <div className="flex w-full justify-between h-fit items-center gap-4">
                  <div className="flex flex-col">
                    <h6 className="text-terang text-xs font-rubik-light">
                      {e.kategori}
                    </h6>
                    <h4 className="text-terang text-sm font-rubik-semibold">
                      {e.nama}
                    </h4>
                  </div>
                  {e.link.length > 0
                    &&
                    <Link href={e.link} target="_blank" className="ml-auto cursor-pointer" onClick={() => console.log('ok')} >
                      <HiArrowUpRight className="text-terang " />
                    </Link>
                  }
                  {e.github.length > 0
                    &&
                    <Link href={e.github} target="_blank" className="ml-auto cursor-pointer" onClick={() => console.log('ok')}>
                      <BsCodeSlash className="text-terang cursor-pointer" />
                    </Link>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {Object.keys(project).length > 0 &&
        <>
          <div className="fixed h-[50vh] w-screen top-0 z-50 bg-gelap opacity-30 ">
          </div>
          <motion.div
          initial={{y:200}}
          animate={{y:0}}
          transition={{duration: 0.5}}
          className="fixed lg:h-[95vh] md:h-[90vh] h-[85vh]  z-50 bottom-0 rounded-t-3xl w-full bg-terang">
            {isScroll &&
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-12 z-40 flex w-full justify-center items-center lg:gap-8 md:gap-4 gap-2">
                <div className="flex p-4 drop-shadow-lg divide-x-[1px] divide-gelap w-fit">
                  <div className="bg-terang md:h-8 h-6 rounded-bl-md rounded-tl-md md:w-12 w-10 grid place-content-center hover:bg-gelap text-gelap hover:text-terang duration-200 cursor-pointer md:text-md text-xs">ID</div>
                  <div className="bg-terang md:h-8 h-6 rounded-br-md rounded-tr-md md:w-12 w-10 grid place-content-center hover:bg-gelap text-gelap hover:text-terang duration-200 cursor-pointer md:text-md text-xs">EN</div>
                </div>
                <div className="flex gap-3 md:h-16 h-20 bg-gelap  justify-around lg:px-6 md:px-4 px-2 py-4 items-center rounded-lg drop-shadow-lg">
                  <div className="md:text-lg text-sm md:px-3 px-2 flex gap-2 h-fit items-center py-2 border-[1px] rounded-lg border-slate-500 text-terang hover:bg-terang hover:text-gelap duration-200 cursor-pointer">
                    <span>Visit Website</span>
                    <FiExternalLink />
                  </div>
                  <div className="md:text-lg text-sm md:px-3 px-2 py-2 border-[1px] rounded-lg border-slate-500 text-terang hover:bg-terang hover:text-gelap duration-200 cursor-pointer flex h-fit gap-2 items-center">
                    <span>Check Source Code</span>
                    <BsCodeSlash />
                  </div>
                </div>
                <div></div>
              </motion.div>}
            <div className="absolute top-0 md:h-20 h-16 w-full bg-gelap rounded-t-3xl flex items-center justify-end px-8 gap-6">
              <div className="cursor-pointer duration-100 p-2 hover:bg-terang hover:bg-opacity-30 rounded-xl" onClick={() => setProject({})} >
                <div className="w-6 h-1 bg-terang"></div>
              </div>
            </div>
            <div className="absolute bottom-0 md:h-20 h-12 w-full bg-gradient-to-t from-gelap to-transparent"></div>
            <div className="lg:pt-36 md:pt-32 pt-24 lg:pb-48 md:pb-40 pb-36 w-full px-8 h-full overflow-y-scroll" id="modalProject">
              <div className="flex flex-col gap-3 my-6">
                <h2 className="text-center md:text-md text-sm">{project.kategori}</h2>
                <h1 className="text-center lg:text-8xl md:text-6xl text-4xl font-rubik-bold text-gelap">{project.nama}</h1>
              </div>
              <div className="flex gap-4 w-full justify-center mb-12">
                {project.techStack.map(e => (
                  <div key={e}>
                    {checkTechStack(e)}
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-center">
                <Image src={project.img} width={1200} className="rounded-xl" height={400} alt="" loading="lazy" />
              </div>
              <div className="lg:mt-24 md:mt-20 mt-16 flex w-full items-center h-fit justify-between">
                <h3 className="text-slate-700 font-rubik-semibold lg:text-4xl md:text-3xl text-2xl">
                  Story about this project
                </h3>
              </div>
              <div className="md:text-xl text-md lg:mt-12 md:mt-10 mt-8">
                {project.storyID}
              </div>
            </div>
          </motion.div>
        </>
      }
    </>
  );
}
