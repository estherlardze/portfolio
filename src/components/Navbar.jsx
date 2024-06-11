import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] 2xl:w-[1500px] 2xl:mx-auto overflow-hidden">
      <section className="flex justify-between bg-[#141212] items-center  shadow-md p-5">
        <h1 className="text-2xl font-bold">OE</h1>
        <div className="sm:flex space-x-5 hidden">
          <a
            href="#stack"
            className="hover:text-yellow-500 transition-all duration-300"
          >
            Tech Stack
          </a>
          <a
            href="#projects"
            className="hover:text-yellow-500 transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#hire"
            className="hover:text-yellow-500 transition-all duration-300"
          >
            Contact
          </a>
        </div>

        <div onClick={() => setMenu(!menu)} className="sm:hidden">
          {menu ? (
            <IoMdClose size={22} className="sm:hidden" />
          ) : (
            <IoMdMenu size={22} className="" />
          )}
        </div>
      </section>

      <div className="">
        {menu && (
          <div className="sm:hidden w-full h-screen z-[9999] bg-black/80 text-white flex text-lg gap-4 flex-col justify-center items-center">
            <a
            href="#stack"
            className="hover:text-yellow-500 transition-all duration-300"
            onClick={() => setMenu(false)}
          >
            Tech Stack
          </a>
          <a
            href="#projects"
            className="hover:text-yellow-500 transition-all duration-300"
            onClick={() => setMenu(false)}
          >
            Projects
          </a>
          <a
            href="#hire"
            className="hover:text-yellow-500 transition-all duration-300"
            onClick={() => setMenu(false)}

          >
            Contact
          </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
