import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineGrade } from "react-icons/md";

const TableComponent = ({ studentRespone }) => {
  const [visibleTableIndex, setVisibleTableIndex] = useState(null);

  const toggleVisibleTableIndex = (index) => {
    setVisibleTableIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {studentRespone?.result?.length > 0 && (
        <div className="min-w-[290px] max-w-[350px] sm:min-w-[450px] lg:min-w-[525px] transition-colors duration-500 mx-auto">
          {studentRespone.result?.map((result, index) => (
            <motion.div
              key={result.semester || index}
              className="w-full max-w-lg my-4 md:max-w-2xl lg:max-w-3xl p-4 bg-white dark:bg-gradient-to-r from-gray-800 via-gray-900 to-[#0b0514] rounded-md shadow-md border border-gray-200 dark:border-gray-700"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 0.4,
                delay: index * 0.15,
              }}
            >
              {/* Semester Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-md sm:text-xl font-bold text-custom drop-shadow-md">
                 {result.semester}
                </h3>
                <button
                  onClick={() => toggleVisibleTableIndex(index)}
                  className="relative inline-flex items-center justify-center px-4 py-2 border border-gray-700 dark:border-gray-400 rounded-full shadow-sm focus:outline-none  focus:ring-primary transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-500 dark:hover:border-gray-500 cursor-pointer"
                >
                  {/* Text */}
                  <p className="flex items-center gap-1 text-md font-medium secondary-text">
                    GPA:{" "}
                    <span className="font-bold text-custom">{result.Gpa}</span>
                  </p>
                </button>
              </div>

              {/* Animated Table */}
              <AnimatePresence>
                {visibleTableIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden text-xs sm:text-sm md:text-base">
                        {/* Table Header */}
                        <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          <tr>
                            <th
                              scope="col"
                              className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold"
                            >
                              Subject
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold"
                            >
                              Cr.Hr
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold"
                            >
                              Marks
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold"
                            >
                              Grade
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold"
                            >
                              Gr.Pt.
                            </th>
                          </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                          {result.subjects.map((subject) => (
                            <tr
                              key={subject.courseCode}
                              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                            >
                              <td className="px-2 py-2 sm:px-4 sm:py-3 text-gray-800 dark:text-gray-200 font-medium">
                                {subject.courseCode}
                              </td>
                              <td className="px-2 py-2 sm:px-4 sm:py-3 text-gray-800 dark:text-gray-200 text-center">
                                {subject.creditHours}
                              </td>
                              <td className="px-2 py-2 sm:px-4 sm:py-3 text-gray-800 dark:text-gray-200 text-center">
                                {subject.obtainedMarks}
                              </td>
                              <td className="px-2 py-2 sm:px-4 sm:py-3 text-gray-800 dark:text-gray-200 text-center grade-B">
                                {subject.grade}
                              </td>
                              <td className="px-2 py-2 sm:px-4 sm:py-3 text-gray-800 dark:text-gray-200 text-center">
                                {subject.qualityPoints}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default TableComponent;
