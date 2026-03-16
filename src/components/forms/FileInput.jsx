"use client";

import { forwardRef } from "react";

export default forwardRef(function FileInput(
  { className = "", ...props },
  ref,
) {
  return (
    <input
      {...props}
      type="file"
      ref={ref}
      className={`rounded-md border p-1 shadow-sm 
        border-gray-300 text-gray-900 bg-white 
        focus:border-cyan-800 focus:ring-2 focus:ring-cyan-700 
        dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 
        dark:focus:border-cyan-400 dark:focus:ring-cyan-400
        ${className}`}
    />
  );
});
