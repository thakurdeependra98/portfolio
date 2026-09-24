"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Slide } from "react-awesome-reveal";
import DetailsModal from "../../components/common/DetailsModal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    id: 1,
    index: "01",
    eyebrow: "Featured project",
    title: "E-commerce Platform",
    category: "Online shopping platform",
    period: "2026",
    description:
      "A modern e-commerce platform where users can discover products, manage their cart, complete secure payments, and track orders from one streamlined experience. The project includes responsive product browsing, category filtering, authentication, checkout, and order management for a reliable shopping journey.",
    technologies: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express",
      "Supabase",
      "Stripe Payment Gateway",
      "PostgreSQL",
    ],
    previewLabel: "Preview",
    githubUrl: "https://github.com/thakurdeependra98/E-commerce-React-App",
    liveUrl: "https://e-commerce-react-app-sigma.vercel.app/",
    theme: "ecommerce",
  },
  {
    id: 2,
    index: "02",
    eyebrow: "Featured project",
    title: "Recipe App",
    category: "Recipe discovery platform",
    period: "2025",
    description:
      "A friendly recipe app that helps users discover meals, search by ingredients, and find inspiration for every occasion. Features include recipe categories, dietary filters, step-by-step cooking instructions, preparation details, and saved favorites for building a personal kitchen collection.",
    technologies: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Supabase",
      "REST API",
    ],
    previewLabel: "Preview",
    githubUrl: "https://github.com/thakurdeependra98/Recipe-App",
    liveUrl: "https://recipe-app-bay-one.vercel.app/",
    theme: "recipe",
  },
];

const ProjectPreview = ({ project }) => {
  if (project.theme === "ecommerce") {
    return (
      <div className="relative h-64 overflow-hidden rounded-t-[1.4rem] bg-[#f7f8f5] sm:h-72">
        <div className="absolute inset-x-0 top-0 h-14 bg-white/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.12),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(255,214,165,0.34),transparent_22%),linear-gradient(180deg,#ffffff_0%,#f4f7f1_65%,#eef3ea_100%)]" />
        <div className="absolute left-4 top-4 flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          E-commerce
        </div>
        <div className="absolute left-8 top-20 h-24 w-24 rounded-full bg-emerald-400/12 blur-3xl" />
        <div className="absolute right-6 top-10 h-28 w-28 rounded-full bg-amber-200/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(74,144,120,0.12))]" />
        <div className="absolute inset-x-0 bottom-8 px-6">
          <div className="mx-auto flex w-full max-w-[18rem] flex-col items-center gap-4 rounded-[1.7rem] border border-white/70 bg-white/70 px-5 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <h3 className="text-center text-3xl font-semibold leading-tight tracking-tight text-[#2e6b46] sm:text-4xl">
              Shop Better. Live Better.
            </h3>
            <p className="text-center text-[0.68rem] leading-5 text-slate-500 sm:text-sm">
              Discover products you love with a simple, secure checkout.
            </p>
            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-[0.62rem] font-medium text-emerald-700 shadow-sm">
              Browse Products
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-64 overflow-hidden rounded-t-[1.4rem] bg-[#f5f7fb] sm:h-72">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(244,114,182,0.16),transparent_24%),linear-gradient(180deg,#fffdf8_0%,#fff4e8_55%,#f7eadb_100%)]" />
      <div className="absolute left-0 top-0 h-full w-26 border-r border-slate-200/70 bg-white/75 backdrop-blur-sm" />
      <div className="absolute left-4 top-4 h-4 w-24 rounded-full bg-orange-500/80" />
      <div className="absolute left-4 top-12 h-8 w-24 rounded-full bg-orange-500/14" />
      <div className="absolute left-4 top-20 h-28 w-24 rounded-2xl border border-slate-200 bg-white shadow-sm" />
      <div className="absolute left-[7.6rem] right-6 top-4 h-9 rounded-2xl border border-slate-200 bg-white/90 shadow-sm" />
      <div className="absolute left-[9.4rem] top-1/2 flex -translate-y-1/2 flex-col items-center gap-4">
        <div className="rounded-2xl bg-orange-500 px-4 py-3 text-center text-xs font-semibold text-white shadow-lg shadow-orange-500/20">
          What are you cooking?
        </div>
        <div className="w-68 rounded-[1.4rem] border border-slate-200 bg-white/95 px-5 py-5 text-center shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
          <div className="mx-auto mb-3 h-10 w-10 rounded-2xl bg-orange-500/10" />
          <p className="text-sm font-semibold text-orange-600">Recipe App</p>
          <p className="mt-2 text-[0.72rem] leading-5 text-slate-500">
            Find delicious recipes, save favorites, and plan your next meal.
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 left-[9.4rem] right-6 h-9 rounded-2xl border border-slate-200 bg-white shadow-sm" />
    </div>
  );
};

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const hoverHandlersRef = useRef([]);

  useGSAP(
    () => {
      const cards = cardsRef.current.filter(Boolean);

      if (!cards.length) {
        return undefined;
      }

      gsap.set(cards, { opacity: 0, y: 36, scale: 0.98 });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      timeline.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
      );

      timeline.to(
        cards,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.16,
        },
        "<0.05",
      );

      cards.forEach((card, index) => {
        const chips = card.querySelectorAll("[data-chip]");
        const button = card.querySelector("[data-preview-button]");

        const hoverEnter = () => {
          gsap.to(card, { y: -10, duration: 0.35, ease: "power2.out" });
          gsap.to(chips, {
            y: -1,
            duration: 0.18,
            stagger: 0.025,
            ease: "power2.out",
          });
          if (button) {
            gsap.to(button, { x: 4, duration: 0.25, ease: "power2.out" });
          }
        };

        const hoverLeave = () => {
          gsap.to(card, { y: 0, duration: 0.35, ease: "power2.out" });
          gsap.to(chips, {
            y: 0,
            duration: 0.18,
            stagger: 0.025,
            ease: "power2.out",
          });
          if (button) {
            gsap.to(button, { x: 0, duration: 0.25, ease: "power2.out" });
          }
        };

        card.addEventListener("mouseenter", hoverEnter);
        card.addEventListener("mouseleave", hoverLeave);
        hoverHandlersRef.current[index] = { card, hoverEnter, hoverLeave };
      });

      return () => {
        hoverHandlersRef.current.forEach(({ card, hoverEnter, hoverLeave }) => {
          card?.removeEventListener("mouseenter", hoverEnter);
          card?.removeEventListener("mouseleave", hoverLeave);
        });
        hoverHandlersRef.current = [];
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === sectionRef.current) {
            trigger.kill();
          }
        });
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-4 pt-28 text-[#f7d9cf] sm:px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <div className="text-center">
        <div ref={headerRef} className="mb-14 opacity-0">
          <Slide direction="down" triggerOnce>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[#fff3ee] sm:text-5xl lg:text-6xl">
              Projects Overview
            </h1>
          </Slide>
          <p className="mt-5 text-sm leading-7 text-[#f7d9cf]/80 sm:text-base">
            A project overview styled like your reference: strong index and
            title on the left, stack in the middle, and description with the
            call to action on the right.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-white/12 border-y border-white/12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              className="group grid gap-8 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10 lg:py-14"
            >
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <div className="text-[4.5rem] font-semibold leading-none tracking-tight text-white sm:text-[5.5rem] lg:text-[2rem]">
                    {project.index}
                  </div>
                  <h2 className="mt-4 max-w-sm text-3xl font-semibold uppercase tracking-tight text-primary sm:text-4xl lg:text-[2.3rem] lg:leading-[0.95]">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#f7d9cf]/78">
                    {project.category}
                  </p>
                </div>

                <div className="inline-flex w-fit rounded border border-white/18 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f7d9cf]/88">
                  {project.period}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      data-chip
                      className="rounded-sm border border-white/16 bg-transparent px-3 py-2 text-xs text-[#f7d9cf] transition-transform duration-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white">
                  Description
                </p>
                <p className="max-w-xl text-base leading-8 text-[#ffe5dc] sm:text-base">
                  {project.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  data-preview-button
                  className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#f7d9cf] transition-colors hover:text-[#ffff00]"
                >
                  <span>Explore More</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <DetailsModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Project;
