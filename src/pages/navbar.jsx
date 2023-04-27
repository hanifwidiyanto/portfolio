import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="min-h-fit lg:px-48 md:px-24 px-12 py-8 flex w-full justify-between z-50 absolute top-0">
      <div className="" id="logo">
        <Image src="/assets/images/logo.png" height={32} width={32} priority alt="logo" />
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
        <li className="cursor-pointer text-gelap hover:text-stone-500 duration-300">
          Experience
        </li>
        <li className="cursor-pointer text-gelap hover:text-stone-500 duration-300">
          Contact
        </li>
        <li className="text-sm px-4 py-2 rounded-md bg-gelap text-terang hover:bg-terang hover:text-gelap border-[1px] hover:border-gelap box-border duration-300 cursor-pointer">
          Blog
        </li>
      </ul>
      <div className="flex flex-col gap-1 md:hidden">
        <span className="h-[2px] w-6 bg-gelap"></span>
        <span className="h-[2px] w-6 bg-gelap"></span>
      </div>
    </nav>
  );
}
