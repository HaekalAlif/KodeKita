"use client";

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Layanan", href: "#layanan" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "FAQ", href: "#faq" },
  ];

  const services = [
    { name: "Website Portfolio", href: "#layanan" },
    { name: "Website Company Profile", href: "#layanan" },
    { name: "Landing Page", href: "#layanan" },
    { name: "Aplikasi Mobile", href: "#layanan" },
  ];

  const contactLinks = [
    { name: "WhatsApp", href: "https://wa.me/6287817555827", icon: "📱" },
    { name: "Email", href: "mailto:kodekita@email.com", icon: "📧" },
    {
      name: "GitHub",
      href: "https://github.com/HaekalAlif/KodeKita",
      icon: "💻",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden border border-gray-100">
                <Image
                  src="/logo.png"
                  alt="KodeKita Logo"
                  width={48}
                  height={48}
                  className="object-contain p-1"
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
            </div>
            <p className="text-sm text-gray-600 text-center md:text-left leading-relaxed mb-4">
              Solusi pembuatan website dan aplikasi untuk mahasiswa.
              Profesional, cepat, dan harga terjangkau.
            </p>
            {/* Trust Badge */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-sm">
                    ⭐
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-700">
                5.0 • 50+ Mahasiswa
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Navigasi</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#34499e] transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Layanan</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm text-gray-600 hover:text-[#34499e] transition-colors font-medium"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-600 hover:text-[#ed1c23] transition-colors font-medium"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="https://wa.me/6287817555827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ed1c23] text-white text-sm font-semibold rounded-lg hover:bg-[#d11820] hover:shadow-xl transition-all duration-300 shadow-lg mt-6 w-full md:w-auto"
            >
              <span>💬</span>
              <span>Konsultasi Gratis</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © {currentYear}{" "}
              <span className="font-bold text-[#34499e]">KodeKita</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
