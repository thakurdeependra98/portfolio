'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/experience", label: "Experience" },
    { href: "/project", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <nav className="mx-auto max-w-2xl px-10 rounded-full mt-10 border transition-all duration-300 bg-zinc-900 border-zinc-800">
        <ul className="flex h-12 items-center justify-between gap-x-8 font-thin text-base transition-colors duration-300 text-gray-400">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "text-primary" : "hover:text-white transition-colors"}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;