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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;