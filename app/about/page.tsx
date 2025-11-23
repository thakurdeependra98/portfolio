import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about" className="py-28 px-4 text-white">
      <div className="mx-auto max-w-4xl">
        <Slide direction="down" triggerOnce>
          <h2 className="text-4xl font-bold text-center mb-12">
            About Me
          </h2>
        </Slide>

        <Fade duration={2000} triggerOnce>
          <p className="text-lg text-center font-thin mb-16">
            I'm a passionate and results-driven developer with a knack for
            creating dynamic and user-friendly web applications. With a strong
            foundation in modern web technologies, I specialize in turning
            complex problems into elegant, efficient solutions. Here's a bit
            more about my skills and the services I offer.
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Services Section */}
          <Slide triggerOnce>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Services I Offer</h3>
              <ul className="space-y-4 font-thin">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✔</span>
                  <span>Front-End Development with React & Next.js</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✔</span>
                  <span>Full-Stack Application Development</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✔</span>
                  <span>UI/UX Design & Implementation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✔</span>
                  <span>API Integration and Development</span>
                </li>
              </ul>
            </div>
          </Slide>

          {/* Technical Skills Section */}
          <Slide direction="right" triggerOnce>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3 font-thin">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Tailwind CSS",
                  "GraphQL",
                  "PostgreSQL",
                  "Docker",
                  "Git",
                ].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;