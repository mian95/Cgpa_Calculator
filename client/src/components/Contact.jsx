import React from "react";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import MagicButton from "./partials/MagicButton";

const Contact = () => {
  return (
    <>
      <div className="container justify-evenly items-center my-20 md:my-16 flex flex-col font-Nunito">
        <div className="flex flex-col justify-center items-center py-2 md:py-5">
          <h2 className="font-semibold text-custom text-4xl">Contact Me</h2>
          <h5 className="font-light secondary-text ">Get in Touch</h5>
        </div>
        <hr className="opacity-35 border-gray-500 dark:border-gray-600 w-[50%] pb-4" />

        <div className="flex flex-col secondary-text md:flex-row justify-between gap-y-10 md:gap-x-10">
          <div className="flex flex-col justify-center  items-center py-2  gap-5 md:px-10">
            <h4 className="text-xl font-semibold ">Talk to me</h4>
            <div className="bg-[#f9f9f9] dark:bg-gray-800 dark:border-gray-500 flex flex-col rounded-md md:rounded-lg border py-5 px-10  w-[250px] items-center my-3 justify-center">
              <CiMail className="font-extrabold text-2xl" />
              <h5 className="font-medium">Email</h5>
              <p className="font-light">umairim24@gmail.com</p>
            </div>
            <div className="bg-[#f9f9f9] flex flex-col  dark:bg-gray-800 dark:border-gray-500 rounded-md md:rounded-lg border py-5 px-10 w-[250px] items-center my-3 justify-center">
              <FaWhatsapp className="font-extrabold text-2xl" />
              <h5 className="font-medium">Whatsapp</h5>
              <p className="font-light">+92-309-5330695</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center py-2  gap-5 md:px-10">
            <h4 className="text-xl font-semibold">Write me your message</h4>
            <div className="flex flex-col justify-center items-center">
              <form className="flex flex-col gap-5" action="submit">
                <div className="relative border-0 pt-[10px] ">
                  <label className="absolute mb-1 text-sm dark:bg-gray-800 dark:rounded-md dark:border-gray-500 font-medium bg-white top-0 left-5 text-gray-900 dark:text-gray-300 px-1">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="border rounded-lg border-black dark:bg-gray-800 dark:border-gray-500 px-5 w-[300px] py-2 outline-0"
                  />
                </div>
                <div className="relative border-0 pt-[10px] ">
                  <label className="absolute mb-1 text-sm dark:rounded-md  dark:bg-gray-800 dark:border-gray-500 font-medium bg-white top-0 left-5 text-gray-900 dark:text-gray-300 px-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="border rounded-lg dark:bg-gray-800 dark:border-gray-500 border-black px-5 w-[300px] py-2 outline-0"
                  />
                </div>
                <div className="relative border-0 pt-[10px]">
                  <label className="absolute mb-1 text-sm dark:bg-gray-800 dark:rounded-md dark:border-gray-500 font-medium bg-white top-0 left-5 text-gray-900 dark:text-gray-300 px-1">
                    Message
                  </label>
                  <textarea
                    type="text"
                    required
                    placeholder="Your Message"
                    className="border rounded-lg dark:bg-gray-800 dark:border-gray-500 border-black px-5 w-[300px] py-2 outline-0"
                  />
                </div>
                <div className="my-2">
                  <button className="primary-btn px-5  flex flex-row gap-1">
                    <MagicButton text={"Send Message"} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
