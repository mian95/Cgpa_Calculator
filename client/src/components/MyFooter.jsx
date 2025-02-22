import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ShakeButton from "./partials/ShakeButton";

const MyFooter = () => {
  return (
    <footer className=" justify-between items-center p-0  shadow-md w-full my-footer flex flex-col  py-4">
      <div className="grid grid-cols-1 font-mono justify-evenly gap-4 my-4 md:grid-cols-3">
        <h3 className="p-5 text-gray-800 text-center dark:text-gray-300   lg:text-1xl md:text-lg sm:text-md text-sm ">
          Built By Muhammad Umair...
          <div className="opacity-50">
            Student of UAF BS.CS Session: 22-26
          </div>
        </h3>
        <div className="hidden md:flex items-center justify-center">
          <hr className="h-12 w-[.75px] bg-gray-500 dark:bg-gray-300 opacity-35 " />
        </div>
        <div className="flex flex-row items-center justify-center  gap-4">
          <ShakeButton
            icon={<FaGithub className="text-gray-900 dark:text-gray-100" />}
            link={"https://github.com/mian95"}
          />
          <ShakeButton
            icon={<FaLinkedin className="text-gray-900 dark:text-gray-100" />}
            link={"https://linkedin.com/in/yourprofile"} // Update with your LinkedIn URL
          />
        </div>
      </div>

      <hr className="opacity-35 border-gray-500 dark:border-gray-600 w-full" />

      <p className=" pt-7 pb-3 text-gray-800 dark:text-gray-300   lg:text-1xl md:text-lg sm:text-md text-sm">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default MyFooter;
