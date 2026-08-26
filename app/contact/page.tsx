"use client";

import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import Button from "../../components/common/Button";

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
            {["in", "x", "ig", "yt", "gh"].map((label) => (
              <div
                key={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-[10px] font-semibold uppercase text-zinc-400"
              >
                {label}
              </div>
            ))}
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
