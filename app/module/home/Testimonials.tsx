"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  university?: string;
  project: string;
  rating: number;
  testimonial: string;
  proofImage?: string;
  date: string;
}

// Mock API Data - Real Testimonials
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Aji",
    role: "Mahasiswa Teknik Informatika",
    university: "Universitas Pendidikan Indonesia",
    project: "Sayurbox Clone",
    rating: 5,
    testimonial:
      "Pelayanannya luar biasa! Tidak hanya dibantu develop aplikasi Sayurbox Clone, tapi juga sampai setup di laptop saya. Sangat profesional dan sabar menjelaskan. Highly recommended!",
    proofImage: "/testimonials/proof-aji.jpg",
    date: "Agustus 2025",
  },
  {
    id: 2,
    name: "Salsa",
    role: "Mahasiswa + Owner UMKM",
    university: "Universitas Veteran Yogyakarta",
    project: "Website Little Fairy Florist",
    rating: 5,
    testimonial:
      "Sebagai pemilik Little Fairy Florist, saya sangat puas dengan website yang dibuat. Desain modern, mudah digunakan, dan membantu meningkatkan penjualan online toko bunga saya. Terima kasih KodeKita!",
    date: "Oktober 2024",
  },
  {
    id: 3,
    name: "Indah",
    role: "Mahasiswi",
    university: "Universitas Sebelas Maret",
    project: "Sistem Informasi Akademik",
    rating: 5,
    testimonial:
      "Tugas kuliah saya tertolong banget! Awalnya bingung mau mulai dari mana, tapi KodeKita bantu dari awal sampai selesai. Penjelasannya jelas dan hasilnya bagus. Thank you!",
    date: "Februari 2025",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoSlideKey, setAutoSlideKey] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
    setAutoSlideKey((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
    setAutoSlideKey((prev) => prev + 1);
  }, []);

  const handleDotClick = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setAutoSlideKey((prev) => prev + 1);
    },
    [currentIndex]
  );

  // Handle drag end for swipe
  const handleDragEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const swipeThreshold = 50;
      if (info.offset.x > swipeThreshold) {
        handlePrev();
      } else if (info.offset.x < -swipeThreshold) {
        handleNext();
      }
    },
    [handleNext, handlePrev]
  );

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext, autoSlideKey]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-[#34499e]">Mereka</span> Tentang{" "}
            <span className="text-[#ed1c23]">Kami</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Testimoni nyata dari mahasiswa dan pemilik UMKM yang sudah percaya
            dan puas dengan layanan KodeKita
          </p>
        </motion.div>

        {/* Carousel Container - Responsive Height */}
        <div className="relative max-w-5xl mx-auto min-h-[260px] md:h-[280px]">
          <div className="overflow-hidden h-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing h-full"
              >
                {/* Testimonial Card */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden md:h-full">
                  <div
                    className={`grid grid-cols-1 gap-0 md:h-full ${
                      currentTestimonial.proofImage ? "md:grid-cols-3" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`p-6 sm:p-8 flex flex-col ${
                        currentTestimonial.proofImage ? "md:col-span-2" : ""
                      }`}
                    >
                      {/* Top Bar: Name + Info + Rating */}
                      <div className="flex items-start justify-between gap-3 mb-4 sm:mb-6 shrink-0">
                        {/* Info */}
                        <div className="grow min-w-0">
                          <h4 className="text-base sm:text-lg font-bold text-gray-900 truncate">
                            {currentTestimonial.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {currentTestimonial.role}
                          </p>
                          {currentTestimonial.university && (
                            <p className="text-xs text-gray-500 mt-0.5 truncate">
                              {currentTestimonial.university}
                            </p>
                          )}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-0.5 shrink-0">
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <span
                              key={i}
                              className="text-yellow-400 text-base sm:text-lg"
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Mobile: Proof Image (Horizontal - Same Line) */}
                      {currentTestimonial.proofImage && (
                        <div className="md:hidden mb-4 shrink-0">
                          <div className="flex items-start gap-3">
                            {/* Text Content */}
                            <div className="grow min-w-0">
                              <p className="text-sm text-gray-700 leading-relaxed line-clamp-5">
                                &quot;{currentTestimonial.testimonial}&quot;
                              </p>
                            </div>

                            {/* Proof Image - Compact */}
                            <div className="shrink-0 w-20">
                              <div className="relative w-20 h-24 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                {/* Verified Badge */}
                                <div className="absolute top-1 right-1 z-10">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                </div>

                                {/* Real Image */}
                                <img
                                  src={currentTestimonial.proofImage}
                                  alt={`Bukti ${currentTestimonial.name}`}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    const fallback =
                                      e.currentTarget.nextElementSibling;
                                    if (fallback instanceof HTMLElement) {
                                      fallback.classList.remove("hidden");
                                    }
                                  }}
                                />

                                {/* Fallback Placeholder */}
                                <div className="w-full h-full bg-linear-to-br from-[#34499e]/5 to-[#ed1c23]/5 flex items-center justify-center absolute inset-0">
                                  <div className="text-center p-1">
                                    <div className="w-6 h-6 bg-[#34499e] rounded-full flex items-center justify-center mx-auto mb-1">
                                      <svg
                                        className="w-3 h-3 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                      </svg>
                                    </div>
                                    <p className="text-[8px] text-gray-600 font-medium leading-tight">
                                      Bukti
                                    </p>
                                    <p className="text-[7px] text-gray-500 leading-tight">
                                      Verified
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Desktop: Testimonial Text - With line clamp */}
                      <p className="hidden md:block text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 grow line-clamp-4">
                        &quot;{currentTestimonial.testimonial}&quot;
                      </p>

                      {/* Mobile: Text Only (if no proof image) */}
                      {!currentTestimonial.proofImage && (
                        <p className="md:hidden text-sm text-gray-700 leading-relaxed mb-4 line-clamp-5">
                          &quot;{currentTestimonial.testimonial}&quot;
                        </p>
                      )}

                      {/* Bottom Bar */}
                      <div className="flex flex-wrap items-center gap-2 mt-auto shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path
                              fillRule="evenodd"
                              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {currentTestimonial.project}
                        </span>

                        {/* Verified Badge */}
                        {currentTestimonial.proofImage && (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded ml-auto">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Verified
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right: Proof Image (Desktop Only) */}
                    {currentTestimonial.proofImage && (
                      <div className="hidden md:flex items-center justify-center bg-gray-50 p-6">
                        <div className="relative w-full max-w-[180px] aspect-3/4 bg-white rounded-lg shadow-md overflow-hidden">
                          {/* Verified Badge on Image */}
                          <div className="absolute top-2 right-2 z-10">
                            <div className="flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span className="text-[10px] font-bold text-gray-900">
                                Verified
                              </span>
                            </div>
                          </div>

                          {/* Real Image */}
                          <img
                            src={currentTestimonial.proofImage}
                            alt={`Bukti pembayaran ${currentTestimonial.name}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              const fallback =
                                e.currentTarget.nextElementSibling;
                              if (fallback instanceof HTMLElement) {
                                fallback.classList.remove("hidden");
                              }
                            }}
                          />

                          {/* Fallback Placeholder */}
                          <div className="w-full h-full bg-linear-to-br from-[#34499e]/5 to-[#ed1c23]/5 flex items-center justify-center absolute inset-0">
                            <div className="text-center p-4">
                              <div className="w-12 h-12 bg-[#34499e] rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg
                                  className="w-6 h-6 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                              <p className="text-xs text-gray-600 font-medium">
                                Bukti Transfer
                              </p>
                              <p className="text-[10px] text-gray-500 mt-1">
                                Payment Verified
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Desktop */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-[#34499e] text-white rounded-full items-center justify-center hover:bg-[#2a3a7f] transition-all shadow-lg cursor-pointer z-10"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-[#34499e] text-white rounded-full items-center justify-center hover:bg-[#2a3a7f] transition-all shadow-lg cursor-pointer z-10"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "w-6 h-1.5 bg-[#34499e]"
                    : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center justify-center gap-3 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-[#34499e] text-white rounded-full flex items-center justify-center shadow-md"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-[#34499e] text-white rounded-full flex items-center justify-center shadow-md"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-10 md:mt-16"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#34499e] mb-1">
              20+
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#34499e] mb-1">
              5.0
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#ed1c23] mb-1">
              100%
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Kepuasan</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
