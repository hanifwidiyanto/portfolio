import Image from "next/image";
import React, { useState } from "react";
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

  const handleClick = () => {
    const newImage = {
      id: Date.now(),
      image: images[Math.floor(Math.random() * images.length)],
      position: { x: Math.random() * 500, y: Math.random() * 500 },
    };
    setImagesArray([...imagesArray, newImage]);
  };
  const [wasClick, setWasClick] = useState(false);

  return (
    <div className="flex justify-between px-48 w-full h-screen flex-col">
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
            onDragEnd={(event) => handleDragEnd(event, img.id)}
            style={{
              position: "absolute",
              left: img.position.x,
              top: img.position.y,
            }}
          />
        ))}
        <button onClick={handleClick}>Add Image</button>
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
  );
}
