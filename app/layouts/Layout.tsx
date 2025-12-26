"use client";

import React, { ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SplashScreen from "../components/SplashScreen";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5200); 

    return () => clearTimeout(timer);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      {showSplash && <SplashScreen />}
      <div 
        className="flex flex-col min-h-screen bg-white"
        style={{
          opacity: showSplash ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
          pointerEvents: showSplash ? 'none' : 'auto'
        }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;