"use client";

import { useEffect } from "react";

type ModalItem = {
  title: string;
  category: string;
  period: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

type DetailsModalProps = {
  item: ModalItem | null;
  onClose: () => void;
};

const DetailsModal = ({
  item,
  onClose,
}: DetailsModalProps) => {
  useEffect(() => {
    if (!item) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, item]);

  if (!item) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="details-modal-title"
        className="relative max-h-full w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/15 bg-[#171313] p-6 text-[#fff3ee] shadow-2xl sm:p-9"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-2xl text-[#f7d9cf] transition hover:border-[#ffff00] hover:text-[#ffff00]"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <p className="pr-12 text-xs font-semibold uppercase tracking-[0.3em] text-[#f7d9cf]/70">
          {item.category} / {item.period}
        </p>
        <h2
          id="details-modal-title"
          className="mt-4 max-w-xl text-3xl font-semibold uppercase tracking-tight text-[#ffff00] sm:text-5xl"
        >
          {item.title}
        </h2>
        <p className="mt-6 text-base leading-8 text-[#ffe5dc]">
          {item.description}
        </p>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Technologies
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-sm border border-white/16 px-3 py-2 text-xs text-[#f7d9cf]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-[#ffff00] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#ffff00] transition hover:bg-[#ffff00] hover:text-black"
            >
              Open GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-white/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f7d9cf] transition hover:border-white hover:text-white"
            >
              Visit live site <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default DetailsModal;
