"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextArea(
  { className = "", isFocused = false, rows = 4, ...props },
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
    <textarea
      {...props}
      rows={rows}
      ref={localRef}
      className={
        "rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-cyan-800 focus:ring-cyan-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 " +
        className
      }
    />
  );
});
