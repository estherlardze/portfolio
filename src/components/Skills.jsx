import React from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {  RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const skills = [
  {
    name: "HTML",
    logo: FaHtml5,
  },
  {
    name: "CSS",
    logo: FaCss3Alt,
  },

  {
    name: "Javascript",
    logo: IoLogoJavascript,
  },
  {
    name: "React",
    logo: RiReactjsLine,
  },
  {
    name: "Redux",
    logo: TbBrandRedux,
  },
  {
    name: "Typescript",
    logo: SiTypescript,
  },
];
const Skills = () => {
  return (
    <section className="w-[80%] mx-auto my-[200px]  2xl:w-[1500px]">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2 sm:col-span-1">
          <h1 className="font-bold  text-3xl">Technologies</h1>
          <div className="h-1 w-7 bg-yellow-500"></div>
          <p className="mt-4">I have more than 2 years of hands-on experience with these technologies.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 col-span-2 sm:col-span-1">
          {skills.map((skill, index) => (
            <article key={index} className="col-span-2 sm:col-span-1 flex items-center gap-2 text-yellow-500">
               <skill.logo size={34}/>
               <p className="text-lg font-semibold">{skill.name}</p>             
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
