import React from "react";

export default function TableHead({ children, className = "" }) {
  return (
    <th
      className={`px-4 py-2 text-left text-sm font-medium text-gray-700 bg-gray-100 dark:text-gray-200 dark:bg-gray-800 ${className}`}
    >
      {children}
    </th>
  );
}
