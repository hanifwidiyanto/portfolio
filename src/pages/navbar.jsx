import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="min-h-fit px-48 py-8 flex w-full justify-between z-50 absolute top-0">
      <div className="" id="logo">
        <Image src="/assets/images/logo.png" height={32} width={32} priority />
      </div>
      <ul className="flex gap-8 font-rubik h-full items-center">
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
        <li className="text-sm px-4 py-2 rounded-md bg-terang dark:bg-gelap text-gelap dark:text-terang hover:text-gelap hover:dark:bg-terang border-[1px] hover:border-gelap box-border duration-300 cursor-pointer">
          Blog
        </li>
      </ul>
    </nav>
  );
}
