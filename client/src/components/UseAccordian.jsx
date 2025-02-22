import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./partials/Accordian";

function UseAccordian() {
  return (
    <div className="App px-2 md:p-8 py-10 ">
      <h1 className="text-center font-mono font-bold text-2xl drop-shadow-lg text-green-500 dark:text-orange-500">Questions and Quires</h1>

      <Accordion type="single" collapsible className="font-sans secondary-text">
        <AccordionItem value="item-1" className="dark:border-b-gray-400 ">
          <AccordionTrigger className=" text-md md:text-lg">Is Secure to use this website?</AccordionTrigger>
          <AccordionContent className=" text-sm md:text-sm">Offcourse it is secure to use.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="dark:border-b-gray-400">
          <AccordionTrigger className=" text-md md:text-lg">Is this website and result is offical?</AccordionTrigger>
          <AccordionContent className=" text-sm md:text-md">No, this website is not offical and result is also not offical.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="dark:border-b-gray-400">
          <AccordionTrigger className=" text-md md:text-lg">Is is just for Uaf or other universities also?</AccordionTrigger>
          <AccordionContent className=" text-sm md:text-md">This website only for Uaf because it used the Uaf lms portal resuls.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default UseAccordian;
