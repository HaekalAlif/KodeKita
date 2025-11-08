"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    name: "Tugas Coding",
    description:
      "Bantu kerjain tugas kuliah, debug error, atau bikin project kecil untuk mata kuliah pemrograman.",
    price: "Rp50.000",
    features: ["Debug Error", "Tugas Kuliah", "Project Kecil"],
    color: "bg-[#34499e]",
  },
  {
    id: 2,
    name: "Landing Page",
    description:
      "Website satu halaman dengan tampilan clean dan modern, cocok untuk tugas, portofolio, atau event.",
    price: "Rp300.000",
    features: ["Responsive", "Modern UI", "Fast Loading"],
    color: "bg-[#ed1c23]",
  },
  {
    id: 3,
    name: "Web App CRUD",
    description:
      "Sistem login, dashboard, dan database lengkap — cocok buat project akhir atau mini project kuliah.",
    price: "Rp500.000",
    features: ["Login System", "Dashboard", "Database"],
    color: "bg-[#34499e]",
  },
  {
    id: 4,
    name: "Fullstack Custom",
    description:
      "Project besar dan custom sesuai kebutuhanmu. Gratis konsultasi dulu via WhatsApp sebelum mulai.",
    price: "Konsultasi Gratis",
    features: ["Full Custom", "Konsultasi", "Scalable"],
    color: "bg-[#ed1c23]",
  },
];

const Services: React.FC = () => {
  return (
    <section id="layanan" className="relative py-10 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pilih <span className="text-[#34499e]">Layanan</span> yang Kamu{" "}
            <span className="text-[#ed1c23]">Butuh</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Dari tugas kuliah sampai project fullstack, semua bisa diselesaikan
            dengan harga yang ramah kantong mahasiswa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Color Indicator */}
              <div className="mb-5">
                <div
                  className={`w-12 h-1.5 ${service.color} rounded-full`}
                ></div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed min-h-[72px]">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 font-medium">
                    {service.id === 4 ? "Harga" : "Mulai dari"}
                  </span>
                  <span
                    className={`text-lg font-bold ${
                      service.color === "bg-[#34499e]"
                        ? "text-[#34499e]"
                        : "text-[#ed1c23]"
                    }`}
                  >
                    {service.price}
                  </span>
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/6287817555827?text=Halo%20KodeKita%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20${service.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-4 py-3 ${service.color} text-white text-sm font-semibold rounded-lg hover:opacity-90 hover:shadow-md transition-all`}
                >
                  Pesan Sekarang
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-r from-[#34499e] to-[#2a3a7f] rounded-2xl p-8 sm:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Belum Nemu yang Cocok?
              </h3>
              <p className="text-white/90 text-base sm:text-lg mb-6 max-w-xl mx-auto">
                Konsultasi gratis! Ceritain kebutuhanmu, kita cariin solusinya.
              </p>
              <a
                href="https://wa.me/6287817555827"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#34499e] text-sm font-bold rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all"
              >
                <span>💬</span>
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
