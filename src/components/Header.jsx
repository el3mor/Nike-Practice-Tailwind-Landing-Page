import { headerLogo } from "../assets/images"
import { navLinks } from "../constants "
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useState, useEffect } from 'react';

import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined' && window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  );

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="absolute z-10 w-full px-4 py-8 top-0">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <img src={headerLogo} alt="header logo" className="h-[20px] w-[90px] md:h-[29px] md:w-[120px]" />
        </div>
        <ul className="flex-1 items-center flex w-full gap-8 max-md:hidden lg:gap-16 justify-center">
          {navLinks.map((link, index) => (
            <li key={index} className="inline-block mx-4">
              <a href={link.href} className="text-slate-gray text-sm hover:text-coral-red dark:text-coral-red dark:hover:text-black  duration-150 transition-colors">{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-4">
          <div onClick={toggleTheme} className="flex cursor-pointer justify-between items-center   rounded-full border-coral-red border-2">
            <MdOutlineLightMode className={` w-6 h-6 my-1 mx-2 ${theme === "light" ? "bg-coral-red" : ""} ${theme === "light" ? "text-white" : "text-coral-red"} duration-300 transition-colors rounded-full p-[2px] `} />
            <MdOutlineDarkMode className={` w-6 h-6 my-1 mx-2 ${theme === "dark" ? "bg-coral-red" : ""} ${theme === "dark" ? "text-white" : "text-coral-red"} duration-300 transition-colors rounded-full p-[2px]`} />
          </div>
          <div className={`relative`}>
            <GiHamburgerMenu onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }} alt="hamburger" className={`hidden h-8 w-8  ${isMenuOpen ? "text-gray-800" : "text-coral-red"} ${isMenuOpen ? "dark:hover:text-white" : "text-coral-red"} max-md:block`} />
            <div className={
              `${isMenuOpen ? "block" : "hidden"}`
            }>
              <ul className="w-40 md:hidden space-y-4 rounded-md border-2 border-coral-red bg-white py-6 dark:bg-gray-800 text-lg text-center absolute top-10 right-4 ">
                {navLinks.map((link, index) => (
                  <li key={index} className="">
                    <a href={link.href} className="text-slate-gray hover:text-coral-red dark:text-coral-red dark:hover:text-black  duration-150 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
