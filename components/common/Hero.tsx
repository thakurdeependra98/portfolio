// import React from "react";
// import SplitText from "../ui/SplitText";
// import GradientText from "../ui/GradientText";
// import TextType from "../ui/TextType";

// const Hero = () => {
//   return (
//     <section className="h-screen flex flex-col justify-center items-center text-white text-center px-4">
// <h1 className="text-5xl md:text-7xl font-bold mb-4 mt-32">
//   <span className="text-yellow-400">Hi</span>, I&apos;m{" "}
//   <GradientText
//     colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
//     animationSpeed={8}
//     showBorder={false}
//     className="custom-class"
//   >
//     Deependra Singh
//   </GradientText>
// </h1>
// <div className="text-3xl md:text-5xl font-semibold mb-8">
//   <SplitText
//     text="A Creative Software Developer"
//     splitType="chars"
//     from={{ opacity: 0, y: 20 }}
//     to={{ opacity: 1, y: 0 }}
//     duration={0.1}
//     delay={100}
//     ease="power3.out"
//   />
// </div>
//       <div className="max-w-2xl text-xl md:text-2xl text-semmibold text-gray-300">
//         <TextType
//           text={[
//             "I build beautiful and responsive web applications.",
//             "Focusing on user experience and performance.",
//             "Let's create something amazing together.",
//           ]}
//           typingSpeed={75}
//           pauseDuration={1500}
//           showCursor={true}
//           cursorCharacter="|"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GradientText from "../ui/GradientText";
import SplitText from "../ui/SplitText";

const Hero = () => {
  const workTypes = ["Full-time", "Freelance", "Contract"];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4">
      {/* Profile Photo */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 mt-32">
        <Image
          src="/me.png"
          alt="Deependra Singh"
          fill
          className="rounded-full object-cover border-2 border-white-700 bg-white"
          priority
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-5xl font-bold mb-2">
        <span className="">Hi</span>, I&apos;m{" "}
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={8}
          showBorder={false}
          className="custom-class"
        >
          Deependra Singh
        </GradientText>
      </h1>
      <div className="text-3xl md:text-4xl font-semibold mb-4">
        <SplitText
          text="A Creative Software Developer"
          splitType="chars"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          duration={0.1}
          delay={100}
          ease="power3.out"
        />
      </div>
      {/* Available Badge */}
      {/* <div className="flex items-center gap-2 bg-gray-900/80 border border-gray-700 rounded-full px-4 py-2 mb-6">
        <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-sm font-mono">Available for work!</span>
      </div> */}

      {/* Work Type Pills */}
      {/* <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
        {workTypes.map((type) => (
          <span
            key={type}
            className="px-4 py-1.5 text-sm border border-gray-600 rounded-full text-gray-300 hover:border-gray-400 transition-colors"
          >
            {type}
          </span>
        ))}
        <span className="text-gray-500">·</span>
        <span className="text-gray-400 text-sm">Remote or onsite</span>
      </div> */}

      {/* Description */}
      <p className="text-gray-400 text-base md:text-base max-w-3xl mb-10 leading-relaxed">
        Full-stack developer with 2+ years of experience building scalable web applications 
        with React.js, Next.js, Node.js, and Tailwind CSS. Passionate about clean code and 
        creating seamless user experiences.
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-4">
        <Link
          href="#contact"
          className="flex items-center gap-2 px-6 py-2 bg-transparent border border-gray-600 rounded-full text-white hover:bg-gray-800 transition-colors"
        >
          Get in touch
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
        <Link
          href="#projects"
          className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-medium"
        >
          View projects
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
        <Link
          href="/resume.pdf"
          className="flex items-center gap-2 px-6 py-2 bg-transparent border border-gray-600 rounded-full text-white hover:bg-gray-800 transition-colors"
          target="_blank"
        >
          Download CV
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
        <Link
          href="https://linkedin.com/in/deependra"
          target="_blank"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </Link>
        <Link
          href="https://github.com/deependra"
          target="_blank"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Link>
        <Link
          href="https://instagram.com/deependra"
          target="_blank"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
