import React from "react";

const Header = () => {
  return (
    <div className="bg-portfolio bg-fixed bg-cover bg-no-repeat bg-center h-[90vh] w-full z-0">
      <div className="w-full h-[90vh] bg-black/60 overflow-hidden ">
        <div
          data-aos="zoom-in"
          className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto 2xl:w-[1500px] text-white sm:text-center flex h-[90vh] items-center justify-center flex-col"
        >
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-6xl 2xl:text-[80px] text-left sm:text-center leading-[1.6]">
            Transforming Concepts into Seamless User Experiences
          </h1>
          <p className="my-6 2xl:my-10 text-lg text-gray-300 2xl:text-xl">
            Hi! I'm Esther, a Frontend Developer based in Ghana.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
