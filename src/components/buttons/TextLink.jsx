"use client";

import Link from "next/link";

const variants = {
  primary:
    "text-cyan-800 hover:underline hover:text-cyan-900 dark:text-cyan-400 dark:hover:text-cyan-300",
  secondary:
    "text-cyan-600 hover:underline hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200",
  danger:
    "text-red-600 hover:underline hover:text-red-800 dark:text-red-400 dark:hover:text-red-300",
  success:
    "text-green-600 hover:underline hover:text-green-800 dark:text-green-400 dark:hover:text-green-300",
  warning:
    "text-yellow-600 hover:underline hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300",
  dark: "text-gray-800 hover:underline hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300",
  light:
    "text-gray-600 hover:underline hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300",
};

export default function TextLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const variantClass = variants[variant] || variants.primary;

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 text-sm font-medium transition-all ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
