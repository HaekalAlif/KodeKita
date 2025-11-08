"use client";

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Layanan", href: "#services" },
    { name: "Portofolio", href: "#portfolio" },
    { name: "FAQ", href: "#contact-faq" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/6287817555827",
      icon: "https://cdn.simpleicons.org/whatsapp/25D366",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/kodekita.id",
      icon: "https://cdn.simpleicons.org/instagram/E4405F",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@kodekita.id",
      icon: "https://cdn.simpleicons.org/tiktok/000000",
    },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Brand Section - Mobile Centered */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
              <div className="relative w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden border border-gray-100">
                <Image
                  src="/logo.png"
                  alt="KodeKita Logo"
                  width={40}
                  height={40}
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-[#34499e] tracking-tight leading-none">
                  KodeKita
                </span>
                <span className="text-[9px] text-gray-500 leading-none font-medium">
                  Harga irit, tampilan elit
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Solusi website & aplikasi untuk mahasiswa & UMKM
            </p>
            {/* Trust Badge */}
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-700">
                5.0 • 20+ Clients
              </span>
            </div>
          </div>

          {/* Quick Links & Services - Mobile: 2 columns side by side */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:grid-cols-2">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">Navigasi</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-sm text-gray-600 hover:text-[#34499e] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Layanan */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">Layanan</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, "#services")}
                    className="text-sm text-gray-600 hover:text-[#34499e] transition-colors"
                  >
                    Landing Page
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, "#services")}
                    className="text-sm text-gray-600 hover:text-[#34499e] transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, "#services")}
                    className="text-sm text-gray-600 hover:text-[#34499e] transition-colors"
                  >
                    Company Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, "#services")}
                    className="text-sm text-gray-600 hover:text-[#34499e] transition-colors"
                  >
                    Custom App
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Social - Mobile: Full width */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-gray-900 mb-3 text-center lg:text-left">
              Hubungi Kami
            </h3>
            {/* Social Links - Horizontal on Mobile */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                  title={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/6287817555827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#ed1c23] text-white text-sm font-semibold rounded-lg hover:bg-[#d11820] hover:shadow-lg transition-all w-full"
            >
              <img
                src="https://cdn.simpleicons.org/whatsapp/FFFFFF"
                alt="WhatsApp"
                className="w-4 h-4"
              />
              <span>Konsultasi Gratis</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar - Compact */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
            <p className="text-center sm:text-left">
              © {currentYear}{" "}
              <span className="font-bold text-[#34499e]">KodeKita</span>. All
              rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, "#hero")}
                className="hover:text-[#34499e] transition-colors"
              >
                Privacy
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, "#hero")}
                className="hover:text-[#34499e] transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
