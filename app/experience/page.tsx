import React from "react";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tryidol Technologies Private Limited, Bhopal, India",
      position: "Software Engineer",
      period: "May 2025 - Present",
      description: "Working as a Software Engineer at Tryidol Technologies Private Limited, a startup based in Bhopal, India. Developed and maintained web applications using various technologies, contributing to the growth and success of the company.",
      technologies: [
        "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Node.js", "Express",
        "TypeScript", "Tailwind CSS", "API Integration", "MERN Stack", "RESTful API", "MySQL"
      ]
    },
    {
      id: 2,
      company: "BestPeers InfoSytem Private Limited, Indore, India",
      position: "Web Developer",
      period: "Jan 2025 - Apr 2025",
      description: "Worked as a Full Stack developer at BestPeers InfoSytem Private Limited, a company based in Indore, India. Created fully functional MERN Stack Web Applications with responsive behavior, smooth touch UI, and API Integration.",
      technologies: [
        "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Node.js", "Express",
        "TypeScript", "Tailwind CSS", "API Integration", "MERN Stack", "RESTful API", "PostgreSQL", "MongoDB"
      ]
    },
    {
      id: 3,
      company: "CRTD Technologies, Bhopal, India",
      position: "Frontend Developer (Intern)",
      period: "Jun 2024 - Jul 2024",
      description: "Developed responsive web applications using React.js and modern frontend technologies. Collaborated with cross-functional teams to deliver high-quality user experiences.",
      technologies: [
        "React.js", "TypeScript", "JavaScript", "HTML", "CSS", 
        "Tailwind CSS", "Redux", "REST APIs"
      ]
    }
  ];

  return (
    <section className="min-h-screen text-white px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Fade delay={200} triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Experience
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional experience that I have accumulated over several years.
            </p>
          </div>
        </Fade>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <Fade key={experience.id} delay={400 + index * 200} triggerOnce>
                <div className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 border-4 border-gray-600 rounded-full flex items-center justify-center relative z-10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-grow">
                    {/* Company & Position */}
                    <div className="mb-4">
                      <h3 className="text-md font-medium text-gray-300 mb-1">
                        {experience.company}
                      </h3>
                      <h2 className="text-xl md:text-xl font-semibold mb-2">
                        {experience.position}
                      </h2>
                      
                      {/* Date Range */}
                      <div className="flex items-center text-gray-400 text-sm mb-4">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                          <line x1="16" x2="16" y1="2" y2="6"/>
                          <line x1="8" x2="8" y1="2" y2="6"/>
                          <line x1="3" x2="21" y1="10" y2="10"/>
                        </svg>
                        {experience.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
