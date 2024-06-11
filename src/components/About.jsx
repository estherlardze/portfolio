import React from "react";
import ab from "../assets/ab.jpg";
import resume from '../assets/resume.pdf'

const About = () => {
  const onButtonClick = () => {
      const link = document.createElement("a");
      link.href = resume;
      link.download = "resume.pdf"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    
  };

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto  2xl:w-[1500px] mb-[50px] sm:mb-[100px] flex flex-col md:flex-row justify-center items-center gap-6 overflow-hidden">
      <div className="" data-aos="fade-right">
        <img src={ab} alt="about me" className="w-[300px] h-[300px]" />
      </div>
      <div className="flex-1" data-aos="fade-left">
        <p>
          {" "}
          A frontend engineer with over two years of experience creating web
          applications. I am passionate about creating sleek and interactive web
          experiences, and I enjoy combining creativity and functionality to
          offer seamless user interfaces. Let's work together to make your
          digital ideas a reality!
        </p>
        <div className="flex gap-4">
          <a
            href="#hire"
            className="bg-yellow-500 py-1 mt-3 px-4 rounded-lg w-fit cursor-pointer text-black font-semibold hover:text-white hover:bg-transparent border-2 border-yellow-500 transition-all duration-300"
          >
            Hire Me
          </a>
          <div
            onClick={onButtonClick}
            className="bg-yellow-500 py-1 mt-3 px-4 rounded-lg w-fit text-black font-semibold hover:text-white hover:bg-transparent border-2 cursor-pointer border-yellow-500 transition-all duration-300"
          >
            Download cv
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
