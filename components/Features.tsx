import React from "react";

export default function Features() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          { title: "Fast", desc: "Lightning-fast load times with Next.js." },
          { title: "Responsive", desc: "Looks amazing on all screen sizes." },
          { title: "Modern", desc: "Built with Tailwind CSS & TypeScript." }
        ].map((feature, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-gray-900 hover:bg-gray-800 transition"
          >
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
