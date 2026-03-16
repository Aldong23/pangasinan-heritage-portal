"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ApplicationLogo from "../ui/ApplicationLogo";
import ButtonLink from "../buttons/ButtonLink";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function GuestNavbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Destinations", href: "/destinations" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-black/90">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Global">

          <div className="flex lg:flex-1">
            <Link href="/" className="transition-transform active:scale-95 md:mr-10">
              <ApplicationLogo className="h-9 w-auto" />
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>

          <div className="hidden md:flex md:gap-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);


              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors
                    ${isActive
                      ? "text-cyan-600 dark:text-cyan-400"
                      : "text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>


          <div className="hidden md:flex md:flex-1 md:justify-end md:gap-x-4">
            <ButtonLink variant="outline-primary" href="/login">Log in</ButtonLink>
            <ButtonLink variant="primary" href="/register">Sign Up</ButtonLink>
          </div>
        </nav>
      </header>

      {/* --- MOBILE OVERLAY MENU --- */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white dark:bg-black shadow-2xl p-6 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between mb-10">
            <ApplicationLogo className="h-8 w-auto" />
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-500">
              <X className="h-8 w-8" />
            </button>
          </div>

          <div className="flex flex-col gap-y-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);


              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold border-b pb-2 transition-colors
                    ${isActive
                      ? "text-cyan-600 dark:text-cyan-400 border-cyan-500"
                      : "text-slate-900 dark:text-white border-slate-50 dark:border-slate-900"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>


          <div className="mt-auto pt-10 grid grid-cols-1 gap-4">
            <ButtonLink variant="outline-primary" href="/login">Log in</ButtonLink>
            <ButtonLink variant="primary" href="/register">Sign Up</ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}