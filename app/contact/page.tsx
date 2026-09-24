"use client";

import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import Button from "../../components/common/Button";
import Link from "next/link";

type ContactFormState = {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  details: string;
};

const initialFormState: ContactFormState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  subject: "",
  details: "",
};

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Unable to submit contact form.");
      }

      setMessage({
        type: "success",
        text: "Your message has been submitted successfully.",
      });
      setFormData(initialFormState);
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong while submitting the form.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClassName =
    "h-12 w-full border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-200 outline-none transition focus:border-zinc-500";

  return (
    <section className="min-h-screen px-5 pb-16 pt-28 text-zinc-100 md:px-10">
      <div className="mx-auto max-w-4xl text-center mb-14">
        <Slide direction="down" triggerOnce>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-[#fff3ee] sm:text-5xl lg:text-6xl">
            Let&apos;s Work Together
          </h1>
        </Slide>
      </div>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-20 md:grid-cols-[320px_1fr]">
        <aside className="space-y-10 md:pt-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
              Email Address
            </h3>
            <a
              href="mailto:sdeependra1234@gmail.com"
              className="mt-3 inline-block text-xl font-medium text-primary underline decoration-zinc-600 underline-offset-4"
            >
              sdeependra1234@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
              Phone Number
            </h3>
            <a
              href="tel:+611112223333"
              className="mt-3 inline-block text-xl font-semibold text-primary underline decoration-zinc-600 underline-offset-4"
            >
              +91 9340991376
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-300">
              Location
            </h3>
            <p className="mt-3 max-w-xs text-xl font-semibold leading-8 text-primary">
              Bhopal, Madhya Pradesh, India
            </p>
            {/* <p className="mt-1 max-w-xs text-xl font-semibold leading-8 text-primary">
              Indore, Madhya Pradesh, India
            </p> */}
          </div>

          <div className="flex items-center gap-3">
            <Link
          href="https://www.linkedin.com/in/deependra-singh-5b9574244/"
          target="_blank"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </Link>
        <Link
          href="https://github.com/thakurdeependra98"
          target="_blank"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Link>
          </div>
        </aside>

        <main>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-400"
                >
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-400"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-400"
                >
                  Phone Number *
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className={fieldClassName}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-400"
              >
                Subject *
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                className={fieldClassName}
              />
            </div>

            <div>
              <label
                htmlFor="details"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-400"
              >
                Details *
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows={7}
                className="w-full border border-zinc-800 bg-zinc-900 px-3 py-3 text-sm text-zinc-200 outline-none transition focus:border-zinc-500"
              />
            </div>

            {message && (
              <p
                className={
                  message.type === "success"
                    ? "text-sm text-green-400"
                    : "text-sm text-red-400"
                }
              >
                {message.text}
              </p>
            )}

            <Button
              variant="light"
              disabled={isSubmitting}
              
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </main>
      </div>
    </section>
  );
};

export default ContactPage;
