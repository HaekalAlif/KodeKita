"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Layanan", href: "#layanan" },
  { name: "Portofolio", href: "#portofolio" },
  { name: "FAQ", href: "#faq" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* Fixed Header Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar */}
        <div className="bg-[#34499e] text-white py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span>🎓</span>
                <span className="hidden sm:inline font-medium">
                  Konsultasi Gratis untuk Mahasiswa
                </span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:kodekita@email.com"
                className="hover:text-gray-200 transition-colors hidden md:flex items-center gap-1.5 font-medium"
              >
                <span>📧</span>
                <span>kodekita@email.com</span>
              </a>
              <a
                href="https://wa.me/6287817555827"
                className="hover:text-gray-200 transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>📱</span>
                <span className="hidden sm:inline">+62 878-1755-5827</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? "backdrop-blur-xl bg-white/95 shadow-lg"
              : "bg-white border-b border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-18">
              {/* Logo Section */}
              <a href="/" className="flex items-center gap-3 group">
                <div className="relative w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden border border-gray-100">
                  <Image
                    src="/logo.png"
                    alt="KodeKita Logo"
                    width={48}
                    height={48}
                    className="object-contain p-1"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-[#34499e] tracking-tight leading-none">
                    KodeKita
                  </span>
                  <span className="text-[10px] text-gray-500 leading-none font-medium">
                    Harga irit, tampilan elit
                  </span>
                </div>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-semibold text-gray-700 hover:text-[#34499e] transition-colors duration-200 relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#34499e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="https://wa.me/6287817555827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#ed1c23] text-white text-sm font-semibold rounded-lg hover:bg-[#d11820] hover:shadow-xl transition-all duration-300 shadow-lg"
                >
                  <span>💬</span>
                  <span>Konsultasi Gratis</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg text-[#34499e] hover:bg-gray-100 transition-colors"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#34499e] hover:bg-gray-50 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/6287817555827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-[#ed1c23] text-white rounded-lg font-semibold text-base hover:bg-[#d11820] hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <span>💬</span>
                  <span>Konsultasi Gratis</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
