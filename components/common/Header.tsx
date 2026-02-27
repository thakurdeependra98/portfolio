import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* <div>Portfolio</div> */}
      <nav className="mx-auto max-w-2xl px-10 bg-none rounded-full mt-10 border border-zinc-800">
        <ul className="flex h-12 items-center justify-between gap-x-8 text-gray-400 font-thin text-base">
          <li >Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;