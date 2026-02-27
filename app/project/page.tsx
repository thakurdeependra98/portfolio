import React from "react";
import { Fade } from "react-awesome-reveal";

const Project = () => {
  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Frontend Development",
      description: "Production UIs in React, Next.js, or Vue- third-party and payment integrations included. Built for real traffic and maintained in production.",
      isPopular: false,
      technologies: [
        "React", "Next.js", "TypeScript", "HTML", "CSS", "JavaScript", "Tailwind CSS", 
        "shadcn/ui", "REST APIs"
      ]
    },
    {
      id: 2,
      icon: "🔧",
      title: "Full Stack Development",
      description: "End-to-end apps: MERN, React+Node. Auth, role-based access, and real-time where it matters. Designed to scale without rewrites.",
      isPopular: true,
      technologies: [
        "MERN", "Node.js", "Express", "React", "JWT", 
        "OAuth", "Socket.io", "Role-based UI", "REST APIs"
      ]
    },
    {
      id: 3,
      icon: "🗄️",
      title: "Database & Backend",
      description: "Schemas, queries, and integrations that hold up in production. MongoDB, PostgreSQL- Prisma or native- with real-time when you need it.",
      isPopular: false,
      technologies: [
        "PostgreSQL", "MongoDB", "MySQL", 
        "Firebase", "SQL", "NoSQL", "Real-time", "Prisma", "Mongoose"
      ]
    }
  ];

  return (
    <section className="min-h-screen text-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Fade delay={200} triggerOnce>
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How I can help
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Production systems I&apos;ve shipped and can run for you.
            </p>
          </div>
        </Fade>

        {/* Services Description */}
        <Fade delay={400} triggerOnce>
          <div className="text-center mb-16">
            <p className="text-gray-300 text-base max-w-4xl mx-auto leading-relaxed">
              Best frontend services and full-stack development: Frontend Development, Full Stack, Database & 
              Backend, Performance & Optimization, Architecture, Product UI, and SEO/AEO/GEO. Services 
              provided by Yash Kapure - hire for US and worldwide.
            </p>
          </div>
        </Fade>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Fade key={service.id} delay={600 + index * 200} triggerOnce>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 relative hover:bg-gray-900/70 transition-all duration-300 hover:border-gray-700">
                {/* Popular Badge */}
                {service.isPopular && (
                  <div className="absolute -top-3 left-6 bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-300">
                    MOST REQUESTED
                  </div>
                )}

                {/* Icon */}
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-2xl">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
                    Stack & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2">
                  Discuss this service
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </button>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
