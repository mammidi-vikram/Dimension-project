import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900">
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
        <span className="text-xl font-bold">Dimension</span>
      </div>
      <nav className="space-x-6">
        <a href="#" className="hover:text-purple-400 transition">Home</a>
        <a href="#" className="hover:text-purple-400 transition">Features</a>
        <a href="#" className="hover:text-purple-400 transition">Contact</a>
      </nav>
    </header>
  );
}
