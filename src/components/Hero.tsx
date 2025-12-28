import { SEARCH, type searchItems } from "../constants";
import Navbar from "./Navbar";
import { RiArrowDownSLine, RiSearchFill } from "@remixicon/react";
import { useState } from "react";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const itemSearch = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('/src/assets/hero-bg.png')]">
      <Navbar />
      <div className="container">
        <div className="mt-10">
          <h1 className="text-[60px] text-primary font-extrabold text-center md:text-[90px] sm:text-[70px] lg:text-[110px]">
            <span className="block">Explore Our</span>
            <span className="block">Delightful World</span>
          </h1>
        </div>
        <div>
          <section className="mt-10 flex items-center justify-center">
            <ul className="hidden md:flex md:w-fit text-xl bg-white relative items-center justify-center gap-10 border-2 border-secondary px-12 py-3 rounded-full">
              {SEARCH.map((items: searchItems, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2"
                >
                  <li>{items.name}</li>
                  <button
                    onClick={() => itemSearch(index)}
                    className={`transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <RiArrowDownSLine />
                  </button>
                </div>
              ))}
            </ul>
            <ul className="flex-col md:hidden w-full bg-white rounded-[12px] overflow-hidden">
              {SEARCH.map((items: searchItems, index: number) => (
                <div className="text-[18px] flex items-center justify-between px-8 py-6 border-b-2 border-secondary">
                <li key={index}>
                    {items.name}
                </li>
                <button
                    onClick={() => itemSearch(index)}
                    className={`transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <RiArrowDownSLine />
                  </button>
                </div>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
