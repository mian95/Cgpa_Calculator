import React, { useState, useEffect } from "react";
import Switch from "./partials/themeBtn";
import { CiCalculator2 } from "react-icons/ci";

const NavBar = () => {
  // ? Set initial theme state based on localStorage
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark");

  // ? Effect to apply the theme to the HTML tag and update localStorage
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // Re-run when theme state changes

  return (
    <header className="flex w-full bg-gray-50 dark:bg-gradient-to-r from-gray-900 via-gray-800 to-black justify-between items-center p-0 h-12 shadow-md">
      <nav className="left-nav flex sm:text-lg md:text-1xl lg:text-2xl pl-5 gap-x-2.5 items-center">
        <a className="relative w-12 cursor-progress h-12">
          <CiCalculator2 className="h-full w-full text-custom drop-shadow-lg" />
        </a>
      </nav>
      <div className="right-nav flex pr-5">
        <Switch theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};

export default NavBar;
