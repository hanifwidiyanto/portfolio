import Image from "next/image";
import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillTwitterSquare } from "react-icons/ai";

export default function Header() {
  return (
    <div className="flex justify-between px-48 w-full h-screen flex-col">
      <div></div>
      <div className="flex w-full justify-between h-full items-center">
        <div className="flex flex-col gap-2 text-gelap">
          <h1 className="font-rubik lg:text-4xl md:text-3xl text-2xl">
            I'm,
            <span className="font-rubik-bold"> Hanif Tri Widiyanto</span>
          </h1>
          <p className="font-rubik lg:text-2xl text-xl">
            Fullstack Developer, UI Designer, and student.
          </p>
        </div>
        <Image
          src="/assets/images/me.png"
          width={200}
          height={240}
          className="pt-12 saturate-[30%] cursor-none hover:saturate-100 rounded-md  duration-300"
          priority
        />
      </div>
      <div className="flex w-full justify-between mb-12">
        <ul className="flex gap-4 text-xl">
          <li className="cursor-pointer">
            <AiFillLinkedin />
          </li>
          <li className="cursor-pointer">
            <AiFillGithub />
          </li>
          <li className="cursor-pointer">
            <AiFillInstagram />
          </li>
          <li className="cursor-pointer">
            <AiFillTwitterSquare />
          </li>
        </ul>
        <span className="font-rubik text-lg text-gelap">halo@hanifwidiyanto.com</span>
      </div>
    </div>
  );
}
