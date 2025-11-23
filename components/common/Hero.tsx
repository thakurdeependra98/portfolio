import React from "react";
import SplitText from "../ui/SplitText";
import GradientText from "../ui/GradientText";
import TextType from "../ui/TextType";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-white text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 mt-32">
        Hi, I&apos;m{" "}
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={8}
          showBorder={false}
          className="custom-class"
        >
          Deependra Singh
        </GradientText>
      </h1>
      <div className="text-3xl md:text-5xl font-semibold mb-8">
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
      <div className="max-w-2xl text-xl md:text-2xl text-semmibold text-gray-300">
        <TextType
          text={[
            "I build beautiful and responsive web applications.",
            "Focusing on user experience and performance.",
            "Let's create something amazing together.",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </section>
  );
};

export default Hero;
