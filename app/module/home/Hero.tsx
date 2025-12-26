"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const whatsappUrl =
  "https://wa.me/6287817555827?text=Halo%20KodeKita%2C%20saya%20ingin%20konsultasi%20tentang%20pembuatan%20website%20atau%20aplikasi.";

const Hero: React.FC = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
  };

  return (
    <section
      id="hero"
      className="relative flex items-center min-h-dvh bg-white overflow-hidden pt-32 pb-12"
    >
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-blue-50/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#34499e]/20 rounded-lg w-fit mx-auto lg:mx-0 shadow-sm"
            >
              <div className="w-2 h-2 bg-[#34499e] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#34499e]">
                Konsultasi Gratis untuk Mahasiswa
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Harga <span className="text-[#34499e]">irit</span>,<br />
              tampilan <span className="text-[#ed1c23]">elit</span>.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Bikin website, tugas, atau project aplikasi tanpa ribet. Cocok
              untuk mahasiswa & pelajar yang ingin hasil{" "}
              <span className="font-semibold text-[#34499e]">profesional</span>{" "}
              dengan budget{" "}
              <span className="font-semibold text-[#ed1c23]">bersahabat</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mx-auto lg:mx-0"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#ed1c23] text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-[#d11820] hover:shadow-xl transition-all shadow-lg"
              >
                <img
                  src="https://cdn.simpleicons.org/whatsapp/FFFFFF"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
                <span>Konsultasi Gratis</span>
              </a>
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "#services")}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-[#34499e] text-[#34499e] text-sm sm:text-base font-semibold rounded-lg hover:bg-[#34499e] hover:text-white transition-all shadow-sm"
              >
                Lihat Layanan
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 mx-auto lg:mx-0 w-full max-w-md lg:max-w-none"
            >
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#34499e]">
                  50+
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 mt-1">
                  Project Selesai
                </div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#34499e]">
                  24 Jam
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 mt-1">
                  Response
                </div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ed1c23]">
                  100%
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 mt-1">
                  Kepuasan
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Floating Card 1 - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: -20, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-4 sm:-top-6 right-4 sm:right-8 w-48 sm:w-56 bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 border border-gray-200 z-20"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-[#34499e] to-[#5b7fd8] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                      Website
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#ed1c23] font-bold">
                      Mulai Rp 150K
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex justify-between text-[10px] sm:text-xs text-gray-600">
                    <span className="font-medium">Progress</span>
                    <span className="font-bold text-[#34499e]">100%</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                      className="h-full bg-linear-to-r from-[#34499e] to-[#5b7fd8] rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Main Card - VS Code Style */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative bg-[#1e1e1e] rounded-lg sm:rounded-xl shadow-2xl overflow-hidden border border-[#2d2d30]"
              >
                {/* Title Bar */}
                <div className="bg-[#323233] px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between border-b border-[#2d2d30]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                    </div>
                  </div>
                  <span className="text-[#cccccc] text-xs sm:text-sm font-medium">
                    kodekita.tsx
                  </span>
                  <div className="w-12"></div>
                </div>

                {/* Tab Bar */}
                <div className="bg-[#252526] border-b border-[#2d2d30] px-2 sm:px-3">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#1e1e1e] border-r border-[#2d2d30]">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-[#519aba]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                      </svg>
                      <span className="text-[#cccccc] text-xs sm:text-sm">
                        kodekita.tsx
                      </span>
                    </div>
                  </div>
                </div>

                {/* Code Editor */}
                <div className="bg-[#1e1e1e] p-4 sm:p-6">
                  <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
                    {/* Line 1 */}
                    <div className="flex">
                      <span className="text-[#858585] select-none w-8 text-right mr-4">
                        1
                      </span>
                      <div>
                        <span className="text-[#c586c0]">const</span>
                        <span className="text-[#9cdcfe]"> project</span>
                        <span className="text-[#d4d4d4]"> = </span>
                        <span className="text-[#ce9178]">
                          &quot;website&quot;
                        </span>
                        <span className="text-[#d4d4d4]">;</span>
                      </div>
                    </div>
                    {/* Line 2 */}
                    <div className="flex">
                      <span className="text-[#858585] select-none w-8 text-right mr-4">
                        2
                      </span>
                      <div>
                        <span className="text-[#c586c0]">const</span>
                        <span className="text-[#9cdcfe]"> price</span>
                        <span className="text-[#d4d4d4]"> = </span>
                        <span className="text-[#ce9178]">
                          &quot;terjangkau&quot;
                        </span>
                        <span className="text-[#d4d4d4]">;</span>
                      </div>
                    </div>
                    {/* Line 3 */}
                    <div className="flex">
                      <span className="text-[#858585] select-none w-8 text-right mr-4">
                        3
                      </span>
                      <div>
                        <span className="text-[#c586c0]">const</span>
                        <span className="text-[#9cdcfe]"> quality</span>
                        <span className="text-[#d4d4d4]"> = </span>
                        <span className="text-[#ce9178]">
                          &quot;profesional&quot;
                        </span>
                        <span className="text-[#d4d4d4]">;</span>
                      </div>
                    </div>
                    {/* Line 4 - Empty */}
                    <div className="flex">
                      <span className="text-[#858585] select-none w-8 text-right mr-4">
                        4
                      </span>
                      <div></div>
                    </div>
                    {/* Line 5 */}
                    <div className="flex">
                      <span className="text-[#858585] select-none w-8 text-right mr-4">
                        5
                      </span>
                      <div>
                        <span className="text-[#dcdcaa]">console</span>
                        <span className="text-[#d4d4d4]">.</span>
                        <span className="text-[#dcdcaa]">log</span>
                        <span className="text-[#d4d4d4]">(</span>
                        <span className="text-[#ce9178]">
                          &quot;Build Success!&quot;
                        </span>
                        <span className="text-[#d4d4d4]">);</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="bg-[#007acc] px-4 sm:px-5 py-1.5 sm:py-2 flex items-center justify-between text-white text-[10px] sm:text-xs">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <span>main</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="hidden sm:inline">Ready</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span>TypeScript</span>
                    <span>UTF-8</span>
                    <span className="hidden sm:inline">Ln 5, Col 28</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-4 w-44 sm:w-48 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-200 z-20"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="KodeKita Logo"
                      width={60}
                      height={60}
                      className="object-contain p-1"
                      priority
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-gray-900">
                      KodeKita
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 font-medium">
                      Mahasiswa Friendly
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#34499e]">
                    5.0
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
