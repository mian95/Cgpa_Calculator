import React from "react";
import {
  FaUser,
  FaGraduationCap,
  FaCalculator,
  FaChartBar,
  FaHeadset,
} from "react-icons/fa";

const aboutData = [
  {
    id: 1,
    name: "Easy Input",
    icon: <FaUser />, // Represents user input
    description:
      "Students just need to enter their registration number, and the system will automatically fetch their results.",
  },
  {
    id: 2,
    name: "Comprehensive Results",
    icon: <FaGraduationCap />, // Represents academic achievements
    description:
      "Get detailed results, including the student's name, CGPA, GPA for each semester, and improved grades for re-enrolled subjects (D or F grades).",
  },
  {
    id: 3,
    name: "Smart Calculations",
    icon: <FaCalculator />, // Represents calculations
    description:
      "Our system intelligently calculates CGPA by excluding non-credit hour subjects with 'P' grades and adjusts for re-enrolled subjects to replace previous grades.",
  },
  {
    id: 4,
    name: "Flexible Credit Hours",
    icon: <FaChartBar />, // Represents adaptability
    description:
      "The calculator works seamlessly for all credit hour systems, including 1-5 credit hour subjects, adapting to university rule changes for new sessions.",
  },
  {
    id: 5,
    name: "Support for All Students",
    icon: <FaHeadset />, // Represents support
    description:
      "Whether you're checking your CGPA or GPA, our platform ensures accurate and reliable results tailored to your academic record.",
  },
];

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 gap-8 px-4 md:px-8 lg:px-16">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-custom">
        Uniqueness and Features
      </h2>
      <hr className="opacity-35 border-gray-500 dark:border-gray-600 w-[50%] pb-1" />

      {/* Introduction Paragraph */}
      <div className="flex flex-col justify-center items-center text-center">
        <p className="secondary-text font-light opacity-80 md:max-w-[70%] lg:max-w-[50%]">
          Calculating CGPA and GPA manually is tough. You have to track credit
          hours, marks, and quality points, which can get confusing and
          time-consuming. I noticed many students struggle with this, and
          existing tools often have gaps. So, I created a simple tool to help
          University of Agriculture students calculate their CGPA and GPA
          easily.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
        {aboutData.map((item) => {
          return (
            <div
              key={item.id}
              className="relative px-6 py-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-black dark:text-white rounded-full flex items-center justify-center shadow-lg">
                {React.cloneElement(item.icon, { size: 21 })}
              </div>

              {/* Title */}
              <h2 className="font-semibold secondary-text text-xl mt-8 mb-2">{item.name}</h2>

              {/* Divider */}
              <hr className="opacity-35 border-gray-500 dark:border-gray-600 w-full my-2" />

              {/* Description */}
              <p className="font-light secondary-text text-sm opacity-80 text-center">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;