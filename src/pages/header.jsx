import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";

const images = [
  "/assets/images/me.png",
  "/assets/images/me.png",
  "/assets/images/me.png",
  "/assets/images/me.png",
  "/assets/images/me.png",
];

export default function Header() {
  const greetings = "I'm";

  const [imagesArray, setImagesArray] = useState([]);

  const handleDragEnd = (event, id) => {
    const index = imagesArray.findIndex((img) => img.id === id);
    const newArray = [...imagesArray];
    newArray[index].position = { x: event.clientX, y: event.clientY };
    setImagesArray(newArray);
  };

  const [screenWidth, setScreenWidth] = useState(null);
  const [screenHeight, setScreenHeight] = useState(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    // cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    const newImage = {
      id: Date.now(),
      image: images[Math.floor(Math.random() * images.length)],
      position: {
        x: Math.random() * screenWidth,
        y: Math.random() * screenHeight,
      },
    };
    setImagesArray([...imagesArray, newImage]);
  };
  const [wasClick, setWasClick] = useState(false);

  return (
    <>
      <div className="justify-between lg:px-48 md:px-24 px-12 w-full h-screen flex-col md:flex hidden">
        <div></div>
        <div className="flex w-full justify-between h-full items-center">
          <div className="flex flex-col gap-2 text-gelap">
            <h1 className="font-rubik lg:text-4xl md:text-3xl text-2xl">
              {greetings}
              <span className="font-rubik-bold"> Hanif Tri Widiyanto</span>
            </h1>
            <p className="font-rubik lg:text-2xl text-xl">
              Fullstack Developer, UI Designer, and student.
            </p>
          </div>

          {imagesArray.map((img) => (
            <Image
              key={img.id}
              src={img.image}
              width={200}
              height={240}
              className="pt-12 saturate-[30%] cursor-pointer hover:saturate-100 rounded-md  duration-300 text-black"
              priority
              alt="profile"
              draggable="true"
              onClick={handleClick}
              onDragEnd={(event) => handleDragEnd(event, img.id)}
              style={{
                position: "absolute",
                left: img.position.x,
                top: img.position.y,
              }}
            />
          ))}
          <div className="relative">
            <Image
              src={images[0]}
              width={200}
              height={220}
              className="pt-12 saturate-[30%] peer cursor-pointer hover:saturate-100 rounded-md  duration-300 text-black"
              priority
              alt="profile"
              draggable="true"
              onClick={handleClick}
            />
            <span className="absolute top-[200px] left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 duration-300 peer-hover:opacity-100 opacity-0 py-2 w-52 text-slate-50 bg-slate-950 rounded-md">
              click to get more of me
            </span>
            <div class="border-solid absolute top-[180px] peer-hover:opacity-100 opacity-0 duration-300 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2  border-b-black border-b-8 border-x-transparent border-x-8 border-t-0"></div>
          </div>
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
          <span className="font-rubik text-lg text-gelap">
            halo@hanifwidiyanto.com
          </span>
        </div>
      </div>
      <div
        className={`flex md:hidden lg:px-48 md:px-24 px-12 h-screen w-full flex-col gap-4 ${imagesArray.length > 0 ? 'justify-between' : 'justify-center'}`}
        onClick={handleClick}
      >
        {imagesArray.length > 0 && <div></div> }
        <div className="flex flex-col gap-2 text-gelap">
          <h1 className="font-rubik text-3xl">
            {greetings}
            <span className="font-rubik-bold"> Hanif Tri Widiyanto</span>
          </h1>
          <p className="font-rubik lg:text-2xl text-xl">
            Fullstack Developer, UI Designer, and student.
          </p>
          <span className="text-sm font-rubik-light text-slate-950">
            (click anywhere to see me)
          </span>
        </div>
        {imagesArray.map((img) => (
          <Image
            key={img.id}
            src={img.image}
            width={100}
            height={120}
            className="pt-12 saturate-[30%] cursor-pointer hover:saturate-100 rounded-md  duration-300 text-black"
            priority
            alt="profile"
            style={{
              position: "absolute",
              left: img.position.x,
              top: img.position.y,
            }}
          />
        ))}
          {imagesArray.length > 0 && <div></div> }
      </div>
    </>
  );
}
