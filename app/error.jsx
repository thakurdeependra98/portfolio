"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.error("Route Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <h2 className="text-2xl font-semibold text-red-600">
        Something went wrong!
      </h2>

      <p className="mt-2 text-gray-600">{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-4 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800"
      >
        Try Again
      </button>
    </div>
  );
}
