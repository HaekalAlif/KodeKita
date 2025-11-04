"use client";

import dynamic from "next/dynamic";

const HomeModule = dynamic(() => import("@/app/module/home"), { ssr: false });

export default function Page() {
  return <HomeModule />;
}
