import { useState } from "react";
import { LINKS, type navLinks } from "../constants";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative px-[2rem] md:container flex justify-between items-center py-8">
      <div>
        <h1 className="text-3xl font-extrabold text-primary">Turistoe</h1>
      </div>
      <div className="md:border border-primary rounded-full">
        <ul className="hidden md:flex justify-center items-center">
          {LINKS.map((links: navLinks, index: number) => (
            <a key={index} href={links.link}>
              <li className="px-6 py-2 text-[16px] text-primary transition-all hover:text-secondary hover:bg-white rounded-full hover:scale-105">
                {links.name}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <button
        className="md:hidden text-primary p-3 border-2 border-primary rounded-full"
        onClick={toggleMenu}
      >
        {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-white z-30">
          <ul className="mt-6 flex flex-col items-center gap-6 py-6 z-40">
            {LINKS.map((link: navLinks, index: number) => (
              <a key={index} href={link.link} onClick={() => setIsOpen(false)}>
                <li className="w-56 h-12 flex items-center justify-center text-secondary text-lg font-medium border border-secondary rounded-full hover:bg-secondary hover:text-primary hover:border-primary transition-all hover:scale-105 z-50">
                {link.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
