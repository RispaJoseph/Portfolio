import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-gray-700 bg-black/70 px-6 py-4 text-white backdrop-blur-md md:px-16 md:py-6">
      {/* Logo */}
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-2xl font-semibold text-transparent opacity-80 transition-all duration-300 hover:opacity-100 md:text-3xl"
      >
        RISPA
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex gap-8">
          <li>
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Tech
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <ul className="flex gap-5 ml-6">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsLinkedin />
          </li>
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
            <BsGithub />
          </li>
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
            <BsInstagram />
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        {isOpen ? (
          <BiX className="text-3xl cursor-pointer" onClick={menuOpen} />
        ) : (
          <BiMenu className="text-3xl cursor-pointer" onClick={menuOpen} />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-3/4 max-w-sm bg-black/90 p-6 shadow-lg md:hidden">
          <ul className="flex flex-col gap-6">
            <li>
              <a
                href="#home"
                className="block opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="block opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="mt-6 flex gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <BsLinkedin />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
              <BsGithub />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
              <BsInstagram />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
