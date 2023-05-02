import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHome, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { BsJournalText } from "react-icons/bs";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [burgerShow, setBurgerShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 120) {
        setBurgerShow(true);
      } else {
        setBurgerShow(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <nav className="min-h-fit lg:px-48 md:px-24 sm:px-12 px-6 py-8 flex items-center w-full justify-between z-50 absolute top-0">
        <div className="" id="logo">
          <Image src="/assets/images/ava.jpg" height={48} width={48} className="rounded-full" priority alt="logo" />
        </div>
        <ul className="md:flex hidden gap-8 font-rubik h-full items-center">
          <li className="cursor-pointer text-gelap hover:text-stone-500 duration-300">
            Home
          </li>
          <a href="#skills">
            <li className="cursor-pointer text-gelap hover:text-stone-500 duration-300">
              Skills
            </li>
          </a>
          <a href="#experience">
            <li className="cursor-pointer text-gelap hover:text-stone-500 duration-300">
              Experience
            </li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer text-gelap hover:text-stone-500 duration-300">
              Contact
            </li>
          </a>
          <Link href="https://blog.hanifwidiyanto.com" target="_blank">
            <li className="text-sm px-4 py-2 rounded-md bg-gelap text-terang hover:bg-terang hover:text-gelap border-[1px] hover:border-gelap box-border duration-300 cursor-pointer">
              Blog
            </li>
          </Link>
        </ul>
        <div className="flex flex-col gap-2 md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
          <span className={`h-[2px] w-6 bg-gelap ${navbarOpen ? 'top-1' : 'top-0'} relative duration-300`}></span>
          <span className={`h-[2px] w-6 bg-gelap ${navbarOpen ? '-top-2' : 'top-0'} relative duration-300`}></span>
        </div>
      </nav>
      {burgerShow &&
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-4 right-4 z-50 md:hidden flex flex-col px-3 py-3 gap-2 rounded-md bg-gelap" onClick={() => setNavbarOpen(!navbarOpen)}>
          <span className={`h-[2px] w-5 bg-terang ${navbarOpen ? 'top-1' : 'top-0'} relative duration-300`}></span>
          <span className={`h-[2px] w-5 bg-terang ${navbarOpen ? '-top-2' : 'top-0'} relative duration-300`}></span>
        </motion.div>
      }
      <div className={`fixed grid z-30 place-content-center duration-300 w-screen h-screen ${navbarOpen ? ' visible bg-gelap opacity-25' : 'bg-terang opacity-0 invisible'}`} onClick={() => setNavbarOpen(!navbarOpen)}>
      </div>
      {navbarOpen &&
        <>
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }} className={` fixed  w-48 h-48  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   flex justify-center items-center  z-40 flex-wrap`} onClick={() => setNavbarOpen(!navbarOpen)}>
            <Link href="#top" className="w-24 bg-gelap flex-col gap-1 hover:bg-terang hover:text-gelap text-terang h-24 rounded-tl-md border-r border-b border-gray-300 flex justify-center items-center">
              <FaHome size={24} />
              <span className="text-xs">home</span>
            </Link>
            <Link href="#skills" className="w-24 bg-gelap flex-col gap-1 hover:bg-terang hover:text-gelap text-terang h-24 rounded-tr-md border-b border-gray-300 flex justify-center items-center">
              <FaTools size={24} />
              <span className="text-xs">skill</span>

            </Link>
            <Link href="#experience" className="w-24 bg-gelap flex-col gap-1 hover:bg-terang hover:text-gelap text-terang h-24 rounded-bl-md border-r border-gray-300 flex justify-center items-center">
              <FaBriefcase size={24} />
              <span className="text-xs">experience</span>

            </Link>
            <Link href="#contact" className="w-24 bg-gelap flex-col gap-1 hover:bg-terang hover:text-gelap text-terang h-24 rounded-br-md flex justify-center items-center">
              <FaEnvelope size={24} />
              <span className="text-xs">contact</span>
            </Link>
          </motion.div>
          <Link href="https://blog.hanifwidiyanto.com" target="_blank">
            <motion.div z-50 initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="fixed bottom-12 cursor-pointer right-12 z-50 bg-terang rounded-lg text-gelap hover:text-terang hover:bg-gelap p-3 text-4xl ">
              <BsJournalText />
            </motion.div>
          </Link>
        </>
      }



    </>
  );
}
