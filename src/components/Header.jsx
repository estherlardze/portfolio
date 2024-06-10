import React from "react";

const Header = () => {
  return (
    <div className="bg-portfolio bg-fixed bg-cover bg-no-repeat bg-center h-[90vh] w-full">
      <div className="w-full h-[90vh] bg-black/60 ">
        <div className="w-[80%] sm:w-[60%] mx-auto 2xl:w-[1500px] text-white text-center flex h-[90vh] items-center justify-center flex-col">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-6xl text-left sm:text-center leading-[1.6]">
            Transforming Concepts into Seamless User Experiences
          </h1>
          <p className="my-6 text-lg text-gray-300">
            Hi! I'm Esther, a Frontend Developer based in Ghana.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
