import React from "react";
import StudentInformation from "./partials/StudentInformation";
import TableComponent from "./partials/TableComponent";
import StudentResultSearch from "./StudentSearchResult";
import { useState } from "react";

const Responser = () => {
  const [studentRespone, setStudentResponse] = useState(null);

  return (
    <div className=" rounded-lg  mx-auto flex flex-col items-center  transition-colors duration-500  z-30 px-4">
      <StudentResultSearch setStudentResponse={setStudentResponse} />

      <StudentInformation studentRespone={studentRespone} />
      <TableComponent studentRespone={studentRespone} />
    </div>
  );
};

export default Responser;
