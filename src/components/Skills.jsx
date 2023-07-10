import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaGitlab,
  FaLaravel,
} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoSass,
  BiLogoRedux,
} from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className=" my-10">
        <h2 className=" flex justify-center text-4xl  font-semibold">
          My <span className="text-blue-500 ms-2">Skills</span>
        </h2>
        <div className=" grid justify-center items-center align-middle grid-cols-5 grid-rows-3 gap-6 my-5 px-20">
          <FaHtml5 className=" text-9xl mx-auto my-auto icon col-start-1 col-span-1 row-start-1 row-span-1" />
          <FaCss3 className=" text-9xl mx-auto my-auto icon col-start-2 col-span-1 row-start-1 row-span-1" />
          <BiLogoJavascript className=" text-9xl mx-auto my-auto icon col-start-3 col-span-1 row-start-1 row-span-1" />
          <FaBootstrap className=" text-9xl mx-auto my-auto icon col-start-4 col-span-1 row-start-1 row-span-1" />
          <BiLogoSass className=" text-9xl mx-auto my-auto icon col-start-5 col-span-1 row-start-1 row-span-1" />
          <BiLogoTailwindCss className=" text-9xl mx-auto my-auto icon col-start-1 col-span-1 row-start-2 row-span-1" />
          <FaReact className=" text-9xl mx-auto my-auto icon col-start-2 col-span-1 row-start-2 row-span-1" />
          <BiLogoRedux className=" text-9xl mx-auto my-auto icon col-start-3 col-span-1 row-start-2 row-span-1" />
          <BsGithub className=" text-9xl mx-auto my-auto icon col-start-4 col-span-1 row-start-2 row-span-1" />
          <FaGitlab className=" text-9xl mx-auto my-auto icon col-start-5 col-span-1 row-start-2 row-span-1" />
          <FaPhp className=" text-9xl mx-auto my-auto icon col-start-1 col-span-1 row-start-3 row-span-1" />
          <SiMysql className=" text-9xl mx-auto my-auto icon col-start-2 col-span-1 row-start-3 row-span-1" />
          <FaLaravel className=" text-9xl mx-auto my-auto icon col-start-3 col-span-1 row-start-3 row-span-1" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
