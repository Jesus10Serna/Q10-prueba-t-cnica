import React, { useState } from "react";
import Logo from "../../assets/LOGO PROGRAMA PARTNER Q10.png";
import BackgroundImage from "../../assets/ELEMENTO 2.webp";

const navBarLinks = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Nosotros",
    link: "/",
  },
  {
    id: 3,
    title: "Contacto",
    link: "/",
  },
  {
    id: 4,
    title: "Soporte",
    link: "/",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="text-white py-4 px-6 shadow-md"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-center">
        {/* Sección del logo */}
        <div>
          <img
            src={Logo}
            alt="Logo Q10"
            className="w-[120px] hover:opacity-90"
          />
        </div>

        {/* Menu hamburguesa para los telefonos */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Sección de links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black bg-opacity-80 md:static md:w-auto md:block md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
            {navBarLinks.map((link) => (
              <li key={link.id} className="py-2 md:py-0">
                <a
                  href={link.link}
                  className="text-white text-lg hover:text-gray-300 transition-all duration-200"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
