"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-3 bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-300 dark:border-slate-700 transition-all">

      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`relative flex items-center justify-between w-14 h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500
          ${isDark ? 'bg-cyan-900' : 'bg-cyan-100'}`}
        aria-label="Toggle Theme"
      >

        <div
          className={`absolute w-5 h-5 bg-white dark:bg-cyan-400 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center
          ${isDark ? 'translate-x-7' : 'translate-x-0'}`}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-gray-900" />
          ) : (
            <Sun className="w-3 h-3 text-amber-500" />
          )}
        </div>

        <Sun className={`w-4 h-4 ml-1 text-amber-500 transition-opacity ${isDark ? 'opacity-0' : 'opacity-100'}`} />
        <Moon className={`w-4 h-4 mr-1 text-slate-400 transition-opacity ${isDark ? 'opacity-100' : 'opacity-0'}`} />
      </button>

      <span className="hidden sm:block text-xs font-bold uppercase tracking-tighter text-slate-600 dark:text-slate-300">
        {isDark ? "Dark" : "Light"}
      </span>
    </div>
  );
}