import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Input = ({ value, setregNo }) => {
  const [label, setlabel] = useState("");

  const handleInput = (e) => {
    setregNo(e.target.value);
    setlabel(e.target.value);
  };

  return (
    <div className="relative" id="input">
      <input
        placeholder="0000-ag-0000"
        autoComplete="off"
        required
        onChange={handleInput}
        className="block outline-0 w-full text-sm min-h-[40px] md:min-h-[45px] max-h-[50px] px-6 mr-2 md:mr-10 text-slate-800 bg-white dark:bg-gray-800 dark:text-gray-100 rounded-[8px] border border-slate-200 dark:border-slate-700 dark:focus::border-slate-800 appearance-none focus:border-transparent focus:shadow-sm   invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap  md:pr-[48px]"
        id="floating_outlined"
        name="registerNo"
        type="text"
        value={value}
      />
      <label
        className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white data-[disabled]:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        htmlFor="floating_outlined"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
