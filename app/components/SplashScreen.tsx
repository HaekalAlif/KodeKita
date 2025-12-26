"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SplashScreen: React.FC = () => {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload logo immediately
    const img = new window.Image();
    img.src = "/logo.png";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // Fallback

    const phaseTimer = setTimeout(() => {
      if (imageLoaded) setPhase(1);
    }, 1600);
    
    const exitTimer = setTimeout(() => setShow(false), 5000);
    
    return () => {
      clearTimeout(phaseTimer);
      clearTimeout(exitTimer);
    };
  }, [imageLoaded]);

  // Professional Loading Screen
  if (!imageLoaded) {
    return (
      <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 1.2], 
            opacity: [0, 0.1, 0.05],
            x: [-100, 100, -50],
            y: [100, -100, 50],
          }}
          transition={{ 
            duration: 3, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-[400px] h-[400px] rounded-full bg-[#34499e] blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.3, 1], 
            opacity: [0, 0.08, 0.04],
            x: [100, -100, 50],
            y: [-100, 100, -50],
          }}
          transition={{ 
            duration: 3.5, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
          className="absolute w-[350px] h-[350px] rounded-full bg-[#ed1c23] blur-3xl"
        />

        {/* Main Loading Animation */}
        <div className="relative flex flex-col items-center gap-8 z-10">
          {/* Logo Pulse Animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.1, 1],
              opacity: [0, 1, 1]
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="relative"
          >
            {/* Glow Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 -m-8 rounded-full bg-linear-to-r from-[#34499e] to-[#ed1c23] blur-xl"
            />
            
            {/* Logo Container */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 flex items-center justify-center">
              <motion.div
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Image
                  src="/logo.png"
                  alt="KodeKita Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Spinner Ring */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="70 200"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34499e" />
                    <stop offset="100%" stopColor="#ed1c23" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-3"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="50 150"
                />
                <defs>
                  <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ed1c23" />
                    <stop offset="100%" stopColor="#34499e" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-sm sm:text-base font-semibold text-gray-700"
            >
              Loading KodeKita
            </motion.p>
            
            {/* Dots Animation */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 rounded-full bg-linear-to-r from-[#34499e] to-[#ed1c23]"
                />
              ))}
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-48 sm:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden"
          >
            <motion.div
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-full w-1/2 bg-linear-to-r from-[#34499e] via-[#ed1c23] to-[#34499e] rounded-full"
            />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ 
            opacity: 0,
            scale: 1.3,
            filter: "blur(20px)",
            rotateZ: 5
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0, 0.2, 1] 
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-white overflow-hidden"
        >
          {/* Phase 0: Logo Morph Explosion */}
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div
                key="logo-phase"
                initial={{ scale: 0, rotate: -360, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1], 
                  rotate: [-360, 0, 0], 
                  opacity: [0, 1, 1] 
                }}
                exit={{ 
                  scale: 0, 
                  rotate: 360,
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.34, 1.56, 0.64, 1],
                  times: [0, 0.7, 1],
                }}
                className="absolute"
              >
                <Image
                  src="/logo.png"
                  alt="KodeKita Logo"
                  width={140}
                  height={140}
                  className="w-32 h-32 sm:w-40 sm:h-40"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 1: Content Morph & Zoom In */}
          <AnimatePresence mode="wait">
            {phase === 1 && (
              <motion.div
                key="content-phase"
                initial={{ scale: 0.3, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 1.2, opacity: 0, rotateY: 15 }}
                transition={{
                  duration: 1.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                style={{ perspective: "1200px" }}
                className="flex flex-row items-center gap-8 px-6 py-8 relative z-10"
              >
                {/* Logo kiri */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="shrink-0 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="/logo-clear.png"
                      alt="KodeKita Logo"
                      width={90}
                      height={90}
                      className="w-20 h-20 sm:w-24 sm:h-24"
                      priority
                    />
                  </motion.div>
                </motion.div>

                {/* Typography */}
                <div className="flex flex-col items-start">
                  {/* Brand Name */}
                  <div className="flex mb-2 overflow-hidden">
                    {["K", "o", "d", "e", "K", "i", "t", "a"].map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ 
                          opacity: 0, 
                          y: 60, 
                          rotateX: 90,
                          scale: 0.4 
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0, 
                          rotateX: 0,
                          scale: 1 
                        }}
                        transition={{
                          delay: 0.5 + i * 0.06,
                          duration: 0.7,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                        className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#34499e]"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>

                  {/* Tagline */}
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0, originX: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ 
                      delay: 1.1, 
                      duration: 0.9, 
                      ease: [0.34, 1.56, 0.64, 1] 
                    }}
                    className="text-lg sm:text-xl font-semibold text-[#ed1c23] mb-3 inline-block"
                  >
                    Harga irit, tampilan elit
                  </motion.span>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-sm sm:text-base text-gray-700 font-medium mb-6"
                  >
                    {["Bikin website & aplikasi", " ", "profesional", " untuk ", "mahasiswa & UMKM"].map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          delay: 1.5 + i * 0.12,
                          duration: 0.6,
                        }}
                        className={
                          word === "profesional" 
                            ? "text-[#34499e] font-bold" 
                            : word === "mahasiswa & UMKM"
                            ? "text-[#ed1c23] font-bold"
                            : ""
                        }
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 2.5,
                      duration: 0.8, 
                      ease: [0.34, 1.56, 0.64, 1] 
                    }}
                  >
                    <motion.a
                      href="https://wa.me/6287817555827?text=Halo%20KodeKita%2C%20saya%20ingin%20konsultasi%20tentang%20website%20atau%20aplikasi."
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.05,
                        y: -3,
                        boxShadow: "0 20px 40px rgba(237, 28, 35, 0.25)"
                      }}
                      whileTap={{ scale: 0.97 }}
                      className="relative inline-flex items-center gap-3 px-7 py-3.5 bg-[#ed1c23] text-white text-sm font-semibold rounded-xl overflow-hidden group transition-all"
                    >
                      <motion.div
                        animate={{ x: ["-200%", "200%"] }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "linear",
                          repeatDelay: 1
                        }}
                        className="absolute inset-0 w-1/3 h-full bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      />
                      
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 flex items-center justify-center w-6 h-6 bg-white/20 rounded-full"
                      >
                        <img
                          src="https://cdn.simpleicons.org/whatsapp/FFFFFF"
                          alt="WhatsApp"
                          className="w-4 h-4"
                        />
                      </motion.div>
                      
                      <span className="relative z-10 font-semibold">Konsultasi Gratis</span>
                      
                      <motion.div
                        className="absolute inset-0 bg-linear-to-r from-[#ff3344] to-[#ed1c23] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ambient Light Orbs */}
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.6, 1.3], 
                opacity: [0, 0.12, 0],
                x: [-120, 120, -60],
                y: [120, -120, 60],
              }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
              className="absolute w-[500px] h-[500px] rounded-full bg-[#34499e] blur-3xl pointer-events-none"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.4, 1.1], 
                opacity: [0, 0.1, 0],
                x: [120, -120, 60],
                y: [-120, 120, -60],
              }}
              transition={{ duration: 3.8, delay: 0.5, ease: "easeInOut" }}
              className="absolute w-[450px] h-[450px] rounded-full bg-[#ed1c23] blur-3xl pointer-events-none"
            />
          </>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;