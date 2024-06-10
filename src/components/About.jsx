import React from "react";
import ab from "../assets/ab.jpg";

const About = () => {
  return (
    <div className="w-[80%] mx-auto  2xl:w-[1500px] mb-[50px] sm:mb-[100px] flex flex-col md:flex-row justify-center items-center gap-6">
      <div className="">
        <img src={ab} alt="about me" className="w-[300px] h-[300px]" />
      </div>
      <div className="flex-1">
        <p>
          {" "}
          A frontend engineer with over two years of experience creating web
          applications. I am passionate about creating sleek and interactive web
          experiences, and I enjoy combining creativity and functionality to
          offer seamless user interfaces. Let's work together to make your
          digital ideas a reality!
        </p>
        <div>
        <p className="bg-yellow-500 py-1 mt-3 px-4 rounded-lg w-fit text-black font-semibold">
          Hire Me
        </p>
        <a href="../assets/resume.pdf" download>Download cv</a>
        </div>
      </div>
    </div>
  );
};

export default About;
