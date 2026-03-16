"use client";

import Link from "next/link";

const variants = {
  primary:
    "bg-cyan-800 text-white hover:bg-cyan-700 border-transparent focus:ring-cyan-700 dark:bg-cyan-400 dark:text-gray-900 dark:hover:bg-cyan-300",
  secondary:
    "bg-cyan-100 text-cyan-900 hover:bg-cyan-200 border border-cyan-300 focus:ring-cyan-400 dark:bg-cyan-700 dark:text-white dark:border-cyan-600 dark:hover:bg-cyan-600",
  danger:
    "bg-red-600 text-white hover:bg-red-700 border-transparent focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600",
  success:
    "bg-green-600 text-white hover:bg-green-700 border-transparent focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600",
  warning:
    "bg-yellow-500 text-white hover:bg-yellow-600 border-transparent focus:ring-yellow-400 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500",
  dark: "bg-gray-800 text-white hover:bg-gray-700 border-transparent focus:ring-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300",
  light:
    "bg-white text-gray-700 hover:bg-gray-300 border-gray-300 focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",

  "outline-primary":
    "bg-transparent text-cyan-800 border border-cyan-800 hover:bg-cyan-50 focus:ring-cyan-700 dark:text-cyan-400 dark:border-cyan-400 dark:hover:bg-cyan-700",
  "outline-secondary":
    "bg-transparent text-cyan-900 border border-cyan-300 hover:bg-cyan-50 focus:ring-cyan-400 dark:text-cyan-200 dark:border-cyan-600 dark:hover:bg-cyan-700",
  "outline-danger":
    "bg-transparent text-red-600 border border-red-600 hover:bg-red-50 focus:ring-red-500 dark:text-red-400 dark:border-red-500 dark:hover:bg-red-600",
  "outline-success":
    "bg-transparent text-green-600 border border-green-600 hover:bg-green-50 focus:ring-green-500 dark:text-green-400 dark:border-green-500 dark:hover:bg-green-600",
  "outline-warning":
    "bg-transparent text-yellow-600 border border-yellow-600 hover:bg-yellow-50 focus:ring-yellow-400 dark:text-yellow-400 dark:border-yellow-500 dark:hover:bg-yellow-600",
  "outline-dark":
    "bg-transparent text-gray-800 border border-gray-800 hover:bg-gray-100 focus:ring-gray-700 dark:text-gray-200 dark:border-gray-400 dark:hover:bg-gray-600",
  "outline-light":
    "bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-100 focus:ring-gray-400 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-700",
};

export default function ButtonLink({
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
      className={`flex justify-center items-center px-4 py-2 border rounded-full text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 min-w-30 transition-all ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
