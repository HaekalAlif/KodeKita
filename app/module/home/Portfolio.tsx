"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Portfolio {
  id: number;
  title: string;
  category: string;
  image: string;
  techStack: { name: string; logo: string }[];
  description: string;
  detailedDescription: string;
  features: string[];
  github?: string;
  url?: string;
  accent: string;
}

// Tech Stack with Real Logos from CDN
const getTechLogo = (name: string): string => {
  const techLogos: { [key: string]: string } = {
    Laravel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "React.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Vue.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    Pusher: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pusher.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    Tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    Express:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  };
  return techLogos[name] || "";
};

// Mock API Data - Real Projects
const portfolioData: Portfolio[] = [
  {
    id: 1,
    title: "SecondCycle",
    category: "Web App",
    image: "/portfolio/secondcycle.png",
    techStack: [
      { name: "Laravel", logo: getTechLogo("Laravel") },
      { name: "Next.js", logo: getTechLogo("Next.js") },
      { name: "Pusher", logo: getTechLogo("Pusher") },
    ],
    description:
      "Platform e-commerce untuk jual beli barang bekas dengan fitur negosiasi harga real-time.",
    detailedDescription:
      "Platform e-commerce modern yang memudahkan jual beli barang bekas. Dilengkapi dengan fitur chat real-time untuk negosiasi harga dan sistem pembayaran yang aman terintegrasi dengan Midtrans.",
    features: [
      "Real-time Chat Negotiation",
      "Secure Payment with Midtrans",
      "Product Management System",
      "User Authentication & Profile",
      "Transaction History & Tracking",
    ],
    accent: "blue",
  },
  {
    id: 2,
    title: "SayurBox Clone",
    category: "Web App",
    image: "/portfolio/sayurbox.png",
    techStack: [
      { name: "Laravel", logo: getTechLogo("Laravel") },
      { name: "React.js", logo: getTechLogo("React.js") },
      { name: "MySQL", logo: getTechLogo("MySQL") },
    ],
    description:
      "Clone website SayurBox untuk toko online sayur, bahan pokok, dan perlengkapan rumah tangga.",
    detailedDescription:
      "Aplikasi e-commerce yang menghadirkan pengalaman berbelanja sayur, bahan pokok, dan perlengkapan rumah tangga secara online. Fitur lengkap seperti SayurBox asli dengan sistem keranjang belanja, checkout, dan manajemen pesanan.",
    features: [
      "Product Catalog & Search",
      "Shopping Cart & Checkout",
      "Order Management System",
      "Payment Integration",
      "Delivery Tracking",
    ],
    accent: "red",
  },
  {
    id: 3,
    title: "Absen-In",
    category: "Web App",
    image: "/portfolio/absenin.png",
    techStack: [
      { name: "Laravel", logo: getTechLogo("Laravel") },
      { name: "MySQL", logo: getTechLogo("MySQL") },
    ],
    description:
      "Sistem presensi berbasis web dengan QR code dan Geolocation API untuk validasi lokasi mahasiswa.",
    detailedDescription:
      "Sistem presensi digital yang memudahkan pencatatan kehadiran mahasiswa menggunakan teknologi QR code dan validasi lokasi. Dirancang untuk meningkatkan akurasi dan efisiensi absensi di kampus.",
    features: [
      "QR Code Scanner",
      "Geolocation Validation",
      "Attendance History",
      "Real-time Reporting",
      "Admin Dashboard",
    ],
    accent: "blue",
  },
  {
    id: 4,
    title: "Official Website Emailkomp",
    category: "Landing Page",
    image: "/portfolio/emailkomp.png",
    techStack: [
      { name: "React.js", logo: getTechLogo("React.js") },
      { name: "Laravel", logo: getTechLogo("Laravel") },
    ],
    description:
      "Website resmi Himpunan E-Mailkomp dengan artikel teknologi, info beasiswa, dan profil organisasi.",
    detailedDescription:
      "Website organisasi mahasiswa yang menampilkan profil, artikel teknologi terkini, informasi beasiswa dan kompetisi. Dilengkapi dengan CMS menggunakan Filament untuk pengelolaan konten yang mudah dan dinamis.",
    features: [
      "Organization Profile",
      "Tech Articles & News",
      "Scholarship & Competition Info",
      "Content Management System",
      "Responsive Design",
    ],
    url: "https://emailkomp.com",
    accent: "red",
  },
  {
    id: 5,
    title: "LittleFairyFlorist",
    category: "Landing Page",
    image: "/portfolio/littlefairyflorist.png",
    techStack: [
      { name: "Vue.js", logo: getTechLogo("Vue.js") },
      { name: "Laravel", logo: getTechLogo("Laravel") },
    ],
    description:
      "Website UMKM florist dengan CMS untuk manajemen produk buket dan pemesanan via WhatsApp.",
    detailedDescription:
      "Platform online untuk UMKM florist yang memudahkan showcase produk buket dan pemesanan langsung. Terintegrasi dengan WhatsApp untuk komunikasi yang lebih personal dengan pelanggan.",
    features: [
      "Product Showcase Gallery",
      "WhatsApp Integration",
      "Content Management System",
      "Order via WhatsApp",
      "Mobile Responsive",
    ],
    accent: "blue",
  },
  {
    id: 6,
    title: "Trip Planning System (TPS)",
    category: "Web App",
    image: "/portfolio/tps.png",
    techStack: [
      { name: "Express", logo: getTechLogo("Express") },
      { name: "Next.js", logo: getTechLogo("Next.js") },
      { name: "MySQL", logo: getTechLogo("MySQL") },
    ],
    description:
      "Sistem informasi logistik untuk merencanakan, memonitor, dan mencatat perjalanan dengan perhitungan biaya operasional.",
    detailedDescription:
      "Trip Planning System (TPS) adalah sistem informasi logistik yang membantu admin dan driver dalam merencanakan, memonitor, serta mencatat perjalanan. Dilengkapi dengan fitur manajemen trip, pengaturan driver dan kendaraan, serta visualisasi rute interaktif menggunakan peta.",
    features: [
      "Trip Management & Scheduling",
      "Driver & Vehicle Management",
      "Trip History & Reporting",
      "Fuel & Toll Cost Calculator",
      "Interactive Map Route Visualization",
    ],
    accent: "red",
  },
];

const categories = ["All", "Web App", "Landing Page"];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(
    null
  );

  const filteredPortfolio =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  const getAccentColor = (accent: string) => {
    return accent === "blue" ? "bg-[#34499e]" : "bg-[#ed1c23]";
  };

  return (
    <>
      <section
        id="portofolio"
        className="relative py-10 bg-white overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-[#34499e]">Portfolio</span> Project{" "}
              <span className="text-[#ed1c23]">Kami</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Lihat berbagai project yang sudah kami kerjakan dengan hasil yang
              memuaskan.
            </p>
          </motion.div>

          {/* Category Filter - Button Pills (All Screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#34499e] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#34499e] hover:text-[#34499e]"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onClick={() => setSelectedPortfolio(item)}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-[420px]"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {/* Real Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Color */}
                  <div
                    className={`absolute inset-0 ${getAccentColor(
                      item.accent
                    )} opacity-5`}
                  ></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 bg-white text-gray-900 text-xs font-semibold rounded-full shadow-md">
                      {item.category}
                    </span>
                  </div>

                  {/* View Detail Text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-semibold">
                      Lihat Detail
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed flex-grow mb-4">
                    {item.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.slice(0, 3).map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded text-xs text-gray-600"
                        >
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="w-3.5 h-3.5 object-contain"
                          />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                      {item.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded">
                          +{item.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPortfolio.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: [0, -5, 0], opacity: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-6xl mb-4"
              >
                🔍
              </motion.div>
              <p className="text-lg text-gray-400">
                Tidak ada project dalam kategori ini.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedPortfolio && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedPortfolio(null)}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="min-h-full flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedPortfolio(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="overflow-y-auto max-h-[90vh]">
                    {/* Header */}
                    <div
                      className={`${getAccentColor(
                        selectedPortfolio.accent
                      )} h-2`}
                    ></div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      {/* Category*/}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg">
                          {selectedPortfolio.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        {selectedPortfolio.title}
                      </h2>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedPortfolio.techStack.map((tech, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                          >
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              className="w-5 h-5 object-contain"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <h3 className="text-base font-bold text-gray-900 mb-2">
                          Deskripsi Project
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {selectedPortfolio.detailedDescription}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="text-base font-bold text-gray-900 mb-3">
                          Fitur Utama
                        </h3>
                        <ul className="space-y-2">
                          {selectedPortfolio.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span
                                className={`flex-shrink-0 w-5 h-5 flex items-center justify-center ${getAccentColor(
                                  selectedPortfolio.accent
                                )} text-white rounded-full text-xs mt-0.5`}
                              >
                                ✓
                              </span>
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                        {selectedPortfolio.github && (
                          <a
                            href={selectedPortfolio.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>GitHub</span>
                          </a>
                        )}
                        {selectedPortfolio.url && (
                          <a
                            href={selectedPortfolio.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 ${getAccentColor(
                              selectedPortfolio.accent
                            )} text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all`}
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            <span>Live Demo</span>
                          </a>
                        )}
                        <a
                          href="https://wa.me/6287817555827?text=Halo%20KodeKita%2C%20saya%20tertarik%20dengan%20portfolio%20Anda"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#34499e] text-white text-sm font-semibold rounded-lg hover:bg-[#2a3a7f] transition-all"
                        >
                          <span>💬</span>
                          <span>Hubungi Kami</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
