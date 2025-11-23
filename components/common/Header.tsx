import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* <div>Portfolio</div> */}
      <nav className="mx-auto max-w-xl px-4">
        <ul className="flex h-28 items-center justify-between gap-x-8 text-white font-thin text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;