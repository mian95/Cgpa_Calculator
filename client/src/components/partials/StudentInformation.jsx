import React from "react";
import { FaIdCardAlt } from "react-icons/fa"; // Changed icon for registration number
import { FaUserGraduate } from "react-icons/fa"; // Changed icon for student name
import { FaAward } from "react-icons/fa"; // Changed icon for CGPA
import { NumberTicker } from "./NumberTicker";

const StudentInformation = ({ studentRespone }) => {
  return (
    <>
      {studentRespone && (
        <div className="mb-8 max-w-lg mx-auto rounded-lg shadow-md p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-shadow duration-300 hover:shadow-lg">
          {/* Heading */}
          <h2 className="text-center text-2xl font-bold text-custom mb-4">
            Student Information
          </h2>
          <hr className="border-gray-300 my-4 dark:border-gray-600 opacity-50" />

          {/* Content */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Registration Number */}
            <div className="flex flex-col items-center space-y-3 group p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
              <div className="w-12 h-12 bg-primary dark:text-white text-gray-800   rounded-full flex items-center justify-center shadow-lg">
                <FaIdCardAlt size={20} />
              </div>
              <p className="font-medium text-sm text-gray-700 dark:text-gray-300">
                Registration No:
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-base font-semibold">
                {studentRespone.regNumber}
              </p>
            </div>

            {/* Name */}
            <div className="flex flex-col items-center space-y-3 group p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
              <div className="w-12 h-12 bg-primary  dark:text-white text-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <FaUserGraduate size={20} />
              </div>
              <p className="font-medium text-sm text-gray-700 dark:text-gray-300">
                Student Name:
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-base font-semibold">
                {studentRespone.name}
              </p>
            </div>

            {/* CGPA */}
            <div className="flex flex-col items-center space-y-3 group p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
              <div className="w-12 h-12 bg-primary  dark:text-white text-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <FaAward size={20} />
              </div>
              <p className="font-medium text-sm text-gray-700 dark:text-gray-300">
                Overall CGPA:
              </p>
              <NumberTicker
                value={studentRespone.Cgpa}
                decimalPlaces={3}
                className="whitespace-pre-wrap flex font-bold tracking-tighter text-gray-800 dark:text-white text-base"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentInformation;