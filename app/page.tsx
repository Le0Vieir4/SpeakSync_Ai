import React from "react";
import { Hero } from "./pages/Hero";
import { Nav } from "./components/Nav";
import { TranscriptionProvider } from "../context/transcriptionContext";
import { Dashboard } from "@/app/pages/Dashboard";

export default function Home() {
  return (
    <TranscriptionProvider>
      {" "}
      <main className="overflow-y-auto min-w-[365px] w-full h-full mx-auto bg-[#FFFFFF]">
        <Nav />
        <Hero /> 
        {/* <Dashboard /> */}
      </main>
    </TranscriptionProvider>
  );
}
