"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function SelectInput(
  { className = "", isFocused = false, children, ...props },
  ref,
) {
  const localRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <select
      {...props}
      ref={localRef}
      className={
        "rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-cyan-800 focus:ring-cyan-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-400 " +
        className
      }
    >
      {children}
    </select>
  );
});
