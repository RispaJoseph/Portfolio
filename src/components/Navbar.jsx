import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  // 🔹 Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // auto-close mobile menu after click
    }
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-gray-700 bg-black/70 px-6 py-4 text-white backdrop-blur-md md:px-16 md:py-6">
      {/* Logo */}
      <button
        onClick={() => scrollToSection("home")}
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-2xl font-semibold text-transparent opacity-80 transition-all duration-300 hover:opacity-100 md:text-3xl"
      >
        RISPA
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex gap-8">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("tech")}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Tech
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Social Icons */}
        <ul className="flex gap-5 ml-6">
          <li>
            <a
              href="https://linkedin.com/in/rispa-joseph"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RispaJoseph"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/rispajoseph"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100"
            >
              <BsInstagram />
            </a>
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
              <button
                onClick={() => scrollToSection("home")}
                className="block opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("tech")}
                className="block opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Tech
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="block opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="block opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="mt-6 flex gap-5">
            <li>
              <a
                href="https://linkedin.com/in/rispa-joseph"
                target="_blank"
                rel="noopener noreferrer external"
                onClick={() => setIsOpen(false)} // ✅ close menu after click
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RispaJoseph"
                target="_blank"
                rel="noopener noreferrer external"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/rispajoseph"
                target="_blank"
                rel="noopener noreferrer external"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
