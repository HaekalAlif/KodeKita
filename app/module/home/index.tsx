import React from "react";
import dynamic from "next/dynamic";

import Layout from "@/app/layouts/Layout";

const Hero = dynamic(() => import("./Hero"), { ssr: false });

const Services = dynamic(() => import("./Services"), { ssr: false });

const Portfolio = dynamic(() => import("./Portfolio"), { ssr: false });

const HomeModule: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
    </Layout>
  );
};

export default HomeModule;
