const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 flex w-full item-center
    justify-between border-b border-b-gray-700 bg-black/70 
    px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
    
    <a href="#home" className="bg-gradient-to-r from-blue-500 
    to-pink-500 bg-clip-text text-transparent opacity-80
    text-3xl font-semibold transition-all duration-300
    hover:opacity-100">Rispa</a>

    <ul className="hidden md:flex gap-10">

      <a href="#home" className="cursor-pointer opacity-70
      transition-all duration-300 hover:opacity-100">
        <li>Home</li>
      </a>

      <a href="#tech" className="cursor-pointer opacity-70
      transition-all duration-300 hover:opacity-100">
        <li>Tech</li>
      </a>

      <a href="#projects" className="cursor-pointer opacity-70
      transition-all duration-300 hover:opacity-100">
        <li>Projects</li>
      </a>

      <a href="#contact" className="cursor-pointer opacity-70
      transition-all duration-300 hover:opacity-100">
        <li>Contact</li>
      </a>


      <ul className=""></ul>

    </ul>
    </nav>
  )
}

export default Navbar