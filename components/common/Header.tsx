'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/project", label: "Projects" },
    { href: "/experience", label: "Experience" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="mx-auto max-w-2xl px-10 bg-none rounded-full mt-10 border border-zinc-800">
        <ul className="flex h-12 items-center justify-between gap-x-8 text-gray-400 font-thin text-base">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "text-white" : "hover:text-white transition-colors"}
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