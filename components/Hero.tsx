import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Build the Future
      </h1>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl">
        A modern platform to empower your next project, inspired by dimension.dev.
      </p>
      <a
        href="#"
        className="px-8 py-3 bg-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
      >
        Get Started
      </a>
    </section>
  );
}
